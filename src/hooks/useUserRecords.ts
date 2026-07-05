import { useCallback, useEffect, useRef, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { STORAGE_KEY } from "../domain/restaurantConfig";
import type { UserRecord, UserRecords, VisitStatus } from "../domain/types";
import {
  applyUserRecordPatch,
  getChangedUserRecords,
  loadUserRecordsFromStorage,
  mergeGuestRecordsIntoCloud,
  normalizeUserRecord,
  saveUserRecordsToStorage
} from "../domain/userRecords";
import { isSupabaseConfigured, supabase, supabaseAnonKey } from "../lib/supabase";

const IMPORTED_USERS_KEY = `${STORAGE_KEY}:imported-cloud-users`;

export type AuthSyncStatus = "unconfigured" | "guest" | "loading" | "syncing" | "synced" | "error";

export type AuthUserProfile = {
  id: string;
  email: string | undefined;
  name: string | undefined;
  avatarUrl: string | undefined;
};

export function useUserRecords() {
  const [userRecords, setUserRecords] = useState<UserRecords>(() => loadUserRecordsFromStorage(getBrowserStorage()));
  const [authUser, setAuthUser] = useState<AuthUserProfile | undefined>();
  const [authStatus, setAuthStatus] = useState<AuthSyncStatus>(() => (isSupabaseConfigured ? "loading" : "unconfigured"));
  const [authError, setAuthError] = useState<string | undefined>();
  const userRecordsRef = useRef(userRecords);
  const syncRunRef = useRef(0);

  useEffect(() => {
    userRecordsRef.current = userRecords;
  }, [userRecords]);

  useEffect(() => {
    if (authUser) return;
    saveUserRecordsToStorage(getBrowserStorage(), userRecords);
  }, [authUser, userRecords]);

  const syncSignedInUser = useCallback(async (user: User) => {
    if (!supabase) return;

    const runId = syncRunRef.current + 1;
    syncRunRef.current = runId;
    const profile = toAuthUserProfile(user);
    setAuthUser(profile);
    setAuthStatus("syncing");
    setAuthError(undefined);

    try {
      const storage = getBrowserStorage();
      const cloudRecords = await loadCloudRecords(profile.id);
      const nextRecords = hasImportedGuestRecords(storage, profile.id)
        ? cloudRecords
        : mergeGuestRecordsIntoCloud(loadUserRecordsFromStorage(storage), cloudRecords);

      if (!hasImportedGuestRecords(storage, profile.id)) {
        const changedRecords = getChangedUserRecords(cloudRecords, nextRecords);
        await upsertCloudRecords(profile.id, changedRecords);
        markGuestRecordsImported(storage, profile.id);
      }

      if (syncRunRef.current !== runId) return;
      userRecordsRef.current = nextRecords;
      setUserRecords(nextRecords);
      setAuthStatus("synced");
    } catch (error) {
      if (syncRunRef.current !== runId) return;
      setAuthStatus("error");
      setAuthError(getErrorMessage(error, "Unable to sync saved restaurants."));
    }
  }, []);

  useEffect(() => {
    if (!supabase) {
      setAuthStatus("unconfigured");
      return undefined;
    }

    let isMounted = true;

    function applySession(user: User | undefined) {
      if (!isMounted) return;

      if (!user) {
        syncRunRef.current += 1;
        setAuthUser(undefined);
        setAuthError(undefined);
        setAuthStatus("guest");
        const localRecords = loadUserRecordsFromStorage(getBrowserStorage());
        userRecordsRef.current = localRecords;
        setUserRecords(localRecords);
        return;
      }

      void syncSignedInUser(user);
    }

    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (error) {
          setAuthStatus("error");
          setAuthError(error.message);
          return;
        }

        applySession(data.session?.user);
      })
      .catch((error: unknown) => {
        setAuthStatus("error");
        setAuthError(getErrorMessage(error, "Unable to load Google session."));
      });

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      window.setTimeout(() => applySession(session?.user), 0);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [syncSignedInUser]);

  const persistCloudRecord = useCallback(async (restaurantId: string, record: UserRecord | undefined, userId: string) => {
    if (!supabase) return;

    setAuthStatus("syncing");
    setAuthError(undefined);

    try {
      await saveCloudRecord(userId, restaurantId, record);
      setAuthStatus("synced");
    } catch (error) {
      setAuthStatus("error");
      setAuthError(getErrorMessage(error, "Unable to save restaurant note."));
    }
  }, []);

  const updateRecord = useCallback((restaurantId: string, patch: UserRecord) => {
    const next = applyUserRecordPatch(userRecordsRef.current, restaurantId, patch);
    userRecordsRef.current = next;
    setUserRecords(next);

    if (authUser) {
      void persistCloudRecord(restaurantId, next[restaurantId], authUser.id);
    }
  }, [authUser, persistCloudRecord]);

  const toggleStatus = useCallback((restaurantId: string, status: VisitStatus) => {
    const currentStatus = userRecordsRef.current[restaurantId]?.status;
    updateRecord(restaurantId, { status: currentStatus === status ? undefined : status });
  }, [updateRecord]);

  const signInWithGoogle = useCallback(async () => {
    if (!supabase) {
      setAuthStatus("unconfigured");
      setAuthError("Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable Google sync.");
      return;
    }

    setAuthStatus("loading");
    setAuthError(undefined);
    const redirectTo = typeof window === "undefined" ? undefined : window.location.origin;
    const options = redirectTo
      ? {
          redirectTo,
          queryParams: { apikey: supabaseAnonKey }
        }
      : {
          queryParams: { apikey: supabaseAnonKey }
        };
    const { error } = await supabase.auth.signInWithOAuth(
      {
        provider: "google",
        options
      }
    );

    if (error) {
      setAuthStatus(authUser ? "synced" : "guest");
      setAuthError(error.message);
    }
  }, [authUser]);

  const signOut = useCallback(async () => {
    if (!supabase) {
      setAuthUser(undefined);
      setAuthStatus("unconfigured");
      return;
    }

    setAuthStatus("loading");
    const { error } = await supabase.auth.signOut();
    if (error) {
      setAuthStatus(authUser ? "synced" : "guest");
      setAuthError(error.message);
      return;
    }

    syncRunRef.current += 1;
    setAuthUser(undefined);
    setAuthError(undefined);
    setAuthStatus("guest");
    const localRecords = loadUserRecordsFromStorage(getBrowserStorage());
    userRecordsRef.current = localRecords;
    setUserRecords(localRecords);
  }, [authUser]);

  return {
    userRecords,
    updateRecord,
    toggleStatus,
    authUser,
    authStatus,
    authError,
    signInWithGoogle,
    signOut
  };
}

function getBrowserStorage() {
  if (typeof window === "undefined") return undefined;
  return window.localStorage;
}

async function loadCloudRecords(userId: string): Promise<UserRecords> {
  if (!supabase) return {};

  const { data, error } = await supabase
    .from("user_restaurant_records")
    .select("restaurant_id,status,note")
    .eq("user_id", userId);

  if (error) throw error;

  const records: UserRecords = {};
  data.forEach((row) => {
    const record = normalizeUserRecord({ status: row.status, note: row.note ?? undefined });
    if (record) records[row.restaurant_id] = record;
  });

  return records;
}

async function upsertCloudRecords(userId: string, userRecords: UserRecords) {
  if (!supabase) return;

  const rows = Object.entries(userRecords).map(([restaurantId, record]) => ({
    user_id: userId,
    restaurant_id: restaurantId,
    status: record.status ?? null,
    note: record.note?.trim() || null
  }));

  if (!rows.length) return;

  const { error } = await supabase.from("user_restaurant_records").upsert(rows, {
    onConflict: "user_id,restaurant_id"
  });

  if (error) throw error;
}

async function saveCloudRecord(userId: string, restaurantId: string, record: UserRecord | undefined) {
  if (!supabase) return;

  if (!record) {
    const { error } = await supabase
      .from("user_restaurant_records")
      .delete()
      .eq("user_id", userId)
      .eq("restaurant_id", restaurantId);

    if (error) throw error;
    return;
  }

  const { error } = await supabase.from("user_restaurant_records").upsert(
    {
      user_id: userId,
      restaurant_id: restaurantId,
      status: record.status ?? null,
      note: record.note?.trim() || null
    },
    {
      onConflict: "user_id,restaurant_id"
    }
  );

  if (error) throw error;
}

function hasImportedGuestRecords(storage: Storage | undefined, userId: string) {
  return loadImportedUserIds(storage).includes(userId);
}

function markGuestRecordsImported(storage: Storage | undefined, userId: string) {
  if (!storage) return;
  const importedUserIds = new Set(loadImportedUserIds(storage));
  importedUserIds.add(userId);
  storage.setItem(IMPORTED_USERS_KEY, JSON.stringify([...importedUserIds]));
}

function loadImportedUserIds(storage: Storage | undefined): string[] {
  if (!storage) return [];

  try {
    const value = JSON.parse(storage.getItem(IMPORTED_USERS_KEY) || "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function toAuthUserProfile(user: User): AuthUserProfile {
  return {
    id: user.id,
    email: user.email,
    name: getMetadataString(user.user_metadata, "full_name") || getMetadataString(user.user_metadata, "name"),
    avatarUrl: getMetadataString(user.user_metadata, "avatar_url") || getMetadataString(user.user_metadata, "picture")
  };
}

function getMetadataString(metadata: User["user_metadata"], key: string) {
  const value = metadata[key];
  return typeof value === "string" && value.trim() ? value : undefined;
}

function getErrorMessage(error: unknown, fallback: string) {
  return error instanceof Error ? error.message : fallback;
}

import { useEffect, useState } from "react";
import { STORAGE_KEY } from "../domain/restaurantConfig";
import type { UserRecord, UserRecords, VisitStatus } from "../domain/types";

function loadUserRecords(): UserRecords {
  if (typeof window === "undefined") return {};

  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}") as UserRecords;
  } catch {
    return {};
  }
}

export function useUserRecords() {
  const [userRecords, setUserRecords] = useState<UserRecords>(() => loadUserRecords());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(userRecords));
  }, [userRecords]);

  function updateRecord(restaurantId: string, patch: UserRecord) {
    setUserRecords((current) => {
      const nextRecord: UserRecord = {
        ...current[restaurantId],
        ...patch
      };

      if (patch.status === undefined) delete nextRecord.status;
      if (patch.note !== undefined && !patch.note.trim()) delete nextRecord.note;

      const next = { ...current };
      if (!nextRecord.status && !nextRecord.note) delete next[restaurantId];
      else next[restaurantId] = nextRecord;

      return next;
    });
  }

  function toggleStatus(restaurantId: string, status: VisitStatus) {
    const currentStatus = userRecords[restaurantId]?.status;
    updateRecord(restaurantId, { status: currentStatus === status ? undefined : status });
  }

  return {
    userRecords,
    updateRecord,
    toggleStatus
  };
}

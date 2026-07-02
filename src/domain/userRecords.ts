import { STORAGE_KEY } from "./restaurantConfig";
import { VISIT_STATUSES, type UserRecord, type UserRecords, type VisitStatus } from "./types";

type ReadableStorage = Pick<Storage, "getItem">;
type WritableStorage = Pick<Storage, "setItem">;

export function loadUserRecordsFromStorage(storage: ReadableStorage | undefined, key = STORAGE_KEY): UserRecords {
  if (!storage) return {};

  try {
    return normalizeUserRecords(JSON.parse(storage.getItem(key) || "{}"));
  } catch {
    return {};
  }
}

export function saveUserRecordsToStorage(storage: WritableStorage | undefined, userRecords: UserRecords, key = STORAGE_KEY) {
  if (!storage) return;
  storage.setItem(key, JSON.stringify(userRecords));
}

export function applyUserRecordPatch(userRecords: UserRecords, restaurantId: string, patch: UserRecord): UserRecords {
  const hasStatusPatch = Object.prototype.hasOwnProperty.call(patch, "status");
  const hasNotePatch = Object.prototype.hasOwnProperty.call(patch, "note");
  const nextRecord: UserRecord = {
    ...userRecords[restaurantId],
    ...patch
  };

  if (hasStatusPatch && patch.status === undefined) delete nextRecord.status;
  if (hasNotePatch && (patch.note === undefined || !patch.note.trim())) delete nextRecord.note;

  const next = { ...userRecords };
  if (!nextRecord.status && !nextRecord.note) delete next[restaurantId];
  else next[restaurantId] = nextRecord;

  return next;
}

export function mergeGuestRecordsIntoCloud(guestRecords: UserRecords, cloudRecords: UserRecords): UserRecords {
  const merged: UserRecords = { ...cloudRecords };

  Object.entries(guestRecords).forEach(([restaurantId, guestRecord]) => {
    const cloudRecord = cloudRecords[restaurantId];
    if (!cloudRecord) {
      merged[restaurantId] = guestRecord;
      return;
    }

    const mergedRecord = normalizeUserRecord({
      status: cloudRecord.status ?? guestRecord.status,
      note: cloudRecord.note ?? guestRecord.note
    });

    if (mergedRecord) merged[restaurantId] = mergedRecord;
    else delete merged[restaurantId];
  });

  return merged;
}

export function getChangedUserRecords(sourceRecords: UserRecords, targetRecords: UserRecords): UserRecords {
  const changed: UserRecords = {};

  Object.entries(targetRecords).forEach(([restaurantId, targetRecord]) => {
    if (!areUserRecordsEqual(sourceRecords[restaurantId], targetRecord)) {
      changed[restaurantId] = targetRecord;
    }
  });

  return changed;
}

export function normalizeUserRecords(value: unknown): UserRecords {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  const records: UserRecords = {};
  Object.entries(value).forEach(([restaurantId, record]) => {
    const normalizedRecord = normalizeUserRecord(record);
    if (normalizedRecord) records[restaurantId] = normalizedRecord;
  });

  return records;
}

export function normalizeUserRecord(value: unknown): UserRecord | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) return undefined;

  const candidate = value as Partial<UserRecord>;
  const record: UserRecord = {};
  if (isVisitStatus(candidate.status)) record.status = candidate.status;
  if (typeof candidate.note === "string" && candidate.note.trim()) record.note = candidate.note;

  return record.status || record.note ? record : undefined;
}

export function areUserRecordsEqual(left: UserRecord | undefined, right: UserRecord | undefined) {
  return (left?.status ?? "") === (right?.status ?? "") && (left?.note ?? "") === (right?.note ?? "");
}

function isVisitStatus(status: unknown): status is VisitStatus {
  return typeof status === "string" && VISIT_STATUSES.includes(status as VisitStatus);
}

import { describe, expect, it } from "vitest";
import { STORAGE_KEY } from "../../src/domain/restaurantConfig";
import {
  applyUserRecordPatch,
  getChangedUserRecords,
  loadUserRecordsFromStorage,
  mergeGuestRecordsIntoCloud,
  saveUserRecordsToStorage
} from "../../src/domain/userRecords";

class FakeStorage implements Pick<Storage, "getItem" | "setItem"> {
  private readonly values = new Map<string, string>();

  getItem(key: string) {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string) {
    this.values.set(key, value);
  }
}

describe("user record persistence helpers", () => {
  it("loads and saves guest records through local storage", () => {
    const storage = new FakeStorage();

    saveUserRecordsToStorage(storage, {
      kiln: { status: "want" },
      mountain: { note: "Counter seats" }
    });

    expect(loadUserRecordsFromStorage(storage)).toEqual({
      kiln: { status: "want" },
      mountain: { note: "Counter seats" }
    });
  });

  it("ignores malformed local storage records", () => {
    const storage = new FakeStorage();
    storage.setItem(STORAGE_KEY, JSON.stringify({ bad: { status: "maybe" }, good: { status: "loved" } }));

    expect(loadUserRecordsFromStorage(storage)).toEqual({
      good: { status: "loved" }
    });
  });

  it("merges guest records into cloud records without overwriting cloud fields", () => {
    const merged = mergeGuestRecordsIntoCloud(
      {
        cloudConflict: { status: "want", note: "Local note" },
        cloudMissingStatus: { status: "booked", note: "Local note" },
        guestOnly: { status: "visited" }
      },
      {
        cloudConflict: { status: "loved", note: "Cloud note" },
        cloudMissingStatus: { note: "Cloud note" }
      }
    );

    expect(merged).toEqual({
      cloudConflict: { status: "loved", note: "Cloud note" },
      cloudMissingStatus: { status: "booked", note: "Cloud note" },
      guestOnly: { status: "visited" }
    });
  });

  it("clears a record when both note and status are empty", () => {
    const withoutNote = applyUserRecordPatch(
      {
        sola: { status: "want", note: "Birthday" }
      },
      "sola",
      { note: "" }
    );

    expect(withoutNote).toEqual({
      sola: { status: "want" }
    });

    expect(applyUserRecordPatch(withoutNote, "sola", { status: undefined })).toEqual({});
  });

  it("returns only records that need cloud upsert", () => {
    expect(
      getChangedUserRecords(
        {
          same: { status: "want" },
          changed: { note: "Old" }
        },
        {
          same: { status: "want" },
          changed: { note: "New" },
          added: { status: "visited" }
        }
      )
    ).toEqual({
      changed: { note: "New" },
      added: { status: "visited" }
    });
  });
});

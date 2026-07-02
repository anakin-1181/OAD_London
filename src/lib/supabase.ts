import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { VisitStatus } from "../domain/types";

export type UserRestaurantRecordRow = {
  user_id: string;
  restaurant_id: string;
  status: VisitStatus | null;
  note: string | null;
  updated_at: string;
};

type Database = {
  public: {
    Tables: {
      user_restaurant_records: {
        Row: UserRestaurantRecordRow;
        Insert: {
          user_id: string;
          restaurant_id: string;
          status?: VisitStatus | null;
          note?: string | null;
          updated_at?: string;
        };
        Update: {
          status?: VisitStatus | null;
          note?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export const supabaseUrl = normalizeEnvValue(import.meta.env.VITE_SUPABASE_URL);
export const supabaseAnonKey = normalizeEnvValue(import.meta.env.VITE_SUPABASE_ANON_KEY);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient<Database> | null = isSupabaseConfigured
  ? createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        detectSessionInUrl: true,
        persistSession: true
      }
    })
  : null;

function normalizeEnvValue(value: string | undefined) {
  return value?.trim().replace(/^["']|["']$/g, "") || "";
}

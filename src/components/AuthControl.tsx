import { AlertCircle, Cloud, LogIn, LogOut } from "lucide-react";
import type { AuthSyncStatus, AuthUserProfile } from "../hooks/useUserRecords";

type AuthControlProps = {
  error: string | undefined;
  onSignIn: () => void;
  onSignOut: () => void;
  status: AuthSyncStatus;
  user: AuthUserProfile | undefined;
  variant?: "desktop" | "mobile";
};

export function AuthControl({
  error,
  onSignIn,
  onSignOut,
  status,
  user,
  variant = "desktop"
}: AuthControlProps) {
  const isSignedIn = Boolean(user);
  const isDisabled = status === "loading" || status === "syncing" || (!isSignedIn && status === "unconfigured");
  const className = [
    "auth-control",
    `auth-control-${variant}`,
    isSignedIn ? "signed-in" : "signed-out",
    status === "error" ? "has-error" : ""
  ]
    .filter(Boolean)
    .join(" ");
  const label = isSignedIn ? getDisplayName(user) : "Sign in with Google";
  const helper = getAuthHelper(status, isSignedIn, error);
  const title = status === "unconfigured" ? "Add Supabase environment variables to enable Google sync." : helper;

  return (
    <button
      type="button"
      className={className}
      onClick={isSignedIn ? onSignOut : onSignIn}
      disabled={isDisabled}
      title={title}
      aria-label={isSignedIn ? `${label}. ${helper}. Sign out.` : `${label}. ${helper}.`}
    >
      <span className="auth-avatar" aria-hidden="true">
        {user?.avatarUrl ? <img src={user.avatarUrl} alt="" referrerPolicy="no-referrer" /> : getAuthIcon(status, isSignedIn)}
      </span>
      <span className="auth-text">
        <strong>{label}</strong>
        <small>{helper}</small>
      </span>
      <span className="auth-action-icon" aria-hidden="true">
        {isSignedIn ? <LogOut size={15} /> : <LogIn size={15} />}
      </span>
    </button>
  );
}

function getDisplayName(user: AuthUserProfile | undefined) {
  if (!user) return "Account";
  if (user.name) return user.name.split(" ")[0] || user.name;
  return user.email?.split("@")[0] || "Account";
}

function getAuthHelper(status: AuthSyncStatus, isSignedIn: boolean, error: string | undefined) {
  if (status === "unconfigured") return "Sync setup needed";
  if (status === "loading") return "Checking session";
  if (status === "syncing") return "Syncing saves";
  if (status === "error") return error || "Sync issue";
  if (isSignedIn) return "Cloud saved";
  return "Guest saves local";
}

function getAuthIcon(status: AuthSyncStatus, isSignedIn: boolean) {
  if (status === "error" || status === "unconfigured") return <AlertCircle size={17} />;
  if (isSignedIn) return <Cloud size={17} />;
  return <LogIn size={17} />;
}

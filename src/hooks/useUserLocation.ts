import { useCallback, useState } from "react";
import {
  geolocationOptions,
  getGeolocationErrorMessage,
  getGeolocationErrorStatus,
  toUserLocation,
  type LocationStatus,
  type UserLocation
} from "../domain/location";

export function useUserLocation() {
  const [location, setLocation] = useState<UserLocation | undefined>();
  const [status, setStatus] = useState<LocationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [focusKey, setFocusKey] = useState(0);

  const requestLocation = useCallback(() => {
    if (location) {
      setFocusKey((current) => current + 1);
    }

    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setStatus("unavailable");
      setErrorMessage("Location is not available in this browser.");
      return;
    }

    if (typeof window !== "undefined" && !window.isSecureContext) {
      setStatus("unavailable");
      setErrorMessage("Location requires a secure HTTPS page. Open the Vercel https URL in Safari, then try again.");
      return;
    }

    setStatus("locating");
    setErrorMessage(undefined);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(toUserLocation(position));
        setStatus("ready");
        setErrorMessage(undefined);
        setFocusKey((current) => current + 1);
      },
      (error) => {
        setStatus(getGeolocationErrorStatus(error.code));
        setErrorMessage(getGeolocationErrorMessage(error.code));
      },
      geolocationOptions
    );
  }, [location]);

  return {
    errorMessage,
    focusKey,
    isLocating: status === "locating",
    location,
    requestLocation,
    status
  };
}

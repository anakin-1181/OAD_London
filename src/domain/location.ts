export type LocationStatus = "idle" | "locating" | "ready" | "denied" | "unavailable" | "error";

export type UserLocation = {
  lat: number;
  lng: number;
  accuracy: number;
  timestamp: number;
};

export const geolocationOptions = {
  enableHighAccuracy: true,
  maximumAge: 30_000,
  timeout: 10_000
};

export function toUserLocation(position: GeolocationPosition): UserLocation {
  return {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
    accuracy: position.coords.accuracy,
    timestamp: position.timestamp
  };
}

export function getGeolocationErrorStatus(errorCode: number): LocationStatus {
  if (errorCode === 1) return "denied";
  if (errorCode === 2) return "unavailable";
  return "error";
}

export function getGeolocationErrorMessage(errorCode: number) {
  if (errorCode === 1) return "Location permission is blocked. Allow Location in Safari website settings or iPhone Location Services, then try again.";
  if (errorCode === 2) return "Your current position is unavailable. Try again near a stronger signal.";
  if (errorCode === 3) return "Location lookup timed out. Try again in a moment.";
  return "Could not find your location. Try again in a moment.";
}

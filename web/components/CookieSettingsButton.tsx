"use client";

export const COOKIE_SETTINGS_EVENT = "p56:open-cookie-settings";

export default function CookieSettingsButton() {
  return (
    <button
      className="footer-link-button"
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
    >
      Cookie-Einstellungen
    </button>
  );
}

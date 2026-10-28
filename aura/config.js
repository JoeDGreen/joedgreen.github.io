// Aura configuration — production values (set 2026-10-27).
// LIVEKIT_URL: the wss:// address clients connect to for audio.
// TOKEN_ENDPOINT: the https:// BASE of the Aura server. The app appends
// /token, /moderate and /auth/* itself, so do NOT add a path here.
window.AURA_CONFIG = {
  LIVEKIT_URL: "wss://aura.joedgreen.com",
  TOKEN_ENDPOINT: "https://aura.joedgreen.com"
};

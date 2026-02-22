// ╔════════════════════════════════════════════════╗
// ║  ADMIN AUTHENTICATION  —  admin-auth.js        ║
// ║                                                ║
// ║  Security features:                            ║
// ║  • Password hashed (djb2) before storing       ║
// ║  • 5 wrong attempts  →  15-min lockout         ║
// ║  • Session token in sessionStorage             ║
// ║    (auto-expires when tab/browser is closed)   ║
// ║  • Logout clears session token                 ║
// ║  • Change-password invalidates all sessions    ║
// ╚════════════════════════════════════════════════╝

const DEFAULT_PASS  = "Admin@1234";   // change after first login!
const MAX_ATTEMPTS  = 5;
const LOCKOUT_MS    = 15 * 60 * 1000; // 15 minutes

// djb2 hash — lightweight, enough for localStorage
function hashStr(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) ^ str.charCodeAt(i);
  return (h >>> 0).toString(36);
}

// Seed default password hash on first run
function seedPassword() {
  if (!localStorage.getItem("admin_pass_hash")) {
    localStorage.setItem("admin_pass_hash", hashStr(DEFAULT_PASS));
  }
}

// Is the current browser session authenticated?
function isAuthenticated() {
  const tok = sessionStorage.getItem("admin_session");
  const ref = localStorage.getItem("admin_session_token");
  return !!(tok && ref && tok === ref);
}

function generateToken() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function getLockout() {
  const ts = parseInt(localStorage.getItem("admin_lockout_until") || "0");
  return ts > Date.now() ? ts : null;
}

function getAttempts() {
  return parseInt(localStorage.getItem("admin_attempts") || "0");
}

function resetAttempts() {
  localStorage.removeItem("admin_attempts");
  localStorage.removeItem("admin_lockout_until");
}

// Main login function — returns { ok, locked, until, remaining }
function attemptLogin(password) {
  const lockUntil = getLockout();
  if (lockUntil) return { ok: false, locked: true, until: lockUntil };

  const hash   = hashStr(password);
  const stored = localStorage.getItem("admin_pass_hash") || hashStr(DEFAULT_PASS);

  if (hash === stored) {
    const token = generateToken();
    sessionStorage.setItem("admin_session", token);
    localStorage.setItem("admin_session_token", token);
    resetAttempts();
    return { ok: true };
  }

  const attempts = getAttempts() + 1;
  localStorage.setItem("admin_attempts", attempts);

  if (attempts >= MAX_ATTEMPTS) {
    const until = Date.now() + LOCKOUT_MS;
    localStorage.setItem("admin_lockout_until", until);
    localStorage.removeItem("admin_attempts");
    return { ok: false, locked: true, until };
  }

  return { ok: false, locked: false, remaining: MAX_ATTEMPTS - attempts };
}

// Logout
function adminLogout() {
  sessionStorage.removeItem("admin_session");
  localStorage.removeItem("admin_session_token");
  location.reload();
}

// Change password — returns { ok, msg }
function changePassword(current, newPass, confirm) {
  if (!current || !newPass || !confirm) return { ok: false, msg: "All fields are required." };
  if (newPass !== confirm)               return { ok: false, msg: "New passwords do not match." };
  if (newPass.length < 8)               return { ok: false, msg: "Password must be at least 8 characters." };

  const stored = localStorage.getItem("admin_pass_hash") || hashStr(DEFAULT_PASS);
  if (hashStr(current) !== stored)      return { ok: false, msg: "Current password is incorrect." };

  localStorage.setItem("admin_pass_hash", hashStr(newPass));
  // Invalidate all sessions
  localStorage.removeItem("admin_session_token");
  sessionStorage.removeItem("admin_session");
  return { ok: true };
}
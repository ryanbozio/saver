// Shared helpers for the app tracker pages: session, CSV parsing, and balance math.

const APP_TOKEN_KEY = "familyAppGithubToken";
const APP_CART_KEY = "familyAppPendingActions";

function appUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${window.APP_BASE_URL || ""}${normalizedPath}`;
}

function appSession() {
  return {
    token: sessionStorage.getItem(APP_TOKEN_KEY),
    login: sessionStorage.getItem("familyAppGithubLogin"),
  };
}

function requireActionLogin() {
  const session = appSession();
  if (!session.token || !session.login) {
    window.location.replace(appUrl("/Login/"));
    return false;
  }
  return true;
}

function appLogout() {
  sessionStorage.removeItem(APP_TOKEN_KEY);
  sessionStorage.removeItem("familyAppGithubLogin");
  sessionStorage.removeItem(APP_CART_KEY);
  window.location.replace(appUrl("/Login/"));
}

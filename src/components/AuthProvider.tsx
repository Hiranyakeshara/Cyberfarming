"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import { demoAccounts, UserRole } from "@/lib/data";

type AuthUser = { name: string; email: string; role: UserRole };

type AuthContextType = {
  user: AuthUser | null;
  ready: boolean;
  login: (email: string, password: string) => { ok: boolean; message: string };
  loginAs: (role: UserRole) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const AUTH_EVENT = "farmsec-auth-change";

function readStoredUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const saved = window.localStorage.getItem("farmsec_user");
    return saved ? (JSON.parse(saved) as AuthUser) : null;
  } catch {
    window.localStorage.removeItem("farmsec_user");
    return null;
  }
}

function subscribeToAuth(callback: () => void) {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener("storage", callback);
  window.addEventListener(AUTH_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(AUTH_EVENT, callback);
  };
}

function emitAuthChange() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(AUTH_EVENT));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useSyncExternalStore(subscribeToAuth, readStoredUser, () => null);
  const ready = useSyncExternalStore(() => () => undefined, () => true, () => false);

  const save = useCallback((nextUser: AuthUser | null) => {
    if (nextUser) window.localStorage.setItem("farmsec_user", JSON.stringify(nextUser));
    else window.localStorage.removeItem("farmsec_user");
    emitAuthChange();
  }, []);

  const login = useCallback((email: string, password: string) => {
    const match = demoAccounts.find(
      (account) => account.email.toLowerCase() === email.trim().toLowerCase() && account.password === password,
    );
    if (!match) return { ok: false, message: "Incorrect demo email or password." };
    save({ name: match.name, email: match.email, role: match.role });
    return { ok: true, message: "Signed in." };
  }, [save]);

  const loginAs = useCallback((role: UserRole) => {
    const match = demoAccounts.find((account) => account.role === role)!;
    save({ name: match.name, email: match.email, role: match.role });
  }, [save]);

  const logout = useCallback(() => save(null), [save]);
  const value = useMemo(() => ({ user, ready, login, loginAs, logout }), [user, ready, login, loginAs, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}

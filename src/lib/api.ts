import { auth } from "@/integrations/firebase/client";

const API_BASE = "http://localhost:8080/api";

const getHeaders = async () => {
  const user = auth.currentUser;
  if (!user) return { "Content-Type": "application/json" };
  const token = await user.getIdToken();
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
};

export const syncUser = async () => {
  const res = await fetch(`${API_BASE}/auth/sync`, {
    method: "POST",
    headers: await getHeaders(),
  });
  return res.json();
};

export const saveOnboardingBackend = async (classGroup: string, goal: string) => {
  const res = await fetch(`${API_BASE}/onboarding/complete`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify({ classGroup, goal })
  });
  return res.json();
};

export const getOnboardingBackend = async () => {
  const res = await fetch(`${API_BASE}/onboarding/status`, {
    method: "GET",
    headers: await getHeaders(),
  });
  return res.json();
};

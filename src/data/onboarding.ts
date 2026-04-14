import type { OnboardingProfile } from "@/types";

export const classGroups = [
  ...Array.from({ length: 5 }, (_, i) => ({ label: `Class ${i + 1}`, value: `class-${i + 1}`, emoji: "🌱" })),
  ...Array.from({ length: 3 }, (_, i) => ({ label: `Class ${i + 6}`, value: `class-${i + 6}`, emoji: "📚" })),
  ...Array.from({ length: 2 }, (_, i) => ({ label: `Class ${i + 9}`, value: `class-${i + 9}`, emoji: "🎯" })),
  { label: "Class 11 (Science)", value: "class-11-science", emoji: "🔬" },
  { label: "Class 11 (Commerce)", value: "class-11-commerce", emoji: "📊" },
  { label: "Class 11 (Arts)", value: "class-11-arts", emoji: "🎨" },
  { label: "Class 12 (Science)", value: "class-12-science", emoji: "🔬" },
  { label: "Class 12 (Commerce)", value: "class-12-commerce", emoji: "📊" },
  { label: "Class 12 (Arts)", value: "class-12-arts", emoji: "🎨" },
];

export const goalOptions = [
  { label: "Learn fundamentals", value: "learn-fundamentals" },
  { label: "Improve exam scores", value: "improve-exams" },
  { label: "Practice quizzes", value: "practice-quizzes" },
  { label: "Build a daily study habit", value: "daily-habit" },
] as const;

export const classSubjects: Record<string, string[]> = {
  ...Object.fromEntries(Array.from({ length: 5 }, (_, i) => [`class-${i + 1}`, ["Mathematics", "English", "Hindi", "EVS"]])),
  ...Object.fromEntries(Array.from({ length: 3 }, (_, i) => [`class-${i + 6}`, ["Mathematics", "Science", "Social Science", "English", "Hindi", "Computer Science"]])),
  ...Object.fromEntries(Array.from({ length: 2 }, (_, i) => [`class-${i + 9}`, ["Mathematics", "Science", "Social Science", "English", "Hindi", "Computer Science"]])),
  "class-11-science": ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Computer Science"],
  "class-11-commerce": ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
  "class-11-arts": ["History", "Geography", "Political Science", "Economics", "English", "Hindi"],
  "class-12-science": ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Computer Science"],
  "class-12-commerce": ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
  "class-12-arts": ["History", "Geography", "Political Science", "Economics", "English", "Hindi"],
};

const storageKey = (userId: string) => `vidyapath-onboarding-${userId}`;

export const getOnboardingProfile = (userId: string): OnboardingProfile | null => {
  const stored = localStorage.getItem(storageKey(userId));
  return stored ? (JSON.parse(stored) as OnboardingProfile) : null;
};

export const hasCompletedOnboarding = (userId: string) => Boolean(getOnboardingProfile(userId));

export const saveOnboardingProfile = (userId: string, profile: Omit<OnboardingProfile, "completedAt">) => {
  const payload: OnboardingProfile = {
    ...profile,
    completedAt: new Date().toISOString(),
  };
  localStorage.setItem(storageKey(userId), JSON.stringify(payload));
  return payload;
};

import { allCourses } from '@/data/courses';

export interface CoursePlan {
  [grade: number]: string[];
}

export const EMPTY_PLAN: CoursePlan = { 9: [], 10: [], 11: [], 12: [] };

const STORAGE_KEY = 'mhs-journey-plan';

export function savePlan(plan: CoursePlan): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
  } catch {
    // Storage full or unavailable — silently fail
  }
}

export function loadPlan(): CoursePlan {
  // URL hash takes priority (share links)
  if (typeof window !== 'undefined' && window.location.hash) {
    const fromHash = decodePlanFromHash(window.location.hash);
    if (fromHash) return fromHash;
  }

  // Then localStorage
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Validate shape
      if (parsed && typeof parsed === 'object' && Array.isArray(parsed[9])) {
        return { 9: parsed[9] ?? [], 10: parsed[10] ?? [], 11: parsed[11] ?? [], 12: parsed[12] ?? [] };
      }
    }
  } catch {
    // Corrupted data — start fresh
  }

  return { ...EMPTY_PLAN, 9: [], 10: [], 11: [], 12: [] };
}

// ─── Compact encoding using course codes ─────────────────────────────────────
// Format: #p=CODE,CODE|CODE,CODE|CODE,CODE|CODE,CODE
// Grades 9-12 separated by |, courses within a grade separated by ,
// Course codes (e.g. "1101H", "3205") are much shorter than IDs

function idToCode(id: string): string | null {
  const course = allCourses.find((c) => c.id === id);
  return course?.code ?? null;
}

function codeToId(code: string): string | null {
  const course = allCourses.find((c) => c.code === code);
  return course?.id ?? null;
}

export function encodePlanToHash(plan: CoursePlan): string {
  const grades = [9, 10, 11, 12].map((g) =>
    (plan[g] ?? []).map((id) => idToCode(id)).filter(Boolean).join(',')
  );
  return '#p=' + grades.join('|');
}

export function decodePlanFromHash(hash: string): CoursePlan | null {
  // New compact format: #p=CODE,CODE|CODE,CODE|...
  const compactMatch = hash.match(/^#p=(.*)$/);
  if (compactMatch) {
    try {
      const grades = compactMatch[1].split('|');
      if (grades.length !== 4) return null;
      const plan: CoursePlan = { 9: [], 10: [], 11: [], 12: [] };
      [9, 10, 11, 12].forEach((g, i) => {
        plan[g] = grades[i]
          .split(',')
          .filter(Boolean)
          .map((code) => codeToId(code))
          .filter((id): id is string => id !== null);
      });
      return plan;
    } catch {
      return null;
    }
  }

  // Legacy base64 format: #plan=BASE64
  try {
    const legacyMatch = hash.match(/^#plan=(.+)$/);
    if (!legacyMatch) return null;
    const json = atob(legacyMatch[1]);
    const parsed = JSON.parse(json);
    if (parsed && typeof parsed === 'object' && Array.isArray(parsed[9])) {
      return { 9: parsed[9] ?? [], 10: parsed[10] ?? [], 11: parsed[11] ?? [], 12: parsed[12] ?? [] };
    }
  } catch {
    // Invalid hash
  }
  return null;
}

export function getShareUrl(plan: CoursePlan): string {
  const base = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';
  return base + encodePlanToHash(plan);
}

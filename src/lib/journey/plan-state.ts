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

export function encodePlanToHash(plan: CoursePlan): string {
  const json = JSON.stringify(plan);
  return '#plan=' + btoa(json);
}

export function decodePlanFromHash(hash: string): CoursePlan | null {
  try {
    const match = hash.match(/^#plan=(.+)$/);
    if (!match) return null;
    const json = atob(match[1]);
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

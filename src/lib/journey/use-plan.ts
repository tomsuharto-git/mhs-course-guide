"use client";

import { useState, useEffect, useCallback } from 'react';
import { CoursePlan, EMPTY_PLAN, loadPlan, savePlan, getShareUrl } from './plan-state';

export function usePlan() {
  const [plan, setPlan] = useState<CoursePlan>(EMPTY_PLAN);
  const [loaded, setLoaded] = useState(false);

  // Load from URL hash or localStorage on mount
  useEffect(() => {
    const restored = loadPlan();
    setPlan(restored);
    setLoaded(true);

    // Clear hash after loading (don't persist share URL in address bar)
    if (window.location.hash.startsWith('#plan=')) {
      history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  // Persist on change (skip initial empty state)
  useEffect(() => {
    if (loaded) {
      savePlan(plan);
    }
  }, [plan, loaded]);

  const addCourse = useCallback((grade: number, courseId: string) => {
    setPlan((prev) => {
      if (prev[grade]?.includes(courseId)) return prev;
      return { ...prev, [grade]: [...(prev[grade] ?? []), courseId] };
    });
  }, []);

  const removeCourse = useCallback((grade: number, courseId: string) => {
    setPlan((prev) => ({
      ...prev,
      [grade]: (prev[grade] ?? []).filter((id) => id !== courseId),
    }));
  }, []);

  const clearGrade = useCallback((grade: number) => {
    setPlan((prev) => ({ ...prev, [grade]: [] }));
  }, []);

  const clearAll = useCallback(() => {
    setPlan({ 9: [], 10: [], 11: [], 12: [] });
  }, []);

  const shareUrl = useCallback(() => {
    return getShareUrl(plan);
  }, [plan]);

  return { plan, loaded, addCourse, removeCourse, clearGrade, clearAll, shareUrl };
}

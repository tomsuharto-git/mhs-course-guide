"use client";

import { useState, useMemo, useEffect } from "react";
import { Course, Department, CourseLevel, DEPARTMENT_META } from "@/data/types";
import { allCourses, getCourseById } from "@/data/courses";
import { getAvailableCourses, getTextPrerequisites } from "@/lib/journey/prerequisite-engine";
import { CoursePlan } from "@/lib/journey/plan-state";
import { CoursePickerItem } from "./CoursePickerItem";

const ALL_DEPARTMENTS = Object.keys(DEPARTMENT_META) as Department[];
const ALL_LEVELS: { value: CourseLevel; label: string }[] = [
  { value: "academic", label: "Academic" },
  { value: "honors", label: "Honors" },
  { value: "ap", label: "AP" },
  { value: "high-honors", label: "High Honors" },
];

const GRADES = [9, 10, 11, 12] as const;
const GRADE_LABELS: Record<number, string> = { 9: "9th", 10: "10th", 11: "11th", 12: "12th" };

const allCourseIds = new Set(allCourses.map((c) => c.id));

export function CoursePicker({
  initialGrade,
  plan,
  onAdd,
  onClose,
}: {
  initialGrade: number;
  plan: CoursePlan;
  onAdd: (grade: number, courseId: string) => void;
  onClose: () => void;
}) {
  const [activeGrade, setActiveGrade] = useState(initialGrade);
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState<Department | null>(null);
  const [levelFilter, setLevelFilter] = useState<CourseLevel | null>(null);

  // Lock body scroll while picker is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const available = useMemo(
    () => getAvailableCourses(plan, activeGrade, allCourses),
    [plan, activeGrade],
  );

  const filtered = useMemo(() => {
    let result = available;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q),
      );
    }
    if (deptFilter) {
      result = result.filter((c) => c.department === deptFilter);
    }
    if (levelFilter) {
      result = result.filter((c) => c.level === levelFilter);
    }
    return result;
  }, [available, search, deptFilter, levelFilter]);

  // Group by department
  const grouped = useMemo(() => {
    const groups: { dept: Department; courses: Course[] }[] = [];
    const byDept = new Map<Department, Course[]>();
    for (const c of filtered) {
      const list = byDept.get(c.department) ?? [];
      list.push(c);
      byDept.set(c.department, list);
    }
    for (const dept of ALL_DEPARTMENTS) {
      const courses = byDept.get(dept);
      if (courses?.length) {
        groups.push({ dept, courses });
      }
    }
    return groups;
  }, [filtered]);

  // Selected courses for the active grade
  const selectedForGrade = useMemo(() => {
    return (plan[activeGrade] ?? [])
      .map((id) => getCourseById(id))
      .filter((c): c is Course => c !== undefined);
  }, [plan, activeGrade]);

  // Count selected per grade (for tab badges)
  const selectedPerGrade = useMemo(() => {
    const counts: Record<number, number> = {};
    for (const g of GRADES) {
      counts[g] = (plan[g] ?? []).length;
    }
    return counts;
  }, [plan]);

  // Departments that already have a core course selected for this grade
  const filledDepartments = useMemo(() => {
    const filled = new Set<Department>();
    for (const id of plan[activeGrade] ?? []) {
      const course = getCourseById(id);
      if (course) filled.add(course.department);
    }
    return filled;
  }, [plan, activeGrade]);

  const hasActiveFilters = deptFilter !== null || levelFilter !== null;

  const clearFilters = () => {
    setDeptFilter(null);
    setLevelFilter(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm p-4 sm:pt-[6vh]"
      onClick={onClose}
    >
      <div
        className="bg-cream rounded-xl border border-border shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 pt-4 pb-3 border-b border-border/60">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-[family-name:var(--font-heading)] text-text tracking-wider uppercase">
              Add Courses
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-text-muted hover:text-text hover:bg-warm-gray transition-colors"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 4l10 10M4 14L14 4" />
              </svg>
            </button>
          </div>

          {/* Grade tabs */}
          <div className="flex gap-1 mb-3 bg-warm-gray rounded-lg p-1">
            {GRADES.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGrade(g)}
                className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeGrade === g
                    ? "bg-white text-mountie-blue shadow-sm"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {GRADE_LABELS[g]}
                {selectedPerGrade[g] > 0 && (
                  <span className={`ml-1 text-[10px] font-semibold ${
                    activeGrade === g ? "text-mountie-blue/60" : "text-text-muted/50"
                  }`}>
                    ({selectedPerGrade[g]})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            autoFocus
            className="w-full px-3 py-2 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-mountie-blue/40 focus:border-mountie-blue/40 placeholder:text-text-muted/50"
          />

          {/* Filter chips — always visible */}
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border/40">
            {ALL_DEPARTMENTS.filter((d) => d !== "special-education").map((dept) => {
              const meta = DEPARTMENT_META[dept];
              const active = deptFilter === dept;
              const filled = filledDepartments.has(dept);
              return (
                <button
                  key={dept}
                  onClick={() => setDeptFilter(active ? null : dept)}
                  className={`chip-interactive px-2.5 py-1 text-[11px] font-medium rounded-full border transition-colors ${
                    active
                      ? "text-white"
                      : filled
                        ? "bg-warm-gray/60 text-text-muted/50 border-border/50 line-through decoration-text-muted/30"
                        : "bg-white text-text-muted border-border hover:border-text-muted/40"
                  }`}
                  style={active ? { backgroundColor: meta.color, borderColor: meta.color } : undefined}
                >
                  {filled && !active && (
                    <svg className="inline w-3 h-3 mr-0.5 -mt-px" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
                    </svg>
                  )}
                  {meta.label}
                </button>
              );
            })}

            <span className="w-px h-5 bg-border self-center mx-0.5" />

            {ALL_LEVELS.map((lvl) => {
              const active = levelFilter === lvl.value;
              return (
                <button
                  key={lvl.value}
                  onClick={() => setLevelFilter(active ? null : lvl.value)}
                  className={`chip-interactive px-2.5 py-1 text-[11px] font-medium rounded-full border transition-colors ${
                    active
                      ? "bg-mountie-blue text-white border-mountie-blue"
                      : "bg-white text-text-muted border-border hover:border-text-muted/40"
                  }`}
                >
                  {lvl.label}
                </button>
              );
            })}

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-2 py-1 text-[11px] text-text-muted hover:text-text transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Selected courses summary for this grade */}
        {selectedForGrade.length > 0 && (
          <div className="px-5 py-2 bg-warm-gray/40 border-b border-border/40">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-text-muted uppercase tracking-wide shrink-0">
                {GRADE_LABELS[activeGrade]} selected:
              </span>
              <div className="flex flex-wrap gap-1 overflow-hidden max-h-6">
                {selectedForGrade.map((c) => (
                  <span
                    key={c.id}
                    className="text-[11px] text-text-muted bg-white px-1.5 py-0.5 rounded border border-border/60 truncate max-w-[140px]"
                  >
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <div className="flex-1 overflow-y-auto px-3 py-3">
          {grouped.length === 0 && (
            <p className="text-sm text-text-muted text-center py-10">
              {search
                ? "No courses match your search"
                : hasActiveFilters
                  ? "No courses match these filters"
                  : "No available courses for this grade"}
            </p>
          )}

          {grouped.map(({ dept, courses }) => {
            const meta = DEPARTMENT_META[dept];
            return (
              <div key={dept} className="mb-4 last:mb-0">
                <div className="flex items-center gap-2 px-3 mb-1">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: meta.color }}
                  />
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">
                    {meta.label}
                  </span>
                  <span className="text-[11px] text-text-muted/60">{courses.length}</span>
                </div>
                {courses.map((course) => {
                  const textPrereqs = getTextPrerequisites(course, allCourseIds);
                  const note = course.prerequisiteNote || (textPrereqs.length > 0 ? textPrereqs.join("; ") : undefined);
                  return (
                    <CoursePickerItem
                      key={course.id}
                      course={course}
                      onAdd={() => onAdd(activeGrade, course.id)}
                      prerequisiteNote={note}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-border/60 flex items-center justify-between">
          <span className="text-xs text-text-muted">
            {filtered.length} available for {GRADE_LABELS[activeGrade]} grade
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-sm font-medium rounded-lg bg-mountie-blue text-white hover:bg-mountie-dark transition-colors btn-hover"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Department, CourseLevel, DEPARTMENT_META } from "@/data/types";

interface FilterBarProps {
  departments: Department[];
  grades: number[];
  levels: CourseLevel[];
  onDepartmentToggle: (dept: Department) => void;
  onGradeToggle: (grade: number) => void;
  onLevelToggle: (level: CourseLevel) => void;
  onClear: () => void;
  resultCount: number;
}

const ALL_DEPARTMENTS = Object.entries(DEPARTMENT_META) as [Department, { label: string }][];
const ALL_GRADES = [9, 10, 11, 12];
const ALL_LEVELS: { value: CourseLevel; label: string }[] = [
  { value: "academic", label: "Academic" },
  { value: "honors", label: "Honors" },
  { value: "ap", label: "AP" },
  { value: "high-honors", label: "High Honors" },
  { value: "resource", label: "Resource" },
];

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-medium text-text-muted mb-1.5">{title}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`chip-interactive px-2.5 py-1 text-xs rounded-full border ${
        active
          ? "bg-mountie-blue text-white border-mountie-blue"
          : "bg-white text-text-muted border-border hover:border-mountie-blue/40"
      }`}
    >
      {label}
    </button>
  );
}

export function FilterBar({
  departments,
  grades,
  levels,
  onDepartmentToggle,
  onGradeToggle,
  onLevelToggle,
  onClear,
  resultCount,
}: FilterBarProps) {
  const hasFilters = departments.length > 0 || grades.length > 0 || levels.length > 0;

  return (
    <div className="space-y-3 p-4 bg-white border border-border rounded-lg">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-text">
          {resultCount} course{resultCount !== 1 ? "s" : ""}
        </p>
        {hasFilters && (
          <button
            onClick={onClear}
            className="text-xs text-mountie-blue hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      <FilterGroup title="Department">
        {ALL_DEPARTMENTS.map(([dept, meta]) => (
          <Chip
            key={dept}
            label={meta.label}
            active={departments.includes(dept)}
            onClick={() => onDepartmentToggle(dept)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Grade">
        {ALL_GRADES.map((g) => (
          <Chip
            key={g}
            label={`${g}`}
            active={grades.includes(g)}
            onClick={() => onGradeToggle(g)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Level">
        {ALL_LEVELS.map((l) => (
          <Chip
            key={l.value}
            label={l.label}
            active={levels.includes(l.value)}
            onClick={() => onLevelToggle(l.value)}
          />
        ))}
      </FilterGroup>
    </div>
  );
}

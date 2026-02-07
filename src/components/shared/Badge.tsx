import { CourseLevel } from "@/data/types";

const LEVEL_STYLES: Record<CourseLevel, string> = {
  academic: "bg-slate-100 text-slate-700 border-slate-300",
  honors: "bg-blue-50 text-mountie-blue border-mountie-blue/30",
  ap: "bg-mountie-blue text-white border-mountie-blue",
  "high-honors": "bg-mountie-dark text-white border-mountie-dark",
  resource: "bg-emerald-50 text-emerald-700 border-emerald-300",
};

const LEVEL_LABELS: Record<CourseLevel, string> = {
  academic: "Academic",
  honors: "Honors",
  ap: "AP",
  "high-honors": "High Honors",
  resource: "Resource",
};

export function LevelBadge({ level }: { level: CourseLevel }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded border ${LEVEL_STYLES[level]}`}
    >
      {LEVEL_LABELS[level]}
    </span>
  );
}

export function GradeBadge({ grades }: { grades: number[] }) {
  const label =
    grades.length === 1
      ? `Grade ${grades[0]}`
      : grades.length === 4
        ? "Grades 9–12"
        : `Grades ${grades[0]}–${grades[grades.length - 1]}`;
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-xs text-text-muted bg-warm-gray rounded">
      {label}
    </span>
  );
}

export function CreditsBadge({ credits, duration }: { credits: number; duration: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-xs text-text-muted bg-warm-gray rounded">
      {credits} cr &middot; {duration === "full-year" ? "Full Year" : duration === "quarter" ? "Quarter" : "Semester"}
    </span>
  );
}

export function DepartmentBadge({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded"
      style={{ backgroundColor: `${color}15`, color, border: `1px solid ${color}30` }}
    >
      {label}
    </span>
  );
}

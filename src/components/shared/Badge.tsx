import { CourseLevel } from "@/data/types";

const LEVEL_STYLES: Record<CourseLevel, string> = {
  academic: "bg-slate-100 text-slate-700 border-slate-200",
  honors: "bg-blue-50 text-mountie-blue border-mountie-blue/25",
  ap: "bg-mountie-blue text-white border-mountie-blue",
  "high-honors": "bg-mountie-dark text-white border-mountie-dark",
  resource: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const LEVEL_LABELS: Record<CourseLevel, string> = {
  academic: "Academic",
  honors: "Honors",
  ap: "AP",
  "high-honors": "High Honors",
  resource: "Resource",
};

export function LevelBadge({ level, deptColor }: { level: CourseLevel; deptColor?: string }) {
  if (deptColor) {
    const themed = getDeptThemedStyle(level, deptColor);
    return (
      <span
        className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded border transition-colors"
        style={themed}
      >
        {LEVEL_LABELS[level]}
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded border transition-colors ${LEVEL_STYLES[level]}`}
    >
      {LEVEL_LABELS[level]}
    </span>
  );
}

function getDeptThemedStyle(level: CourseLevel, color: string): React.CSSProperties {
  switch (level) {
    case "ap":
      return { backgroundColor: color, color: "white", borderColor: color };
    case "high-honors":
      return { backgroundColor: color, color: "white", borderColor: color, opacity: 0.85 };
    case "honors":
      return { backgroundColor: "transparent", color, borderColor: color };
    case "resource":
      return { backgroundColor: `${color}15`, color, borderColor: `${color}30` };
    case "academic":
    default:
      return { backgroundColor: "#f1f5f9", color: "#475569", borderColor: "#e2e8f0" };
  }
}

export function GradeBadge({ grades }: { grades: number[] }) {
  const label =
    grades.length === 1
      ? `Grade ${grades[0]}`
      : grades.length === 4
        ? "Grades 9–12"
        : `Grades ${grades[0]}–${grades[grades.length - 1]}`;
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-xs text-text-muted bg-warm-gray rounded transition-colors">
      {label}
    </span>
  );
}

export function CreditsBadge({ credits, duration }: { credits: number; duration: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-xs text-text-muted bg-warm-gray rounded transition-colors">
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
      className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded transition-colors"
      style={{ backgroundColor: `${color}15`, color, border: `1px solid ${color}30` }}
    >
      {label}
    </span>
  );
}

import Link from "next/link";
import { Course, DEPARTMENT_META } from "@/data/types";
import { LevelBadge, GradeBadge, CreditsBadge } from "@/components/shared/Badge";

export function CourseCard({ course }: { course: Course }) {
  const deptMeta = DEPARTMENT_META[course.department];

  return (
    <Link
      href={`/courses/${course.id}`}
      className="group block bg-white rounded-xl border border-border card-hover overflow-hidden"
    >
      {/* Color accent bar */}
      <div className="h-0.5" style={{ backgroundColor: deptMeta.color }} />

      <div className="p-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="min-w-0">
            <p className="text-[11px] text-text-muted/60 font-mono tracking-wide">{course.code}</p>
            <h3 className="text-sm font-semibold text-text group-hover:text-mountie-blue transition-colors leading-snug mt-0.5">
              {course.name}
            </h3>
          </div>
          <LevelBadge level={course.level} />
        </div>

        <p className="text-xs text-text-muted line-clamp-2 mb-3 leading-relaxed">
          {course.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          <GradeBadge grades={course.grades} />
          <CreditsBadge credits={course.credits} duration={course.duration} />
          {course.contractHonors && (
            <span className="inline-flex items-center px-2 py-0.5 text-[11px] text-amber-700 bg-amber-50 rounded">
              Contract H
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

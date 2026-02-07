import Link from "next/link";
import { Course, DEPARTMENT_META } from "@/data/types";
import { LevelBadge, GradeBadge, CreditsBadge } from "@/components/shared/Badge";

export function CourseCard({ course }: { course: Course }) {
  const deptMeta = DEPARTMENT_META[course.department];

  return (
    <Link
      href={`/courses/${course.id}`}
      className="block p-4 bg-white border border-border rounded-lg hover:border-mountie-blue/30 hover:shadow-sm transition group"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0">
          <p className="text-xs text-text-muted font-mono">{course.code}</p>
          <h3 className="text-sm font-semibold text-text group-hover:text-mountie-blue transition-colors leading-tight mt-0.5">
            {course.name}
          </h3>
        </div>
        <LevelBadge level={course.level} />
      </div>

      <p className="text-xs text-text-muted line-clamp-2 mb-3">
        {course.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        <span
          className="inline-flex items-center px-2 py-0.5 text-xs rounded"
          style={{
            backgroundColor: `${deptMeta.color}10`,
            color: deptMeta.color,
          }}
        >
          {deptMeta.label}
        </span>
        <GradeBadge grades={course.grades} />
        <CreditsBadge credits={course.credits} duration={course.duration} />
        {course.contractHonors && (
          <span className="inline-flex items-center px-2 py-0.5 text-xs text-amber-700 bg-amber-50 rounded">
            Honors by contract
          </span>
        )}
      </div>
    </Link>
  );
}

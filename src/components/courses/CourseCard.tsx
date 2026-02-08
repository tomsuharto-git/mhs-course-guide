import Link from "next/link";
import { Course, DEPARTMENT_META } from "@/data/types";
import { LevelBadge, GradeBadge, CreditsBadge } from "@/components/shared/Badge";

export function CourseCard({ course }: { course: Course }) {
  const deptMeta = DEPARTMENT_META[course.department];

  return (
    <Link
      href={`/courses/${course.id}`}
      className="group block bg-white rounded-xl border border-border card-hover overflow-hidden"
      style={{ '--dept-color': deptMeta.color } as React.CSSProperties}
    >
      {/* Color accent bar — grows on hover */}
      <div
        className="h-0.5 transition-all duration-200 group-hover:h-1"
        style={{
          backgroundColor: deptMeta.color,
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      <div className="p-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="min-w-0">
            <p className="text-[11px] text-text-muted/60 font-mono tracking-wide">{course.code}</p>
            <h3 className="text-sm font-semibold text-text group-hover:text-mountie-blue transition-colors leading-snug mt-0.5">
              {course.name}
            </h3>
          </div>
          <LevelBadge level={course.level} deptColor={deptMeta.color} />
        </div>

        <p className="text-xs text-text-muted line-clamp-2 group-hover:line-clamp-none mb-3 leading-relaxed transition-all">
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

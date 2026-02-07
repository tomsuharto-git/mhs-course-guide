import { notFound } from "next/navigation";
import Link from "next/link";
import { allCourses, getCourseById } from "@/data/courses";
import { DEPARTMENT_META } from "@/data/types";
import { LevelBadge, GradeBadge, CreditsBadge } from "@/components/shared/Badge";

export function generateStaticParams() {
  return allCourses.map((c) => ({ id: c.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const course = getCourseById(id);
    return {
      title: course
        ? `${course.name} | MHS Course Guide`
        : "Course Not Found",
    };
  });
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) return notFound();

  const deptMeta = DEPARTMENT_META[course.department];

  // Find courses that list this course as a prerequisite
  const leadsTo = allCourses.filter((c) =>
    c.prerequisites.includes(course.id)
  );

  // Resolve prerequisite course objects (only those that are course IDs, not text)
  const prereqCourses = course.prerequisites
    .map((pid) => getCourseById(pid))
    .filter(Boolean);

  const textPrereqs = course.prerequisites.filter((p) => !getCourseById(p));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Link
        href="/courses"
        className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-mountie-blue mb-6"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m15 18-6-6 6-6" />
        </svg>
        All Courses
      </Link>

      <div className="space-y-6">
        {/* Header */}
        <div>
          <p className="text-sm font-mono text-text-muted">{course.code}</p>
          <h1 className="text-2xl font-[family-name:var(--font-heading)] text-text mt-1">
            {course.name}
          </h1>
          <div className="flex flex-wrap gap-2 mt-3">
            <LevelBadge level={course.level} />
            <GradeBadge grades={course.grades} />
            <CreditsBadge credits={course.credits} duration={course.duration} />
            <span
              className="inline-flex items-center px-2 py-0.5 text-xs rounded"
              style={{ backgroundColor: `${deptMeta.color}10`, color: deptMeta.color }}
            >
              {deptMeta.label}
            </span>
            {course.contractHonors && (
              <span className="inline-flex items-center px-2 py-0.5 text-xs text-amber-700 bg-amber-50 rounded border border-amber-200">
                Honors by contract
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white border border-border rounded-lg p-5">
          <p className="text-sm text-text leading-relaxed">{course.description}</p>
        </div>

        {/* Notes */}
        {course.notes && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800">{course.notes}</p>
          </div>
        )}

        {/* Prerequisites */}
        {(prereqCourses.length > 0 || textPrereqs.length > 0) && (
          <div>
            <h2 className="text-sm font-semibold text-text mb-2">Prerequisites</h2>
            <div className="space-y-1.5">
              {prereqCourses.map((pc) => (
                <Link
                  key={pc!.id}
                  href={`/courses/${pc!.id}`}
                  className="block p-3 bg-white border border-border rounded-lg hover:border-mountie-blue/30 transition text-sm"
                >
                  <span className="font-mono text-text-muted text-xs mr-2">
                    {pc!.code}
                  </span>
                  <span className="font-medium">{pc!.name}</span>
                </Link>
              ))}
              {textPrereqs.map((t) => (
                <p key={t} className="text-sm text-text-muted p-3 bg-warm-gray rounded-lg">
                  {t}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Leads to */}
        {leadsTo.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-text mb-2">
              This course leads to
            </h2>
            <div className="space-y-1.5">
              {leadsTo.map((c) => (
                <Link
                  key={c.id}
                  href={`/courses/${c.id}`}
                  className="block p-3 bg-white border border-border rounded-lg hover:border-mountie-blue/30 transition text-sm"
                >
                  <span className="font-mono text-text-muted text-xs mr-2">
                    {c.code}
                  </span>
                  <span className="font-medium">{c.name}</span>
                  <LevelBadge level={c.level} />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Fulfills */}
        {course.fulfills.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-text mb-2">
              Fulfills graduation requirements
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {course.fulfills.map((f) => (
                <span
                  key={f}
                  className="px-2.5 py-1 text-xs bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

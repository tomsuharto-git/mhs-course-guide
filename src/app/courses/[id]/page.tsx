import { notFound } from "next/navigation";
import Link from "next/link";
import { allCourses, getCourseById } from "@/data/courses";
import { DEPARTMENT_META } from "@/data/types";
import { LevelBadge, GradeBadge, CreditsBadge } from "@/components/shared/Badge";
import { DepartmentIcon } from "@/components/shared/DepartmentIcon";
import { getPathwayNext, getTrackForCourse } from "@/lib/track-utils";

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

  // Pathway-aware "next courses" from track data
  const pathwayNext = getPathwayNext(course.id);
  const track = getTrackForCourse(course.id);

  // Fallback: courses that list this course as a prerequisite (for non-pathway tracks)
  const leadsTo = !pathwayNext
    ? allCourses.filter((c) => c.prerequisites.includes(course.id))
    : [];

  // Resolve prerequisite course objects (only those that are course IDs, not text)
  const prereqCourses = course.prerequisites
    .map((pid) => getCourseById(pid))
    .filter(Boolean);

  const textPrereqs = course.prerequisites.filter((p) => !getCourseById(p));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <Link
        href={track ? `/tracks/${track.id}` : `/courses?dept=${course.department}`}
        className="link-back inline-flex items-center gap-1 text-sm text-text-muted hover:text-mountie-blue mb-6 transition-colors"
      >
        <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m15 18-6-6 6-6" />
        </svg>
        {deptMeta.label}
      </Link>

      {/* Header card with department color accent */}
      <div className="bg-white border border-border rounded-xl overflow-hidden mb-8">
        <div className="h-1" style={{ backgroundColor: deptMeta.color }} />
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3 mb-3">
            <DepartmentIcon department={course.department} size="sm" />
            <div className="min-w-0">
              <p className="text-xs font-mono text-text-muted/60">{course.code}</p>
              <h1 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] text-text mt-0.5 leading-tight tracking-wide">
                {course.name}
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <LevelBadge level={course.level} deptColor={deptMeta.color} />
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
      </div>

      <div className="space-y-8">
        {/* Description */}
        <div>
          <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
            Description
          </h2>
          <p className="text-[15px] text-text leading-relaxed">{course.description}</p>
        </div>

        {/* Notes */}
        {course.notes && (
          <div className="bg-amber-50/50 border border-amber-200/60 rounded-lg p-4">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">Note</p>
            <p className="text-sm text-amber-800">{course.notes}</p>
          </div>
        )}

        {/* Prerequisites */}
        {(prereqCourses.length > 0 || textPrereqs.length > 0) && (
          <div>
            <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
              Prerequisites
            </h2>
            <div className="space-y-1.5">
              {prereqCourses.map((pc) => (
                <Link
                  key={pc!.id}
                  href={`/courses/${pc!.id}`}
                  className="group flex items-center gap-3 p-3 bg-white border border-border rounded-lg card-hover text-sm hover:border-mountie-blue/30"
                >
                  <svg className="w-4 h-4 text-text-muted/40 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  <div className="min-w-0">
                    <span className="font-medium text-text group-hover:text-mountie-blue transition-colors">{pc!.name}</span>
                    <span className="text-text-muted/60 text-xs ml-2 font-mono">{pc!.code}</span>
                  </div>
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

        {/* Next in Pathway — pathway-table tracks (Science, Math) */}
        {pathwayNext && (
          <div>
            <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
              Next in pathway
            </h2>
            <div className="space-y-3">
              {pathwayNext.groups.map((group) => {
                const courses = group.courseIds
                  .map((cid) => getCourseById(cid))
                  .filter(Boolean);
                if (courses.length === 0) return null;
                return (
                  <div key={group.pathwayLabel}>
                    {pathwayNext.groups.length > 1 && (
                      <p className="text-[11px] font-medium text-text-muted mb-1.5 whitespace-pre-line">
                        {group.pathwayLabel}
                      </p>
                    )}
                    <div className="space-y-1.5">
                      {courses.map((c) => (
                        <Link
                          key={c!.id}
                          href={`/courses/${c!.id}`}
                          className="group flex items-center justify-between gap-3 p-3 bg-white border border-border rounded-lg card-hover text-sm hover:border-mountie-blue/30"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <svg className="w-4 h-4 text-text-muted/40 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                            <div className="min-w-0">
                              <span className="font-medium text-text group-hover:text-mountie-blue transition-colors">{c!.name}</span>
                              <span className="text-text-muted/60 text-xs ml-2 font-mono">{c!.code}</span>
                            </div>
                          </div>
                          <LevelBadge level={c!.level} deptColor={deptMeta.color} />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            {track && (
              <Link
                href={`/tracks/${track.id}`}
                className="inline-flex items-center gap-1.5 mt-3 text-xs text-mountie-blue hover:underline"
              >
                View full {track.name} pathway
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            )}
          </div>
        )}

        {/* Fallback: Leads to (non-pathway tracks) */}
        {!pathwayNext && leadsTo.length > 0 && (
          <div>
            <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
              This course leads to
            </h2>
            <div className="space-y-1.5">
              {leadsTo.map((c) => (
                <Link
                  key={c.id}
                  href={`/courses/${c.id}`}
                  className="group flex items-center justify-between gap-3 p-3 bg-white border border-border rounded-lg card-hover text-sm hover:border-mountie-blue/30"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <svg className="w-4 h-4 text-text-muted/40 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    <div className="min-w-0">
                      <span className="font-medium text-text group-hover:text-mountie-blue transition-colors">{c.name}</span>
                      <span className="text-text-muted/60 text-xs ml-2 font-mono">{c.code}</span>
                    </div>
                  </div>
                  <LevelBadge level={c.level} deptColor={deptMeta.color} />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Fulfills */}
        {course.fulfills.length > 0 && (
          <div>
            <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
              Fulfills graduation requirements
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {course.fulfills.map((f) => (
                <Link
                  key={f}
                  href="/requirements"
                  className="px-2.5 py-1 text-xs bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  {f}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

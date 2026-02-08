import Link from "next/link";
import { DEPARTMENT_META, Department } from "@/data/types";
import { DepartmentIcon } from "@/components/shared/DepartmentIcon";
import { allCourses } from "@/data/courses";
import { allTracks } from "@/data/tracks";

/** Departments that have a dedicated track page */
const DEPTS_WITH_TRACKS = new Set(allTracks.map((t) => t.department));

function deptHref(dept: Department): string {
  return DEPTS_WITH_TRACKS.has(dept) ? `/tracks/${dept}` : `/courses?dept=${dept}`;
}

const CORE_DEPTS: Department[] = [
  "english", "math", "science", "social-studies",
];

const OTHER_DEPTS: Department[] = [
  "world-languages", "visual-performing-arts", "career-technical",
  "health-pe", "special-education",
];

const STATS = [
  { value: () => String(allCourses.length), label: "Courses" },
  { value: () => String(allCourses.filter((c) => c.level === "ap").length), label: "AP" },
  { value: () => "9", label: "Depts" },
  { value: () => "122", label: "Credits" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-mountie-blue text-white overflow-hidden">
        {/* Diagonal accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-mountie-blue via-mountie-blue to-mountie-dark" />
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-white/5 hero-circle" />
        <div className="absolute -left-16 -bottom-24 w-64 h-64 rounded-full bg-white/3 hero-circle-delayed" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-[family-name:var(--font-heading)] leading-[0.9] tracking-wide">
              Course
              <br />
              Guide
              <br />
              <span className="text-white/40">2026–27</span>
            </h1>
            <p className="text-white/70 mt-6 max-w-md text-[15px] sm:text-base leading-relaxed">
              Every course at Montclair High School — searchable, filterable,
              and mapped into visual pathways. Built by parents, for parents.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/courses"
                className="btn-hover px-6 py-3 bg-white text-mountie-blue font-semibold rounded-lg text-sm"
              >
                Browse All Courses
              </Link>
              <Link
                href="/tracks"
                className="btn-hover px-6 py-3 border border-white/20 text-white font-semibold rounded-lg text-sm hover:bg-white/10"
              >
                View Track Flowcharts
              </Link>
            </div>
          </div>

          {/* Inline stats */}
          <div className="flex gap-8 sm:gap-12 mt-14 sm:mt-20 border-t border-white/10 pt-6">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8 sm:gap-12">
                {i > 0 && <div className="w-px h-8 bg-white/10 -ml-4 sm:-ml-6 mr-0" />}
                <div>
                  <p className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] text-white tracking-wider">
                    {s.value()}
                  </p>
                  <p className="text-[11px] text-white/50 uppercase tracking-widest mt-0.5">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core departments — featured large */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-6">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-[family-name:var(--font-heading)] text-text">
            Core Departments
          </h2>
          <Link href="/courses" className="link-arrow text-xs text-mountie-blue font-medium hover:underline underline-offset-4 inline-flex items-center gap-1">
            View all courses <span className="arrow">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {CORE_DEPTS.map((dept) => {
            const meta = DEPARTMENT_META[dept];
            const count = allCourses.filter((c) => c.department === dept).length;
            return (
              <Link
                key={dept}
                href={deptHref(dept)}
                className="group relative p-5 sm:p-6 bg-white rounded-xl border border-border card-hover overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-xl transition-all duration-200 group-hover:w-1.5"
                  style={{
                    backgroundColor: meta.color,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
                <DepartmentIcon department={dept} />
                <h3 className="text-base sm:text-lg font-semibold text-text mt-4 group-hover:text-mountie-blue transition-colors">
                  {meta.label}
                </h3>
                <p className="text-xs text-text-muted mt-1">{count} courses</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Other departments — compact row */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex flex-wrap gap-2 mt-2">
          {OTHER_DEPTS.map((dept) => {
            const meta = DEPARTMENT_META[dept];
            const count = allCourses.filter((c) => c.department === dept).length;
            return (
              <Link
                key={dept}
                href={deptHref(dept)}
                className="group flex items-center gap-3 px-4 py-2.5 bg-white rounded-lg border border-border card-hover"
              >
                <DepartmentIcon department={dept} size="sm" />
                <div>
                  <p className="text-sm font-medium text-text group-hover:text-mountie-blue transition-colors">
                    {meta.label}
                  </p>
                  <p className="text-[11px] text-text-muted">{count} courses</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-gradient-to-b from-warm-gray/30 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-lg sm:text-xl font-[family-name:var(--font-heading)] text-text">
              Planning a schedule?
            </h2>
            <p className="text-[15px] text-text-muted mt-1 max-w-md leading-relaxed">
              Track flowcharts show how courses connect from 9th grade through
              senior year. See prerequisites and pathways at a glance.
            </p>
          </div>
          <Link
            href="/tracks"
            className="link-arrow btn-hover px-6 py-3 bg-mountie-blue text-white font-semibold rounded-lg text-sm hover:bg-mountie-dark shrink-0 inline-flex items-center gap-1.5"
          >
            Explore Tracks <span className="arrow">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

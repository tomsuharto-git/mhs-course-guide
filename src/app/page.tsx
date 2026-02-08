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

const ALL_DEPTS: Department[] = [
  "english", "math", "science", "social-studies",
  "world-languages", "visual-performing-arts", "career-technical",
  "health-pe", "special-education",
];

const STATS = [
  { value: () => String(allCourses.length), label: "Courses" },
  { value: () => String(allCourses.filter((c) => c.level === "ap").length), label: "APs" },
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

            {/* Inline stats */}
            <div className="max-w-md mt-8 sm:mt-10 border-t border-white/10 pt-5">
              <div className="grid grid-cols-4 gap-2">
                {STATS.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-3">
                    {i > 0 && <div className="w-px h-8 bg-white/10" />}
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

            <p className="text-white/70 mt-8 max-w-md text-[15px] sm:text-base leading-relaxed">
              Every course at Montclair High School — searchable, filterable,
              and mapped into visual pathways.
            </p>
            <p className="text-white/50 mt-2 text-[13px] sm:text-sm">
              Built by parents, for parents.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/tracks"
                className="btn-hover px-6 py-3 bg-white text-mountie-blue font-semibold rounded-lg text-sm"
              >
                Department Tracks
              </Link>
              <Link
                href="/courses"
                className="btn-hover px-6 py-3 border border-white/20 text-white font-semibold rounded-lg text-sm hover:bg-white/10"
              >
                Browse All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-[family-name:var(--font-heading)] text-text">
            Departments
          </h2>
          <Link href="/courses" className="link-arrow text-xs text-mountie-blue font-medium hover:underline underline-offset-4 inline-flex items-center gap-1">
            View all courses <span className="arrow">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ALL_DEPTS.map((dept) => {
            const meta = DEPARTMENT_META[dept];
            return (
              <Link
                key={dept}
                href={deptHref(dept)}
                className="group relative flex items-center gap-3 px-4 py-4 rounded-xl text-white overflow-hidden btn-hover"
                style={{ backgroundColor: meta.color }}
              >
                {/* Hover brighten */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200 rounded-xl" />
                <div className="relative z-10 flex items-center gap-3">
                  <DepartmentIcon department={dept} size="md" variant="glass" />
                  <span className="text-xl font-[family-name:var(--font-heading)] tracking-wide leading-tight">
                    {meta.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

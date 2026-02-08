import { specialPrograms } from "@/data/programs";
import { ProgramTabs } from "@/components/programs/ProgramTabs";

export const metadata = {
  title: "Programs | MHS Course Guide",
};

const SECTIONS = [
  {
    id: "slc",
    title: "Small Learning Communities",
    description:
      "Interdisciplinary, multi-year, team-taught programs. Students enrolled in CGI or CSJ who wish to leave must consult their School Counselor to schedule an exit meeting with the SLC Lead Teacher.",
    color: "#254093",
    filter: (p: (typeof specialPrograms)[number]) => p.type === "slc",
  },
  {
    id: "dual",
    title: "Dual Enrollment",
    description:
      "Earn college credits while enrolled at MHS through partnerships with Montclair State University, Essex County College, and Kean University.",
    color: "#7c3aed",
    filter: (p: (typeof specialPrograms)[number]) =>
      p.type === "dual-enrollment",
  },
  {
    id: "vocational",
    title: "Vocational & Shared-Time",
    description:
      "Career & Technical Education programs at Essex County Vocational Technical School.",
    color: "#ea580c",
    filter: (p: (typeof specialPrograms)[number]) => p.type === "vocational",
  },
  {
    id: "experiential",
    title: "Internships & Research",
    description: "Real-world experience and hands-on research opportunities.",
    color: "#1e6b3a",
    filter: (p: (typeof specialPrograms)[number]) =>
      p.type === "internship" || p.type === "research",
  },
] as const;

export default function ProgramsPage() {
  const sectionData = SECTIONS.map((s) => ({
    ...s,
    programs: specialPrograms.filter(s.filter),
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Special Programs
        </h1>
        <p className="text-[15px] text-text-muted mt-2 max-w-lg">
          MHS offers small learning communities, dual enrollment, internships,
          and research programs beyond the standard course catalog.
        </p>

        {/* Jump nav */}
        <nav className="flex flex-wrap gap-2 mt-4">
          {sectionData.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="chip-interactive inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors"
              style={{
                color: s.color,
                backgroundColor: `${s.color}10`,
                border: `1px solid ${s.color}30`,
              }}
            >
              {s.title}
              <span
                className="text-xs rounded-full px-1.5 py-0.5 font-mono"
                style={{
                  backgroundColor: `${s.color}15`,
                  color: s.color,
                }}
              >
                {s.programs.length}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {sectionData.map((s, i) => (
        <div key={s.id}>
          {i > 0 && <hr className="section-divider" />}
          <h2
            id={s.id}
            className="text-xl font-[family-name:var(--font-heading)] text-text uppercase tracking-wide mb-1 mt-14 scroll-mt-20"
          >
            {s.title}
          </h2>
          <p className="text-sm text-text-muted mb-4">{s.description}</p>
          <div className="mb-14">
            <ProgramTabs programs={s.programs} accentColor={s.color} />
          </div>
        </div>
      ))}
    </div>
  );
}

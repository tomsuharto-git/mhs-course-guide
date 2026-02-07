import { specialPrograms } from "@/data/programs";
import type { SpecialProgram } from "@/data/programs";

export const metadata = {
  title: "Programs | MHS Course Guide",
};

const TYPE_LABELS: Record<SpecialProgram["type"], { label: string; color: string }> = {
  slc: { label: "Small Learning Community", color: "#254093" },
  "dual-enrollment": { label: "Dual Enrollment", color: "#7c3aed" },
  internship: { label: "Internship", color: "#059669" },
  research: { label: "Research", color: "#8b5e3c" },
};

function ProgramCard({ program }: { program: SpecialProgram }) {
  const { label, color } = TYPE_LABELS[program.type];
  const gradeLabel =
    program.grades.length === 1
      ? `Grade ${program.grades[0]}`
      : program.grades.length === 4
        ? "Grades 9\u201312"
        : `Grades ${program.grades[0]}\u2013${program.grades[program.grades.length - 1]}`;

  return (
    <div className="bg-white border border-border rounded-xl p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded"
          style={{ backgroundColor: `${color}15`, color, border: `1px solid ${color}30` }}
        >
          {label}
        </span>
        <span className="inline-flex items-center px-2 py-0.5 text-xs text-text-muted bg-warm-gray rounded">
          {gradeLabel}
        </span>
        {program.credits && (
          <span className="inline-flex items-center px-2 py-0.5 text-xs text-text-muted bg-warm-gray rounded">
            {program.credits} cr/yr
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-text mb-1">
        {program.shortName !== program.name && (
          <span className="text-mountie-blue">{program.shortName} </span>
        )}
        <span className="font-medium text-base">{program.shortName !== program.name ? `\u2014 ${program.name}` : program.name}</span>
      </h3>

      {program.prerequisite && (
        <p className="text-xs text-text-muted mb-3">
          <span className="font-medium">Prerequisite:</span> {program.prerequisite}
        </p>
      )}

      <p className="text-sm text-text leading-relaxed mb-4">{program.description}</p>

      {program.highlights && program.highlights.length > 0 && (
        <ul className="text-sm text-text-muted space-y-1 mb-4">
          {program.highlights.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-mountie-blue shrink-0 mt-1">&#8226;</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {program.creditsNote && (
        <p className="text-xs text-text-muted italic">{program.creditsNote}</p>
      )}

      {program.fulfills && program.fulfills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border">
          <span className="text-xs text-text-muted">Fulfills:</span>
          {program.fulfills.map((f) => (
            <span key={f} className="inline-flex items-center px-2 py-0.5 text-xs bg-mountie-blue/5 text-mountie-blue rounded">
              {f}
            </span>
          ))}
        </div>
      )}

      {program.contact && (
        <p className="text-xs text-text-muted mt-3 pt-3 border-t border-border">
          <span className="font-medium">Contact:</span> {program.contact}
        </p>
      )}
    </div>
  );
}

export default function ProgramsPage() {
  const slcs = specialPrograms.filter((p) => p.type === "slc");
  const dualEnrollment = specialPrograms.filter((p) => p.type === "dual-enrollment");
  const experiential = specialPrograms.filter((p) => p.type === "internship" || p.type === "research");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Special Programs
        </h1>
        <p className="text-sm text-text-muted mt-2 max-w-lg">
          MHS offers small learning communities, dual enrollment, internships, and research
          programs beyond the standard course catalog.
        </p>
      </div>

      {/* SLCs */}
      <h2 className="text-xl font-[family-name:var(--font-heading)] text-text uppercase tracking-wide mb-1">
        Small Learning Communities
      </h2>
      <p className="text-sm text-text-muted mb-4">
        Interdisciplinary, multi-year, team-taught programs. Students enrolled in CGI or CSJ who wish
        to leave must consult their School Counselor to schedule an exit meeting with the SLC Lead Teacher.
      </p>
      <div className="space-y-4 mb-10">
        {slcs.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>

      {/* Dual Enrollment */}
      <h2 className="text-xl font-[family-name:var(--font-heading)] text-text uppercase tracking-wide mb-1">
        Dual Enrollment
      </h2>
      <p className="text-sm text-text-muted mb-4">
        Earn college credits while enrolled at MHS through partnerships with Montclair State University,
        Essex County College, and Kean University.
      </p>
      <div className="space-y-4 mb-10">
        {dualEnrollment.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>

      {/* Internships & Research */}
      <h2 className="text-xl font-[family-name:var(--font-heading)] text-text uppercase tracking-wide mb-1">
        Internships &amp; Research
      </h2>
      <p className="text-sm text-text-muted mb-4">
        Real-world experience and hands-on research opportunities.
      </p>
      <div className="space-y-4 mb-6">
        {experiential.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>
    </div>
  );
}

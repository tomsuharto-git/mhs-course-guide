import {
  graduationRequirements,
  totalCreditsRequired,
  gpaTable,
  promotionRequirements,
} from "@/data/graduation-requirements";

export const metadata = {
  title: "Graduation Requirements | MHS Course Guide",
};

export default function RequirementsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-[family-name:var(--font-heading)] text-text mb-2">
        Graduation Requirements
      </h1>
      <p className="text-sm text-text-muted mb-8">
        New Jersey requires 120 credits; MHS requires{" "}
        <strong>{totalCreditsRequired} credits</strong> per Board Policy 5460.
      </p>

      {/* Requirements table */}
      <div className="bg-white border border-border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-warm-gray">
              <th className="text-left px-4 py-3 font-medium text-text">
                Subject Area
              </th>
              <th className="text-center px-4 py-3 font-medium text-text w-24">
                Credits
              </th>
              <th className="text-left px-4 py-3 font-medium text-text hidden sm:table-cell">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {graduationRequirements.map((req) => (
              <tr key={req.area} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-medium">{req.area}</td>
                <td className="text-center px-4 py-3 font-mono text-mountie-blue">
                  {req.credits}
                </td>
                <td className="px-4 py-3 text-text-muted hidden sm:table-cell">
                  {req.notes}
                </td>
              </tr>
            ))}
            <tr className="bg-mountie-blue/5 font-semibold">
              <td className="px-4 py-3">Total Required</td>
              <td className="text-center px-4 py-3 font-mono text-mountie-blue">
                {totalCreditsRequired}
              </td>
              <td className="px-4 py-3 hidden sm:table-cell" />
            </tr>
          </tbody>
        </table>
      </div>

      {/* Promotion credits */}
      <h2 className="text-lg font-[family-name:var(--font-heading)] text-text mb-3">
        Credit Requirements for Promotion
      </h2>
      <div className="bg-white border border-border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-warm-gray">
              <th className="text-left px-4 py-3 font-medium">
                Grade Level
              </th>
              <th className="text-center px-4 py-3 font-medium w-32">
                Credits Needed
              </th>
            </tr>
          </thead>
          <tbody>
            {promotionRequirements.map((req) => (
              <tr key={req.grade} className="border-b border-border last:border-0">
                <td className="px-4 py-3">{req.grade}</td>
                <td className="text-center px-4 py-3 font-mono text-mountie-blue">
                  {req.credits}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* GPA table */}
      <h2 className="text-lg font-[family-name:var(--font-heading)] text-text mb-3">
        Quality Point Index (GPA)
      </h2>
      <p className="text-sm text-text-muted mb-3">
        GPA is computed at the end of 11th grade and again at the end of 12th
        grade. Higher course levels earn more quality points.
      </p>
      <div className="bg-white border border-border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-warm-gray">
              <th className="text-center px-4 py-3 font-medium w-20">
                Grade
              </th>
              <th className="text-center px-4 py-3 font-medium">
                AP / High Honors
              </th>
              <th className="text-center px-4 py-3 font-medium">Honors</th>
              <th className="text-center px-4 py-3 font-medium">Academic</th>
            </tr>
          </thead>
          <tbody>
            {gpaTable.rows.map((row) => (
              <tr
                key={row.grade}
                className="border-b border-border last:border-0"
              >
                <td className="text-center px-4 py-3 font-semibold">
                  {row.grade}
                </td>
                <td className="text-center px-4 py-3 font-mono">
                  {row.hh}
                </td>
                <td className="text-center px-4 py-3 font-mono">{row.h}</td>
                <td className="text-center px-4 py-3 font-mono">{row.a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Contracting for Honors */}
      <h2 className="text-lg font-[family-name:var(--font-heading)] text-text mb-3">
        Contracting for Honors
      </h2>
      <div className="bg-white border border-border rounded-lg p-5 text-sm text-text leading-relaxed">
        <p>
          In certain courses not offered at the honors level, students may
          contract for a higher level within the first two weeks of the course.
          The contract must be signed by the student, parent, and teacher. Once
          submitted, no changes are allowed. The course will appear as
          &ldquo;Honors&rdquo; on the report card and earn honors-level quality
          points.
        </p>
      </div>
    </div>
  );
}

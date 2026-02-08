import Link from "next/link";
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Graduation Requirements
        </h1>
        <p className="text-[15px] text-text-muted mt-2 max-w-lg">
          New Jersey requires 120 credits; MHS requires{" "}
          <strong className="text-text">{totalCreditsRequired} credits</strong> per Board Policy 5460.
        </p>
      </div>

      {/* Requirements table */}
      <div className="bg-white border border-border rounded-xl overflow-hidden mb-14">
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
            {graduationRequirements.map((req, i) => (
              <tr
                key={req.area}
                className={`border-b border-border last:border-0 row-hover ${i % 2 === 1 ? 'bg-warm-gray/30' : ''}`}
              >
                <td className="px-4 py-3 font-medium">{req.area}</td>
                <td className="text-center px-4 py-3 font-mono text-mountie-blue">
                  {req.credits}
                </td>
                <td className="px-4 py-3 text-text-muted hidden sm:table-cell">
                  {req.notes}
                </td>
              </tr>
            ))}
            <tr className="bg-mountie-blue text-white font-semibold">
              <td className="px-4 py-3.5 text-base">Total Required</td>
              <td className="text-center px-4 py-3.5 font-mono text-lg">
                {totalCreditsRequired}
              </td>
              <td className="px-4 py-3.5 hidden sm:table-cell" />
            </tr>
          </tbody>
        </table>
      </div>

      {/* Promotion credits */}
      <h2 className="text-xl font-[family-name:var(--font-heading)] text-text uppercase tracking-wide mb-4 mt-14">
        Credit Requirements for Promotion
      </h2>
      <div className="bg-white border border-border rounded-xl overflow-hidden mb-14">
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
            {promotionRequirements.map((req, i) => (
              <tr
                key={req.grade}
                className={`border-b border-border last:border-0 row-hover ${i % 2 === 1 ? 'bg-warm-gray/30' : ''}`}
              >
                <td className="px-4 py-3">{req.grade}</td>
                <td className="text-center px-4 py-3 font-mono text-mountie-blue">
                  {req.credits}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="section-divider" />

      {/* GPA table */}
      <h2 className="text-xl font-[family-name:var(--font-heading)] text-text uppercase tracking-wide mb-4 mt-14">
        Quality Point Index (GPA)
      </h2>
      <p className="text-[15px] text-text-muted mb-4">
        GPA is computed at the end of 11th grade and again at the end of 12th
        grade. Higher course levels earn more quality points.
      </p>
      <div className="bg-white border border-border rounded-xl overflow-hidden mb-14">
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
            {gpaTable.rows.map((row, i) => (
              <tr
                key={row.grade}
                className={`border-b border-border last:border-0 row-hover ${i % 2 === 1 ? 'bg-warm-gray/30' : ''}`}
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

      <hr className="section-divider" />

      {/* Contracting for Honors */}
      <h2 className="text-xl font-[family-name:var(--font-heading)] text-text uppercase tracking-wide mb-4 mt-14">
        Contracting for Honors
      </h2>
      <div className="bg-white border border-border rounded-xl p-5 text-sm text-text leading-relaxed mb-8">
        <p>
          In certain courses not offered at the honors level, students may
          contract for a higher level within the first two weeks of the course.
          The contract must be signed by the student, parent, and teacher. Once
          submitted, no changes are allowed. The course will appear as
          &ldquo;Honors&rdquo; on the report card and earn honors-level quality
          points.
        </p>
      </div>

      <div className="text-center py-4">
        <Link
          href="/courses"
          className="link-arrow btn-hover inline-flex items-center gap-1.5 px-5 py-2.5 bg-mountie-blue text-white font-semibold rounded-lg text-sm hover:bg-mountie-dark"
        >
          Browse Courses <span className="arrow">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

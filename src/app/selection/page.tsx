import Link from "next/link";

export const metadata = {
  title: "Selection & Scheduling | MHS Course Guide",
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 mb-14">
      <h2 className="text-lg font-[family-name:var(--font-heading)] text-text uppercase tracking-wide mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

const JUMP_LINKS = [
  { href: "#schedule", label: "Schedule" },
  { href: "#credits", label: "Credits" },
  { href: "#levels", label: "Course Levels" },
  { href: "#overrides", label: "Overrides" },
  { href: "#honors-contract", label: "Honors Contract" },
  { href: "#gpa", label: "GPA" },
  { href: "#college", label: "College Planning" },
];

export default function SelectionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Selection &amp; Scheduling
        </h1>
        <p className="text-[15px] text-text-muted mt-2 max-w-lg">
          How course selection, scheduling, levels, and grading work at
          Montclair High School.
        </p>

        <nav className="flex flex-wrap gap-2 mt-4">
          {JUMP_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="chip-interactive inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg text-mountie-blue bg-mountie-blue/5 border border-mountie-blue/20 hover:bg-mountie-blue/10"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Double-Drop Nine Period Schedule */}
      <Section id="schedule" title="Double-Drop Nine Period Schedule">
        <div className="prose-card">
          <p>
            Students are scheduled for nine periods on a rotating double-drop
            schedule. Each day, six periods meet&mdash;one morning class and one
            afternoon class rotate out. There is a single lunch period for the
            entire school community.
          </p>
          <p>
            Students must enroll in, and successfully complete, all basic
            graduation requirements established by the New Jersey Department of
            Education.
          </p>
        </div>
      </Section>

      <hr className="section-divider" />

      {/* Credit Requirements & Scheduling */}
      <Section id="credits" title="Credit Requirements & Scheduling Guidelines">
        <div className="prose-card">
          <p>
            Students in grades 9&ndash;11 should maintain a yearly workload of
            at least <strong>35 credits</strong> when academic scheduling
            permits (15 credits by end of first semester, 30 credits at end of
            year to remain eligible for athletics). Seniors on track to graduate
            may maintain a workload of <strong>30 credits</strong>.
          </p>

          <h3>Promotion Requirements</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Credits Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sophomore (10th)</td>
                  <td>25 credits</td>
                </tr>
                <tr>
                  <td>Junior (11th)</td>
                  <td>50 credits</td>
                </tr>
                <tr>
                  <td>Senior (12th)</td>
                  <td>85 credits</td>
                </tr>
                <tr className="font-semibold">
                  <td>Graduation Total</td>
                  <td>122 credits</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Important Notes</h3>
          <ul>
            <li>Credit is earned upon completion of the course.</li>
            <li>
              Course requests do not guarantee placement in a particular course.
              Courses may be dropped from the master schedule due to low
              enrollment.
            </li>
            <li>
              Students cannot select teachers or time periods. Time periods for
              courses and lunches are automatically determined.
            </li>
            <li>
              All students must select and rank alternate elective courses in
              case their first choices are unavailable.
            </li>
          </ul>
        </div>
      </Section>

      <hr className="section-divider" />

      {/* Course Instructional Levels */}
      <Section id="levels" title="Course Instructional Levels">
        <div className="prose-card">
          <p>
            Many courses are offered at multiple levels. Your current teacher is
            the best guide to which level is appropriate. Pay particular
            attention to prerequisites for any course under consideration.
          </p>

          <div className="not-prose grid gap-3 sm:grid-cols-2 my-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 card-hover">
              <h4 className="text-sm font-semibold text-slate-700 mb-1">
                Academic (A)
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                For students with achievement scores generally between the 30th
                and 70th percentile. Classroom work depends on outside
                preparation each day with class reinforcement.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-mountie-blue/20 card-hover">
              <h4 className="text-sm font-semibold text-mountie-blue mb-1">
                Honors (H)
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                For students of high academic achievement, typically scoring
                above the 70th percentile on standardized assessments. Assumes
                students have skills for special reports, projects, and
                independent mastery.
              </p>
            </div>

            <div className="bg-mountie-blue rounded-lg p-4 border border-mountie-blue sm:col-span-2 card-hover">
              <h4 className="text-sm font-semibold text-white mb-1">
                Advanced Placement (AP) &amp; High Honors (HH)
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                For students with high grades and very high test scores&mdash;usually
                above the 95th percentile. Both are equally rigorous. AP courses
                correspond to College Board exam content; some colleges award
                credit for high AP scores.
              </p>
            </div>
          </div>

          <p>
            Initial placement is based on teacher recommendations, test scores,
            and grades. If a parent/student disagrees with a placement and
            requests an override, the student accepts responsibility for
            increased rigor, coursework, and pacing.
          </p>
        </div>
      </Section>

      <hr className="section-divider" />

      {/* Course Overrides */}
      <Section id="overrides" title="Course Overrides">
        <div className="prose-card">
          <p>
            Students who wish to take a course at a higher instructional level
            than recommended must complete the override form in the{" "}
            <strong>Genesis Parent Portal</strong>. Overrides apply to
            instructional levels only, not courses themselves.
          </p>
          <p>
            For example, a student <em>cannot</em> override Geometry to take
            Algebra II, but <em>can</em> override Geometry to take Geometry
            Honors.
          </p>
          <ul>
            <li>
              Counselors will honor the request based on master schedule
              availability.
            </li>
            <li>
              Students must remain in the override course for at least one
              quarter before requesting a level change.
            </li>
            <li>
              If a student moves to a lower level, the grade from the override
              course transfers to the new class.
            </li>
          </ul>
        </div>
      </Section>

      <hr className="section-divider" />

      {/* Contracting for Honors */}
      <Section id="honors-contract" title="Contracting for Honors">
        <div className="prose-card">
          <p>
            In certain courses not normally offered at the honors level, students
            may contract for a higher level within the timeframe outlined in the
            student handbook. The Contract Guidelines are:
          </p>
          <ol>
            <li>
              On the first day of class, the teacher distributes course
              proficiencies and announces honors contract guidelines. Contracts
              are available on request.
            </li>
            <li>
              Contracts must be signed by the student, parent, and teacher by
              Friday of the second week of the course.
            </li>
            <li>
              A list of students contracting for Honors is sent to the Office of
              School Counseling by the end of school, Friday of the second week.
            </li>
            <li>
              The course name will appear as &ldquo;Honors&rdquo; on the Report
              Card. Parents and students should verify this is reported
              accurately.
            </li>
            <li>No changes are allowed once contract lists are submitted.</li>
          </ol>
        </div>
      </Section>

      <hr className="section-divider" />

      {/* GPA */}
      <Section id="gpa" title="Grade Point Average (GPA)">
        <div className="prose-card">
          <p>
            GPA is computed at the end of 11th grade and again at the end of
            12th grade. All MHS subjects count except pass/fail courses.
            Junior-year GPA is based on three years of courses. The higher the
            final grade and the higher the academic level, the higher the GPA.
          </p>

          <h3>Quality Point Index</h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>A</th>
                  <th>B</th>
                  <th>C</th>
                  <th>D</th>
                  <th>F</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>High Honors / AP</td>
                  <td>5.0</td>
                  <td>4.0</td>
                  <td>3.0</td>
                  <td>2.0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Honors</td>
                  <td>4.5</td>
                  <td>3.5</td>
                  <td>2.5</td>
                  <td>1.5</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Academic</td>
                  <td>4.0</td>
                  <td>3.0</td>
                  <td>2.0</td>
                  <td>1.0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <hr className="section-divider" />

      {/* Planning for College */}
      <Section id="college" title="Planning for a College Education">
        <div className="prose-card">
          <p>
            Most colleges emphasize these factors in admissions decisions:
          </p>
          <ol>
            <li>Quality and rigor of classes taken</li>
            <li>Grades in academic classes (reflected in GPA)</li>
            <li>SAT and/or ACT scores</li>
            <li>Extra-curricular activities</li>
            <li>College application essay and supplements</li>
            <li>
              Appraisal of personal and academic qualities by teachers and
              counselors
            </li>
          </ol>
          <p>
            Most colleges require a minimum of 16 units (full-year, 5-credit
            courses) for admission. World language requirements vary&mdash;many
            prefer three or four years of one language; some require at least
            two. Consult your school counselor and the college directly.
          </p>
        </div>
      </Section>

      {/* Bottom nav */}
      <div className="flex flex-wrap gap-3 mt-4 pt-6 border-t border-border text-sm">
        <Link
          href="/requirements"
          className="link-underline text-mountie-blue font-medium"
        >
          Graduation Requirements
        </Link>
        <Link href="/tracks" className="link-underline text-mountie-blue font-medium">
          Course Tracks
        </Link>
        <Link href="/courses" className="link-underline text-mountie-blue font-medium">
          Browse All Courses
        </Link>
      </div>
    </div>
  );
}

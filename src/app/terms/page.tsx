import Link from "next/link";

export const metadata = {
  title: "Terms of Use | MHS Course Guide",
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
    <section id={id} className="scroll-mt-20 mb-12">
      <h2 className="text-lg font-[family-name:var(--font-heading)] text-text uppercase tracking-wide mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Terms of Use
        </h1>
        <p className="text-[15px] text-text-muted mt-2 max-w-lg">
          What this site is, what it is not, and the terms you accept by using
          it.
        </p>
        <p className="text-xs text-text-muted/70 mt-3">
          Last updated September 1, 2026
        </p>
      </div>

      <div className="mb-10 px-4 py-3.5 rounded-lg bg-amber-50 border border-amber-200/70 text-sm text-amber-900 leading-relaxed">
        <span className="font-semibold">
          This is not an official school website.
        </span>{" "}
        It is a personal project built by a parent. It is not affiliated with,
        endorsed by, or operated by Montclair High School or Montclair Public
        Schools. Always confirm your course selections and graduation
        requirements with your school counselor before relying on anything here.
      </div>

      <Section id="affiliation" title="No Affiliation With The School">
        <div className="prose-card">
          <p>
            This site is built and operated by Thomas Suharto, a parent of a
            Montclair High School student. It is an independent, unofficial
            reference.
          </p>
          <p>
            Montclair High School and Montclair Public Schools did not create,
            review, approve, or endorse this site, and are not responsible for
            it. The school&rsquo;s name and logo appear here only to identify
            which school the course information describes. Nothing on this site
            should be read as an official statement from the school or the
            district.
          </p>
        </div>
      </Section>

      <Section id="what-this-is" title="What This Site Is">
        <div className="prose-card">
          <p>
            This is a reference tool for reading and planning around Montclair
            High School&rsquo;s published 2026&ndash;2027 Program of Studies. It
            lets you browse courses, follow prerequisite pathways, and sketch a
            four-year plan.
          </p>
          <p>
            It is a planning aid and nothing more. It does not register you for
            courses, communicate with the school, or connect to Genesis or any
            student record system. Building a plan here has no effect on your
            actual schedule.
          </p>
        </div>
      </Section>

      <Section id="accuracy" title="Accuracy And Your Counselor">
        <div className="prose-card">
          <p>
            The course information here was transcribed by hand from the
            district&rsquo;s published Program of Studies. Transcription
            mistakes are possible, the district can change offerings and
            requirements at any time, and this site may not reflect the most
            recent version.
          </p>
          <p>
            <strong>
              The Program of Studies and your school counselor are the
              authoritative sources.
            </strong>{" "}
            Confirm anything that matters &mdash; prerequisites, credit values,
            graduation requirements, course availability &mdash; with your
            counselor before you act on it. Do not use this site as your only
            basis for a decision about your schedule or your graduation.
          </p>
          <p>
            The credit calculations and requirement checks in the planner are
            estimates meant to help you think. They are not an official audit of
            your progress toward graduation.
          </p>
        </div>
      </Section>

      <Section id="no-warranty" title="Provided As Is">
        <div className="prose-card">
          <p>
            This site is provided as is and as available, without warranties of
            any kind, express or implied. That includes any implied warranty of
            accuracy, completeness, merchantability, or fitness for a particular
            purpose. The site may be unavailable, incomplete, or wrong at any
            time.
          </p>
          <p>
            To the fullest extent permitted by law, Thomas Suharto is not liable
            for any loss or damage arising from your use of this site or your
            reliance on anything in it, including any consequence of a course
            selection or a missed graduation requirement. If you rely on this
            site instead of confirming with your counselor, that is your
            decision and your responsibility.
          </p>
        </div>
      </Section>

      <Section id="acceptable-use" title="Acceptable Use">
        <div className="prose-card">
          <p>Please use this site as intended. Do not:</p>
          <ul>
            <li>
              Use it for any unlawful purpose, or in a way that harms or harasses
              anyone
            </li>
            <li>
              Attempt to disrupt, overload, probe, or gain unauthorized access to
              the site or its hosting
            </li>
            <li>
              Scrape or bulk-copy the content for republication or commercial use
            </li>
            <li>
              Present this site, or anything from it, as official school or
              district material
            </li>
          </ul>
        </div>
      </Section>

      <Section id="content" title="Content And Trademarks">
        <div className="prose-card">
          <p>
            Course titles, descriptions, and requirements originate with
            Montclair Public Schools and remain theirs. They are reproduced here
            for reference so families can read them more easily.
          </p>
          <p>
            The Montclair High School name and the school&rsquo;s &ldquo;M&rdquo;
            logo are marks of Montclair Public Schools, used here only to
            identify the school this guide covers. Their use does not imply any
            affiliation or endorsement. If the district would prefer they not be
            used here, write to the address below and they will be removed.
          </p>
          <p>
            The design, code, and original writing on this site belong to Thomas
            Suharto.
          </p>
        </div>
      </Section>

      <Section id="third-party" title="Links And Third-Party Services">
        <div className="prose-card">
          <p>
            This site links to third-party sites, including the district&rsquo;s
            own pages, and relies on third-party services for hosting, anonymous
            analytics, and the chat assistant. Those services are governed by
            their own terms and privacy policies, not these. See the{" "}
            <Link href="/privacy" className="text-mountie-blue underline">
              Privacy Policy
            </Link>{" "}
            for what each one receives.
          </p>
        </div>
      </Section>

      <Section id="changes" title="Changes">
        <div className="prose-card">
          <p>
            These terms may be updated from time to time. The date at the top of
            this page shows when they last changed. Continuing to use the site
            after a change means you accept the updated terms.
          </p>
        </div>
      </Section>

      <Section id="law" title="Governing Law">
        <div className="prose-card">
          <p>
            These terms are governed by the laws of the State of New Jersey,
            without regard to its conflict of law rules. Any dispute arising from
            this site will be brought in the state or federal courts located in
            New Jersey.
          </p>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="prose-card">
          <p>
            Thomas Suharto
            <br />
            <a
              href="mailto:tomsuharto@gmail.com"
              className="text-mountie-blue underline"
            >
              tomsuharto@gmail.com
            </a>
          </p>
        </div>
      </Section>
    </div>
  );
}

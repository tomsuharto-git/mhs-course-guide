export const metadata = {
  title: "Privacy Policy | MHS Course Guide",
};

// TODO(privacy): When account sign-in ships, add a section covering what the
// auth provider stores (name, email from Google/Apple), that plans are then
// saved against an account id, and how to delete an account. Until then this
// page must not describe accounts that do not exist.

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

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Privacy Policy
        </h1>
        <p className="text-[15px] text-text-muted mt-2 max-w-lg">
          What this site collects, what it does not, and how to remove your
          data.
        </p>
        <p className="text-xs text-text-muted/70 mt-3">
          Last updated September 1, 2026
        </p>
      </div>

      <div className="mb-10 px-4 py-3.5 rounded-lg bg-indigo-50 border border-indigo-200/60 text-sm text-indigo-900 leading-relaxed">
        <span className="font-semibold">The short version.</span> This site has
        no accounts and never asks for your name, email, or any other personal
        detail. The course plan you build stays in your own browser. Usage
        statistics are anonymous and cookie-free. Nothing is sold, and there is
        no advertising or cross-site tracking.
      </div>

      <Section id="who" title="Who Runs This Site">
        <div className="prose-card">
          <p>
            This site is built and operated by Thomas Suharto, a parent of a
            Montclair High School student, as a personal project. It is
            <strong> not affiliated with, endorsed by, or operated by</strong>{" "}
            Montclair High School or Montclair Public Schools.
          </p>
          <p>
            Questions about privacy can be sent to{" "}
            <a
              href="mailto:tomsuharto@gmail.com"
              className="text-mountie-blue underline"
            >
              tomsuharto@gmail.com
            </a>
            .
          </p>
        </div>
      </Section>

      <Section id="plan" title="Your Course Plan">
        <div className="prose-card">
          <p>
            When you build a four-year plan, it is saved in your browser&rsquo;s
            local storage on the device you are using. It is not sent to a
            server, and there is no database holding it. Nobody else can see it,
            including the operator of this site.
          </p>
          <p>
            Because it lives in your browser, the plan disappears if you clear
            your browsing data, use private browsing, or switch to a different
            browser or device.
          </p>
          <p>
            The share feature builds a link that contains your course selections
            encoded in the web address itself. Nothing is stored on a server when
            you share. Anyone you send that link to can see the plan it
            describes, so treat it the way you would treat any other link you
            send.
          </p>
        </div>
      </Section>

      <Section id="analytics" title="Anonymous Usage Statistics">
        <div className="prose-card">
          <p>
            This site uses Vercel Web Analytics to count visits. It is
            cookie-free and does not follow you to other websites. It records
            aggregate information only:
          </p>
          <ul>
            <li>Which pages were viewed, and how many times</li>
            <li>The site or search engine you arrived from</li>
            <li>Approximate country</li>
            <li>Device type, browser, and operating system</li>
          </ul>
          <p>
            There is no way to identify an individual person from this data, and
            it is not combined with anything else. There are no advertising
            networks, tracking pixels, or third-party marketing tools on this
            site.
          </p>
        </div>
      </Section>

      <Section id="chat" title="The Chat Assistant">
        <div className="prose-card">
          <p>
            The chat assistant answers questions about the course catalog. When
            you send it a message, that message is transmitted to Anthropic,
            which runs the AI model that generates the reply. Anthropic processes
            it under its own terms and privacy policy.
          </p>
          <p>
            <strong>
              Please do not type personal information into the chat.
            </strong>{" "}
            It does not need your name, your student ID, your grades, or your
            contact details to answer a question about courses, and there is no
            reason to send those to a third party.
          </p>
          <p>
            Conversations are not stored by this site and are not linked to you.
          </p>
        </div>
      </Section>

      <Section id="hosting" title="Hosting">
        <div className="prose-card">
          <p>
            This site is hosted by Vercel. As with any website, Vercel&rsquo;s
            servers keep standard technical logs of requests, which can include
            IP addresses, for security and reliability purposes. These logs are
            handled by Vercel under its own privacy policy.
          </p>
        </div>
      </Section>

      <Section id="not-collected" title="What This Site Does Not Do">
        <div className="prose-card">
          <ul>
            <li>No accounts, sign-ins, or passwords</li>
            <li>No names, email addresses, or phone numbers</li>
            <li>No advertising, and no data sold or shared with advertisers</li>
            <li>No tracking cookies and no cross-site tracking</li>
            <li>No newsletters or marketing email</li>
            <li>No connection to Genesis, your transcript, or school records</li>
          </ul>
        </div>
      </Section>

      <Section id="students" title="Students Under 18">
        <div className="prose-card">
          <p>
            This site is built for high school students and their families, so
            most people using it are under 18. That is exactly why it is designed
            not to ask who you are. There is no sign-up, no login, and no field
            anywhere that asks for your name or contact details.
          </p>
          <p>
            The one place you could put personal information into this site is
            the chat box, which is why it is worth repeating: do not type
            personal details there.
          </p>
          <p>
            If you are a parent or guardian and have a question or concern about
            this site, please write to{" "}
            <a
              href="mailto:tomsuharto@gmail.com"
              className="text-mountie-blue underline"
            >
              tomsuharto@gmail.com
            </a>
            .
          </p>
        </div>
      </Section>

      <Section id="delete" title="Removing Your Data">
        <div className="prose-card">
          <p>
            Because your plan is stored only in your own browser, you are in
            control of it. Use the <strong>Clear all</strong> button in the
            planner to erase it, or clear your browser&rsquo;s site data for this
            site. Either removes it completely. There is no copy held anywhere
            else for anyone to delete.
          </p>
        </div>
      </Section>

      <Section id="changes" title="Changes To This Policy">
        <div className="prose-card">
          <p>
            If what this site collects ever changes, this page will be updated
            and the date at the top will change with it. If a future version adds
            optional accounts, this policy will say so plainly before that
            feature goes live.
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

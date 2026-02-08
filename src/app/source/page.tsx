const PDF_PATH = "/program-of-studies-2026-2027.pdf";

export default function SourcePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-3xl mb-8">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Source Document
        </h1>
        <p className="text-text-muted mt-2 text-[15px] leading-relaxed">
          Everything on this site is derived from Montclair High School&apos;s
          official 2026–2027 Program of Studies.
          <br />
          View the full document below or download a copy.
        </p>
        <a
          href={PDF_PATH}
          download
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-mountie-blue text-white text-sm font-semibold rounded-lg hover:bg-mountie-dark transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v9M4 8l4 4 4-4M2 13h12" />
          </svg>
          Download PDF
        </a>
      </div>

      <div className="rounded-xl border-2 border-border overflow-hidden bg-white" style={{ height: "calc(100vh - 120px)" }}>
        <iframe
          src={PDF_PATH}
          className="w-full h-full"
          title="2026-2027 Program of Studies"
        />
      </div>
    </div>
  );
}

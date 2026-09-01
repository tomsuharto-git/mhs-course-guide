import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="h-px bg-mountie-blue/20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-text">
              Montclair High School
            </p>
            <p className="text-xs text-text-muted mt-0.5">
              100 Chestnut Street, Montclair, NJ 07042
            </p>
          </div>
          <p className="text-xs text-text-muted">
            Source: 2026&ndash;2027 Program of Studies
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-text-muted leading-relaxed max-w-3xl">
            <span className="font-semibold text-text">
              Unofficial parent-built reference.
            </span>{" "}
            Not affiliated with, endorsed by, or operated by Montclair High
            School or Montclair Public Schools. Always confirm course selections
            and graduation requirements with your school counselor.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3">
            <Link
              href="/privacy"
              className="text-xs text-text-muted hover:text-mountie-blue underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-text-muted hover:text-mountie-blue underline underline-offset-2"
            >
              Terms of Use
            </Link>
            <a
              href="mailto:tomsuharto@gmail.com"
              className="text-xs text-text-muted hover:text-mountie-blue underline underline-offset-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

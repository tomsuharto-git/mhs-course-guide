export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
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
            Source: 2026–2027 Program of Studies
          </p>
        </div>
        <p className="text-[11px] text-text-muted/50 mt-4 pt-4 border-t border-border">
          Unofficial parent-built reference. Always confirm with your school counselor.
        </p>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-white mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-text-muted">
          <p>
            Montclair High School &middot; 100 Chestnut Street, Montclair, NJ 07042
          </p>
          <p>
            Source:{" "}
            <span className="font-medium">
              2026–2027 Program of Studies
            </span>
          </p>
        </div>
        <p className="text-xs text-text-muted/60 mt-2 text-center sm:text-left">
          Unofficial parent-built reference. Always confirm with your school counselor.
        </p>
      </div>
    </footer>
  );
}

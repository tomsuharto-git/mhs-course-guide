import { Department, DEPARTMENT_META } from "@/data/types";

const icons: Record<Department, React.ReactNode> = {
  english: (
    // Book
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  ),
  math: (
    // Calculator / plus-minus
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <line x1="12" y1="5" x2="12" y2="11" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  ),
  science: (
    // Flask
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M9 3h6v5l4 9H5l4-9V3z" />
      <line x1="9" y1="3" x2="15" y2="3" />
    </svg>
  ),
  "social-studies": (
    // Globe
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  ),
  "world-languages": (
    // Chat bubble / speech
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  "visual-performing-arts": (
    // Palette
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4c3 0 5.6-2.5 5.6-5.6C23 6.4 18 2 12 2z" />
      <circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" />
      <circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" />
      <circle cx="15.5" cy="7.5" r="1.2" fill="currentColor" />
    </svg>
  ),
  "health-pe": (
    // Heart/pulse
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20.4 4.6a5.5 5.5 0 0 0-7.8 0L12 5.2l-.6-.6a5.5 5.5 0 0 0-7.8 7.8l.6.6L12 20.8l7.8-7.8.6-.6a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  ),
  "career-technical": (
    // Wrench / tool
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.3 6.3a2.1 2.1 0 1 1-3-3l6.3-6.3a6 6 0 0 1 7.9-7.9l-3.8 3.8z" />
    </svg>
  ),
  "special-education": (
    // Star
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2" />
    </svg>
  ),
};

export function DepartmentIcon({
  department,
  size = "md",
}: {
  department: Department;
  size?: "sm" | "md";
}) {
  const meta = DEPARTMENT_META[department];
  const sizeClasses = size === "sm" ? "w-8 h-8" : "w-10 h-10";

  return (
    <div
      className={`${sizeClasses} rounded-lg flex items-center justify-center text-white shadow-sm transition-transform duration-200`}
      style={{ backgroundColor: meta.color }}
    >
      {icons[department]}
    </div>
  );
}

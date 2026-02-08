import { PlannerWizard } from "@/components/wizard/PlannerWizard";

export const metadata = {
  title: "Planner | MHS Course Guide",
  description: "Plan your 4-year course schedule at Montclair High School with prerequisite-aware selection and graduation tracking.",
};

export default function PlannerPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Plan Your Courses
        </h1>
        <p className="text-[15px] text-text-muted mt-2 max-w-lg">
          Build your 4-year schedule step by step. Choose pathways for each department and we&apos;ll fill in the courses.
        </p>
      </div>
      <PlannerWizard />
    </div>
  );
}

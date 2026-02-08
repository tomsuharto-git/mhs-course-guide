import { allCourses } from "@/data/courses";
import {
  graduationRequirements,
  totalCreditsRequired,
  gpaTable,
  promotionRequirements,
} from "@/data/graduation-requirements";
import { allTracks } from "@/data/tracks";
import { compressedDescriptions } from "./compressed-descriptions";

export function buildCourseContext(): string {
  const sections: string[] = [];

  // Graduation requirements
  sections.push("## Graduation Requirements");
  sections.push(`MHS requires ${totalCreditsRequired} total credits (NJ requires 120).`);
  for (const req of graduationRequirements) {
    sections.push(`- ${req.area}: ${req.credits} credits — ${req.notes}`);
  }

  // Promotion requirements
  sections.push("\n## Promotion Credits");
  for (const p of promotionRequirements) {
    sections.push(`- ${p.grade}: ${p.credits} credits`);
  }

  // GPA table
  sections.push("\n## GPA Quality Points");
  sections.push("Grade | High Honors/AP | Honors | Academic");
  for (const row of gpaTable.rows) {
    sections.push(`${row.grade} | ${row.hh} | ${row.h} | ${row.a}`);
  }

  // Courses grouped by department
  sections.push("\n## All Courses");
  const byDept = new Map<string, typeof allCourses>();
  for (const c of allCourses) {
    const arr = byDept.get(c.department) || [];
    arr.push(c);
    byDept.set(c.department, arr);
  }

  for (const [dept, courses] of byDept) {
    sections.push(`\n### ${dept}`);
    for (const c of courses) {
      const prereqs = c.prerequisites.length > 0 ? ` | Prereqs: ${c.prerequisites.join(", ")}` : "";
      const notes = c.notes ? ` | Note: ${c.notes}` : "";
      const fulfills = c.fulfills.length > 0 ? ` | Fulfills: ${c.fulfills.join(", ")}` : "";
      sections.push(
        `- ${c.name} (${c.code}) [${c.id}] — ${c.level}, Grades ${c.grades.join(",")}, ${c.credits}cr, ${c.duration}${prereqs}${fulfills}${notes}`
      );
      sections.push(`  ${compressedDescriptions[c.id] || c.description}`);
    }
  }

  // Track pathways
  sections.push("\n## Course Track Pathways");
  for (const track of allTracks) {
    sections.push(`\n### ${track.name} Track`);
    sections.push(track.description);
    sections.push(`Columns: ${track.columns.join(" → ")}`);
    for (const edge of track.edges) {
      const label = edge.label ? ` (requires ${edge.label})` : "";
      sections.push(`  ${edge.from} → ${edge.to}${label}`);
    }
  }

  return sections.join("\n");
}

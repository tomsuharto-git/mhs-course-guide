# Session: Selection Page & Department Intros

**Saved:** 2026-02-07
**Status:** Paused
**Can Resume:** Yes

---

## What We're Building

An interactive MHS Course Guide web app (Next.js) that presents the 2026-2027 Montclair High School Program of Studies PDF as a browsable website with courses, tracks, programs, requirements, and scheduling info.

## Progress Summary

### Completed (this session)
- [x] Department intro text extracted from PDF for all 8 departments
- [x] Created `src/data/department-intros.ts` with condensed intro paragraphs
- [x] Department intros added to individual track detail pages (`/tracks/[id]`)
- [x] Tracks listing page (`/tracks`) kept as original flat grid (user rejected grouped layout)
- [x] Created `/selection` page with scheduling/policy content from PDF pp. 11-17
  - Double-drop nine period schedule
  - Credit requirements & promotion thresholds (table)
  - Course instructional levels (Academic / Honors / AP&HH)
  - Course overrides policy
  - Contracting for Honors guidelines
  - GPA & Quality Point Index table
  - Planning for a College Education
- [x] Added `prose-card` CSS class to globals.css for styled content blocks
- [x] Added "Selection" to nav in Header.tsx
- [x] All changes committed and pushed (`ca80789`)

### Completed (prior sessions, for context)
- [x] All 8 department course data files (english, math, science, social-studies, world-languages, vpa, health-pe, cte)
- [x] Course tracks for 5 departments (english, math, science, social-studies, world-languages)
- [x] Programs page (SLCs, dual enrollment, internships, research) with jump nav
- [x] Graduation requirements page
- [x] Health/PE courses with quarter duration support
- [x] Analysis of Monetary Policy H stub added to social studies

### Not Started (identified gaps from PDF audit)
- [ ] Special Education courses (still `[]` in index — PDF p.114 has Study Skills, Skills for Life and Work, Work Study, CBI)
- [ ] Appendix A: VPA & 21st Century fulfillment cross-reference table (p.126)
- [ ] Appendix C: Graduation Assessment Requirements for Classes 2023-2027 (pp.128-131)
- [ ] Media Center page (p.125)
- [ ] ECVTS Shared-Time Program info (p.16) — could go on Selection page
- [ ] Independent Study policy (p.16) — could go on Selection page
- [ ] External Coursework policy (p.17) — could go on Selection page

## Current State

**Working on:** PDF-to-site gap closure
**Last change:** Moved department intros from tracks listing to track detail pages
**Last commit:** `ca80789` pushed to `tomsuharto-git main`

**Files modified this session:**

| File | Status | What Changed |
|------|--------|--------------|
| `src/data/department-intros.ts` | Created | Condensed department intro text for all 8 departments |
| `src/app/tracks/page.tsx` | Modified | Reverted to flat grid (removed grouped layout) |
| `src/app/tracks/[id]/page.tsx` | Modified | Added department intro paragraph below track description |
| `src/app/selection/page.tsx` | Created | Full selection/scheduling page with 7 sections |
| `src/app/globals.css` | Modified | Added prose-card CSS for styled content blocks |
| `src/components/layout/Header.tsx` | Modified | Added "Selection" to nav items |

## Key Context

### Decisions Made
- **Department intros on detail pages, not listing**: User explicitly rejected grouped tracks listing. Intros belong on `/tracks/math` etc., not `/tracks`.
- **prose-card CSS**: Created a reusable class for content-heavy pages (selection, potentially future info pages). Handles p, h3, ul, ol, table, strong, em.
- **Selection page structure**: Jump nav at top, 7 sections with anchor IDs and scroll-mt-20. Course levels shown as styled cards (not just text).

### Important Discoveries
- PDF has no description for "Analysis of Monetary Policy Honors" — only appears on flowchart p.86. Added as stub.
- The PDF front matter (pp. 11-17) contains substantial policy content worth surfacing.
- Pages 16-17 have ECVTS, Independent Study, and External Coursework — not yet added to Selection page.

### PDF Page Reference
| Department | Intro Page | Flowchart Page |
|-----------|-----------|---------------|
| English | 23 | 25 |
| World Languages | 40 | (none — grid) |
| Math | 55 | 56 |
| Science | 71 | 72 |
| Health/PE | 66 | (none) |
| Social Studies | 85 | 86 |
| VPA | 96 | (none) |
| CTE | 114 | (none) |

## Related Documents

- **PDF:** `/Users/tomsuharto/Documents/Obsidian Vault/Notion/LIFE/School/MHS/2026-2027 Program of Studies ( Preclaculs FINAL).pdf`
- **Previous session:** `thoughts/shared/sessions/2026-02-07_course-description-audit.md`
- **Previous session:** `thoughts/shared/sessions/2026-02-07_enrich-departments-tracks.md`

## To Resume

### Quick Start
```
/resume @thoughts/shared/sessions/2026-02-07_selection-page-dept-intros.md
```

### Manual Context Load
1. Read this session file
2. Check `src/data/courses/index.ts` for current department status
3. Check `src/components/layout/Header.tsx` for current nav items
4. Review the "Not Started" list above for next items

### First Action on Resume
Decide which remaining gap to tackle next — likely Special Education courses (PDF p.114) since it's the last empty department, or adding ECVTS/Independent Study/External Coursework sections to the Selection page.

---

## Session Metadata

- **Git remote:** `tomsuharto-git` -> `https://github.com/tomsuharto-git/mhs-course-guide.git`
- **Push command:** `git push tomsuharto-git main`
- **Complexity:** Medium

# Session: Fact-Check Fixes — Scheduling Info Night vs. App

**Saved:** 2026-02-12
**Status:** Paused
**Can Resume:** Yes

---

## What We're Building

After attending MHS 9th Grade Scheduling Information Night, we compared transcript claims against the course planner app and identified 13 items. 4 were already correct, 2 need PDF verification, and 7 needed code changes. This session implements the 7 code changes.

## Progress Summary

### Completed
- [x] **#9 Honor Choir prerequisiteNote** — Added `prerequisiteNote: 'Audition prior to admission'` to `choir-h` and `madrigal-choir-h`
- [x] **Render prerequisiteNote on course detail page** — Added amber callout in `/courses/[id]/page.tsx` when `prerequisiteNote` exists and no linked prereq courses
- [x] **#2 Freshman credit floor** — Made YearColumn `lowThreshold` grade-aware: 35 for grades 9-11, 30 for seniors (was flat 25)
- [x] **#5 Dance = PE substitute** — Added callout in AutoFillStep noting dance can substitute for PE
- [x] **#3 + #4 No study halls / 6 choices** — Added callout in ElectiveBrowseStep: no study halls for freshmen, Genesis asks for 6 ranked elective choices
- [x] **#6 Math double-up** — Added info note in MathEntryStep about Algebra I students doubling up to accelerate
- [x] **#12 External program names** — Added Johns Hopkins CTY, Newark Academy, MKA, accredited colleges, and External Course Request Form to details page
- [x] **Build verification** — `npm run build` passes cleanly (282/282 static pages)

### Not Started
- [ ] **Phase 0 PDF verification** — Two items need user to confirm against Program of Studies PDF:
  - **#1 Health & PE credits/year**: Transcript says 3.5, app says 3.75. Likely app is correct (1.25/quarter x 3 = 3.75).
  - **#8 Intermediate Dance audition**: Transcript says intermediate AND advanced need audition. App only flags Advanced Dance. Need PDF to confirm.
- [ ] **Commit** — All fact-check fixes + PlanActions readable-text share changes from previous session are uncommitted

## Current State

**Working on:** All code changes are done; awaiting commit
**Last change:** Added external program names to details page
**Files modified this session:**

| File | Status | What Changed |
|------|--------|--------------|
| `src/data/courses/visual-performing-arts.ts` | Modified | Added `prerequisiteNote` to `choir-h` (~line 619) and `madrigal-choir-h` (~line 636) |
| `src/app/courses/[id]/page.tsx` | Modified | Added prerequisiteNote amber callout between prerequisites and "Next in Pathway" sections (~line 143) |
| `src/components/journey/YearColumn.tsx` | Modified | Grade-aware `lowThreshold` (35 for 9-11, 30 for 12); updated warning text to show threshold |
| `src/components/wizard/steps/AutoFillStep.tsx` | Modified | Added dance=PE substitute info callout after intro text |
| `src/components/wizard/steps/ElectiveBrowseStep.tsx` | Modified | Added no-study-halls + 6-ranked-choices callout before requirement badges |
| `src/components/wizard/steps/MathEntryStep.tsx` | Modified | Added math double-up acceleration note after entry point buttons |
| `src/app/details/page.tsx` | Modified | Added "Approved Programs" paragraph with CTY, Newark Academy, MKA, External Course Request Form |

## Key Context

### Items Verified Correct (no code changes needed)
- **#7** Band/Orchestra distinction (Intro Band = no experience, Band H = prior experience)
- **#10** Art I H portfolio review (already has `prerequisiteNote`)
- **#11** Override system info (already comprehensive on details page)
- **#13** AP courses not available to freshmen (all AP courses are grade 10+)

### Decisions Made
- Choir courses keep the audition info in BOTH `notes` and `prerequisiteNote` — notes is the existing text visible on the detail page, prerequisiteNote feeds into the CoursePicker/prerequisite engine
- YearColumn threshold was bumped from 25 to 35/30 because 25 was far too low to be useful — 7 periods x 5cr = 35 is a full schedule
- Math double-up note is informational only — we deferred building it as an actual wizard pathway

### Uncommitted from Previous Session
- PlanActions.tsx, ReviewStep.tsx, JourneyPlanner.tsx — readable-text share changes (should be committed together with these fixes)

## To Resume

### Quick Start
```
/resume @thoughts/shared/sessions/2026-02-12_fact-check-fixes.md
```

### First Action on Resume
1. Verify the two Phase 0 items against Program of Studies PDF (if user has answers)
2. Commit all changes (fact-check fixes + PlanActions share changes from last session)

---

## Session Metadata

- **Total phases:** 5 (0-4) + commit
- **Phases complete:** 4 of 4 code phases
- **Estimated remaining:** PDF verification (user-dependent) + commit
- **Complexity:** Low — all remaining work is verification and git

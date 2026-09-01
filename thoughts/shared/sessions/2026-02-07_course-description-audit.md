# Session: Course Description Audit vs Program of Studies PDF

**Saved:** 2026-02-07
**Status:** Paused
**Can Resume:** Yes

---

## What We're Building

Systematically auditing every course description in the MHS Course Guide web app against the official 2026-2027 Program of Studies PDF. For each department, we read the PDF pages, compare to the TypeScript data files, identify gaps/placeholders/short descriptions, then update the code to match the PDF exactly. Build-check, commit, and push after each department.

## Progress Summary

### Completed
- [x] **Math** (21 courses) — All descriptions match PDF. Commit `b00ff53`
- [x] **English** (45 courses) — All match + added 11 ESL proficiency-level courses. Commit `a5fe418`
- [x] **Science** (24 courses) — AP Physics 2 confirmed genuinely short in PDF, no changes needed
- [x] **Social Studies** (22 courses) — Expanded American Foreign Policy H, replaced Microeconomics H and Macroeconomics H placeholders with full PDF descriptions, added Macroeconomics prerequisite. Commit `091383b`
- [x] **World Languages** (30 courses) — Fixed 5 gaps: AP Spanish V, Spanish Cinema HH, French III H, AP French V, Latin IV H. Commit `2b435ff`

### Not Started
- [ ] **Visual & Performing Arts** — `src/data/courses/visual-performing-arts.ts` — not yet audited against PDF
- [ ] **Career & Technical Education** — `src/data/courses/career-technical.ts` — not yet audited against PDF
- [ ] **Other departments** — Check if any other course files exist or need creation (e.g., PE/Health, Computer Science)

## Current State

**Working on:** Description audit complete for 5 core departments
**Last change:** Fixed 5 World Languages description gaps
**Last commit:** `2b435ff` pushed to `tomsuharto-git/main`

**Files modified this session (across 2 conversation windows):**

| File | Status | What Changed |
|------|--------|--------------|
| `src/data/courses/english.ts` | Modified | Added 11 ESL proficiency-level courses (Newcomers A/B, Beginners A/B, Intermediate A/B, Advanced A/B, Transitional, ESL Support), updated ESL Grade 9-12 descriptions |
| `src/data/courses/social-studies.ts` | Modified | Expanded American Foreign Policy H, replaced Micro/Macroeconomics H placeholders, added Macroeconomics prerequisite |
| `src/data/courses/world-languages.ts` | Modified | Filled 5 description gaps (AP Spanish V, Spanish Cinema HH, French III H, AP French V, Latin IV H) |

## Key Context

### Decisions Made
- **AP Physics 2 left as-is**: The PDF description is genuinely just 2 sentences. Not a code gap.
- **African American History left as-is**: PDF description matches code — it's genuinely short in the source.
- **Macroeconomics prerequisite added**: PDF states "Prerequisite: Microeconomics" — added `prerequisites: ['microecon-h']`

### Important Discoveries
- PDF page numbering is offset from the reader's page parameter — sometimes need to request a wider range and look at printed page numbers at bottom
- The PDF has generic "level completion" outcomes (Level I-VI) for World Languages on pages 40-42 that are NOT course-specific descriptions — the actual course descriptions start on page 43
- Some courses are genuinely short in the PDF (AP Physics 2, African American History) — don't over-expand

### PDF Page Map (for remaining departments)
- World Languages: pages 40-54
- Mathematics: pages 55-74
- Science: pages 75-84
- Social Studies: pages 85-96
- Visual & Performing Arts: starts page 96
- Career & Technical: unknown page range, likely after VPA
- English: pages 23-39

## Related Documents

- **PDF Source:** `/Users/tomsuharto/Documents/Obsidian Vault/Notion/LIFE/School/MHS/2026-2027 Program of Studies ( Preclaculs FINAL).pdf`
- **Project root:** `/Users/tomsuharto/Documents/Obsidian Vault/Notion/LIFE/School/MHS/mhs-course-guide/`
- **Git remote:** `tomsuharto-git` (NEVER `origin`)

## To Resume

### Quick Start
```
/resume @thoughts/shared/sessions/2026-02-07_course-description-audit.md
```

### Manual Context Load
If /resume isn't available, load these in order:
1. Read this session file
2. Read `src/data/courses/visual-performing-arts.ts`
3. Read `src/data/courses/career-technical.ts`
4. Read PDF pages for VPA section (starts ~page 96)

### First Action on Resume
Audit Visual & Performing Arts descriptions against the PDF. Read the VPA course file and the corresponding PDF pages, compare each course, report gaps, fix them, build-check, commit, push. Then repeat for Career & Technical Education.

---

## Session Metadata

- **Total departments:** 7 (Math, English, Science, Social Studies, World Languages, VPA, Career-Tech)
- **Departments complete:** 5
- **Remaining:** 2 (VPA, Career-Tech)
- **Complexity:** Low (mechanical comparison work)

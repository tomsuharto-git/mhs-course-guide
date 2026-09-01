# Session: Enrich Department Courses + Convert Tracks to Pathway Tables

**Saved:** 2026-02-07
**Status:** Complete
**Can Resume:** N/A

---

## What We Built

MHS Program of Studies course guide website. This session enriched course descriptions from the 131-page PDF and converted department track flowcharts from edge-based format to pathway table format (grade columns x pathway rows).

## Progress Summary

### Completed
- [x] **Math courses** — Enriched all 22 descriptions from PDF pp. 55-66, fixed Precalc H and AP Calc BC prereqs
- [x] **English courses** — Enriched all ~35 descriptions from PDF pp. 23-39, fixed eng-11-h prereqs
- [x] **English track** — Converted to pathway table, collapsed AP/Honors into single row
- [x] **Social Studies courses** — Enriched all 23 descriptions from PDF pp. 86-96, fixed prereqs/grades/levels
- [x] **Social Studies track** — Converted to pathway table with cross-pathway G12 electives
- [x] **Math track** — Already in good shape
- [x] **Science track** — Already done in prior session
- [x] **World Languages track** — Converted from 4 columns to 6-column grid matching PDF flowchart (p. 43)
- [x] **VPA courses** — Full audit against PDF pp. 96-111. Fixed duration/credits (~20 courses semester/2.5cr), added contractHonors, corrected grade ranges, added Music Theory I H course
- [x] **Career & Technical courses** — Full audit against PDF pp. 114-124. Fixed duration/credits, added contractHonors, corrected grade ranges, added 4 Robotics courses (I-IV), added prerequisiteNote type field
- [x] **Health & PE** — Reviewed PDF pp. 68-73. No course data file created; PE is activity-rotation model (25+ activities, 1.25cr/quarter) without individual course codes. Health is grade-level required (9-12). Not suitable for standard course model.

### Key Changes by Commit
| Commit | Description |
|--------|-------------|
| `7b0b03b` | World Languages track: 6-column grid |
| `1a190f0` | VPA courses: full PDF audit |
| `4666828` | CTE courses: full PDF audit + 4 Robotics courses + prerequisiteNote type |

## Design Principles Established

1. **Pathway Tables:** Columns = grades, rows = pathways. No redundant rows.
2. **Cross-level options:** Terminal columns show all realistic options, not just level-matched courses.
3. **contractHonors pattern:** `level: 'academic'` + `contractHonors: true` for honors-by-contract courses.
4. **World Languages exception:** Uses GradeGrid (not PathwayTable) because columns = languages, rows = progression years.
5. **prerequisiteNote field:** Added to Course type for human-readable prereq text when course IDs alone don't capture requirements (math prerequisites, instructor consent, etc.).

## Remaining Work (outside this session scope)

- Health & PE course data — could be created if needed, but activity-rotation model is atypical
- `special-education: []` — placeholder in index, no courses entered
- Analysis of Monetary Policy Honors — TODO in `src/data/courses/social-studies.ts` (no PDF description found)

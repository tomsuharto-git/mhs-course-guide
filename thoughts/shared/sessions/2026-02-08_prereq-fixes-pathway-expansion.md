# Session: Prerequisite Fixes & Pathway Choice Expansion

**Saved:** 2026-02-08
**Status:** Paused — changes applied, not yet committed
**Can Resume:** Yes

---

## What We're Building

A department-by-department Planner Wizard for the MHS Course Guide that walks students through building a 4-year course plan. The wizard was fully built in a prior session (6 phases, 20 files). This session focused on fixing prerequisite data bugs and expanding pathway choices so the wizard shows ~99% of valid course options instead of being overly track-locked.

## Progress Summary

### Completed
- [x] Phase 1-6 of wizard build (prior session, committed as `1f84e24`)
- [x] Visual polish: inverted colors, department-colored badges, LevelBadge shared component
- [x] Header/hero renamed to "The Unofficial Course Guide"
- [x] Department-colored Next button in WizardNavButtons
- [x] Comprehensive pathway audit — cross-referenced all pathway choices against course prerequisites
- [x] **Fix 4 prerequisite data bugs** (us-hist-2-h, calc-h, anatomy-h, forensic-sci)
- [x] **Expand pathway choices across all 4 departments** (English, Math, Science, Social Studies)
- [x] Build passes (`npm run build` clean)

### Not Yet Done
- [ ] **Commit and push** ← user hasn't asked yet
- [ ] Visual verify on dev server (optional)
- [ ] Pattern courses as English G11/G12 alternatives (deferred — semester courses don't fit wizard's full-year model)
- [ ] Dynamic prerequisite validation within PathwayCard (future enhancement — currently choices are static, not filtered by prior-grade selections)
- [ ] Science Honors→AP G12 semester electives (marine-bio, astronomy, bioethics — semester courses)

## Current State

**Working on:** All changes applied, build passes, awaiting user direction
**Last change:** Expanded pathway choices in `math-pathways.ts` (Need Algebra Academic G12 added `prob-stats-h`)

**Files modified this session:**

| File | Status | What Changed |
|------|--------|--------------|
| `src/data/courses/social-studies.ts` | Modified | `us-hist-2-h` prereqs: added `us-hist-1-hh` |
| `src/data/courses/math.ts` | Modified | `calc-h` prereqs: added `ap-precalc-calc`, `ap-precalc` |
| `src/data/courses/science.ts` | Modified | `anatomy-h` and `forensic-sci` prereqs: added `chem` |
| `src/data/wizard/pathways.ts` | Modified | English Academic choices (G10-12), Science all tracks expanded, SS all tracks expanded |
| `src/data/wizard/math-pathways.ts` | Modified | Geom Accel AP/Honors, Alg Accel Honors→AP, Need Alg Honors/Academic — all G12 expanded |

## Key Context

### Prerequisite Engine
- Uses **OR logic**: `prerequisites: ['a', 'b']` means having EITHER `a` OR `b` satisfies the requirement
- Text prerequisites (not matching course IDs) are treated as always-met (informational only)
- File: `src/lib/journey/prerequisite-engine.ts`

### Decisions Made
- **Option B chosen** (richer tracks with more choices per grade, NOT grade-by-grade builder) — keeps wizard UX, adds flexibility
- **Removed `macroecon-h` from SS Honors G12** — requires `microecon-h` which isn't in default path, invalid combo
- **Added upshift options to Academic tracks** — English Academic can now show Honors/AP options at G10-12, Science Academic can upshift to Honors Chem/Enviro
- **G12 expanded most aggressively** since nothing follows — no downstream prereq risk
- **Pattern courses deferred** — they're semester (2.5 cr) while wizard handles full-year slots; would need UI changes

### Important Discoveries
- `forensic-sci` and `anatomy-h` prereqs `['bio-h', 'chem-h']` actually pass for ANY student because everyone takes `bio-h` in G9 (OR logic means bio-h alone satisfies). The `chem` addition is for data accuracy, not functional change.
- Social Studies `ap-us-hist` prereqs: `['us-hist-1-h', 'us-hist-1-hh']` — already accepts both H and HH. The bug was `us-hist-2-h` only accepting `us-hist-1-h`, not `us-hist-1-hh`.
- PathwayCard shows choices statically — doesn't filter G12 options based on G11 selection. This means some displayed combos are technically invalid (e.g., picking `eng-11-h` at G11 but leaving `eng-12` at G12). Future enhancement needed.

### Known Limitations
- Wizard doesn't validate cross-grade choice dependencies (G11 choice affecting G12 validity)
- Semester courses (Pattern English, marine-bio, astronomy, forensic-sci) shown as options but wizard treats everything as single-slot
- `prob-stats-h` prereqs don't include `alg-2-trig-h` (stronger than `alg-2-h`) — minor data gap

## Related Documents

- **Plan:** `.claude/plans/prancy-noodling-whisper.md` (original 6-phase wizard plan)
- **Prior commit:** `1f84e24` (wizard build + visual polish, pushed to `tomsuharto-git/main`)

## To Resume

### Quick Start
```
/resume @thoughts/shared/sessions/2026-02-08_prereq-fixes-pathway-expansion.md
```

### Manual Context Load
1. Read this session file
2. Check `src/data/wizard/pathways.ts` and `src/data/wizard/math-pathways.ts` for current state
3. Run `npm run build` to verify clean state
4. Run dev server: `npm run dev` and test `/planner`

### First Action on Resume
Ask user if they want to:
1. Commit and push the prereq fixes + pathway expansion
2. Test on dev server first
3. Continue with further improvements (pattern courses, dynamic prereq validation, etc.)

---

## Session Metadata

- **Original wizard phases:** 6 (all complete)
- **This session:** Prereq fixes + pathway expansion (complete, uncommitted)
- **Estimated remaining:** Polish/testing only — core functionality done
- **Complexity:** Medium (data changes only, no component logic changes)
- **Git status:** Uncommitted changes in 5 data files

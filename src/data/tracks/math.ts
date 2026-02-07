import { Track } from '../types';

// Matches the HIGH SCHOOL MATH COURSE SEQUENCE chart from page 56 of the
// 2026-2027 Program of Studies. Structure: 11 pathway rows grouped by 4
// Middle School entry points. Each cell lists the course options available
// at that grade level on that pathway.

export const mathTrack: Track = {
  id: 'math',
  name: 'Mathematics',
  department: 'math',
  description: 'Course pathways from middle school through AP Calculus BC and Calculus III. Multiple entry points based on middle school preparation.',
  columns: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
  rowGroups: [
    { label: 'Algebra B Accel\n(*Opt Geo. Accel.)', startRow: 0, endRow: 3 },
    { label: 'Algebra B Accel.\nor Algebra B', startRow: 4, endRow: 7 },
    { label: 'Algebra B', startRow: 8, endRow: 9 },
    { label: 'Math Foundation', startRow: 10, endRow: 10 },
  ],
  nodes: [
    // === Group 1: Algebra B Accel (*Opt Geo. Accel.) ===

    // Row 0: Most accelerated pathway
    { courseId: 'alg-2-trig-h', row: 0, col: 0 },
    { courseId: 'ap-precalc-calc', row: 0, col: 1 },
    { courseId: 'ap-calc-bc', row: 0, col: 2 },
    { courseId: 'ap-calc-ab', row: 0, col: 2 },
    { courseId: 'calc-3-hh', row: 0, col: 3 },
    { courseId: 'ap-stats', row: 0, col: 3 },

    // Row 1: AP Precalculus branch
    { courseId: 'ap-precalc', row: 1, col: 1 },
    { courseId: 'ap-calc-ab', row: 1, col: 2 },
    { courseId: 'calc-h', row: 1, col: 2 },
    { courseId: 'ap-calc-bc', row: 1, col: 3 },
    { courseId: 'ap-stats', row: 1, col: 3 },

    // Row 2: Algebra 2 H (*Opt. Geo. H) branch
    { courseId: 'alg-2-h', row: 2, col: 0, label: 'Algebra 2 H (*Opt. Geo. H)' },
    { courseId: 'precalc-h', row: 2, col: 1 },
    { courseId: 'ap-precalc', row: 2, col: 1 },
    { courseId: 'ap-calc-ab', row: 2, col: 2 },
    { courseId: 'ap-calc-bc', row: 2, col: 3 },
    { courseId: 'ap-stats', row: 2, col: 3 },

    // Row 3: Calc H branch (from row 2)
    { courseId: 'calc-h', row: 3, col: 2 },
    { courseId: 'ap-stats', row: 3, col: 3 },

    // === Group 2: Algebra B Accel. or Algebra B ===

    // Row 4: Geometry H → Alg II/Trig H → AP Precalc/Calc
    { courseId: 'geom-h', row: 4, col: 0 },
    { courseId: 'alg-2-trig-h', row: 4, col: 1 },
    { courseId: 'ap-precalc-calc', row: 4, col: 2 },
    { courseId: 'ap-calc-bc', row: 4, col: 3 },
    { courseId: 'ap-calc-ab', row: 4, col: 3 },
    { courseId: 'ap-stats', row: 4, col: 3 },

    // Row 5: Alg II H / Precalc H branch
    { courseId: 'alg-2-h', row: 5, col: 1 },
    { courseId: 'precalc-h', row: 5, col: 1 },
    { courseId: 'ap-precalc', row: 5, col: 2 },
    { courseId: 'precalc-h', row: 5, col: 2 },
    { courseId: 'calc-h', row: 5, col: 3 },
    { courseId: 'ap-calc-ab', row: 5, col: 3 },
    { courseId: 'prob-stats-h', row: 5, col: 3 },
    { courseId: 'ap-stats', row: 5, col: 3 },

    // Row 6: Geometry → Algebra II H
    { courseId: 'geom', row: 6, col: 0 },
    { courseId: 'alg-2-h', row: 6, col: 1 },
    { courseId: 'ap-precalc', row: 6, col: 2 },
    { courseId: 'precalc-h', row: 6, col: 2 },
    { courseId: 'ap-calc-ab', row: 6, col: 3 },
    { courseId: 'calc-h', row: 6, col: 3 },
    { courseId: 'prob-stats-h', row: 6, col: 3 },
    { courseId: 'prob-stats', row: 6, col: 3 },
    { courseId: 'ap-stats', row: 6, col: 3 },

    // Row 7: Algebra II → Precalculus
    { courseId: 'alg-2', row: 7, col: 1 },
    { courseId: 'precalc', row: 7, col: 2 },
    { courseId: 'calc-h', row: 7, col: 3 },
    { courseId: 'prob-stats-h', row: 7, col: 3 },
    { courseId: 'prob-stats', row: 7, col: 3 },

    // === Group 3: Algebra B ===

    // Row 8: Algebra I H → Geometry H → Algebra II H
    { courseId: 'alg-1-h', row: 8, col: 0 },
    { courseId: 'geom-h', row: 8, col: 1 },
    { courseId: 'alg-2-h', row: 8, col: 2 },
    { courseId: 'precalc-h', row: 8, col: 3 },
    { courseId: 'prob-stats-h', row: 8, col: 3, label: 'Probability & Statistics H' },
    { courseId: 'ap-precalc', row: 8, col: 3 },

    // Row 9: Algebra I → Geometry → Algebra II
    { courseId: 'alg-1', row: 9, col: 0 },
    { courseId: 'geom', row: 9, col: 1 },
    { courseId: 'alg-2', row: 9, col: 2 },
    { courseId: 'precalc', row: 9, col: 3 },
    { courseId: 'prob-stats', row: 9, col: 3, label: 'Probability & Statistics' },

    // === Group 4: Math Foundation ===

    // Row 10: Resource / ICS pathway
    { courseId: 'alg-1-r', row: 10, col: 0, label: 'Algebra I RCS' },
    { courseId: 'alg-1-ics', row: 10, col: 0, label: 'Algebra I ICS' },
    { courseId: 'geom-r', row: 10, col: 1, label: 'Geometry RCS' },
    { courseId: 'geom-ics', row: 10, col: 1, label: 'Geometry ICS' },
    { courseId: 'alg-2-r', row: 10, col: 2, label: 'Algebra II RCS' },
    { courseId: 'alg-2-ics', row: 10, col: 2, label: 'Algebra II ICS' },
    { courseId: 'applied-math', row: 10, col: 3, label: 'Applied Math RCS' },
    { courseId: 'precalc-ics', row: 10, col: 3, label: 'Precalculus ICS' },
    { courseId: 'prob-stats-ics', row: 10, col: 3, label: 'Prob & Stats ICS' },
  ],
  edges: [], // Pathway table format — progression shown by row structure, not edges
};

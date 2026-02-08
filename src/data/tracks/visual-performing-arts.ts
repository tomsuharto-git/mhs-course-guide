import { Track } from '../types';

// VPA doesn't follow a grade-by-grade structure like core academics.
// Instead, courses cluster into disciplines with their own internal
// progressions. Columns represent skill level, row groups represent
// disciplines.

export const vpaTrack: Track = {
  id: 'visual-performing-arts',
  name: 'Visual & Performing Arts',
  department: 'visual-performing-arts',
  description: 'Six disciplines — studio art, digital design, theater, dance, music, and yearbook — each with their own progression from entry-level to advanced and AP.',
  columns: ['Entry', 'Intermediate', 'Advanced', 'AP / Capstone'],
  rowGroupHeader: 'Discipline',
  rowGroups: [
    { label: 'Studio Art', startRow: 0, endRow: 1 },
    { label: 'Digital & Design', startRow: 2, endRow: 2 },
    { label: 'Theater & Film', startRow: 3, endRow: 3 },
    { label: 'Dance', startRow: 4, endRow: 4 },
    { label: 'Music', startRow: 5, endRow: 6 },
    { label: 'Yearbook', startRow: 7, endRow: 7 },
  ],
  nodes: [
    // === Row 0: Studio Art — core progression ===
    { courseId: 'art-foundations', row: 0, col: 0 },
    { courseId: 'art-1-h', row: 0, col: 1 },
    { courseId: 'art-2-h', row: 0, col: 2 },
    { courseId: 'ap-art-design', row: 0, col: 3 },
    { courseId: 'senior-portfolio-h', row: 0, col: 3 },

    // === Row 1: Studio Art — electives with progression ===
    { courseId: 'drawing', row: 1, col: 0 },
    { courseId: 'painting-1', row: 1, col: 0 },
    { courseId: 'ceramics-1', row: 1, col: 0 },
    { courseId: 'fibers-textile', row: 1, col: 0 },
    { courseId: 'painting-2', row: 1, col: 1 },
    { courseId: 'ceramics-2-h', row: 1, col: 1 },
    { courseId: 'sculpture', row: 1, col: 1 },

    // === Row 2: Digital & Design — mostly standalone + AP Art History ===
    { courseId: 'digital-design-imaging', row: 2, col: 0 },
    { courseId: 'graphic-design', row: 2, col: 0 },
    { courseId: 'web-design', row: 2, col: 0 },
    { courseId: 'photography', row: 2, col: 0 },
    { courseId: 'creative-coding', row: 2, col: 0 },
    { courseId: 'cad', row: 2, col: 0 },
    { courseId: 'ap-art-history', row: 2, col: 3 },

    // === Row 3: Theater & Film ===
    { courseId: 'acting-1', row: 3, col: 0 },
    { courseId: 'tech-theater', row: 3, col: 0 },
    { courseId: 'film-making', row: 3, col: 0 },
    { courseId: 'acting-2', row: 3, col: 1 },
    { courseId: 'acting-3', row: 3, col: 2 },

    // === Row 4: Dance ===
    { courseId: 'intro-dance', row: 4, col: 0 },
    { courseId: 'intermediate-dance', row: 4, col: 1 },
    { courseId: 'advanced-dance', row: 4, col: 2 },

    // === Row 5: Music Theory ===
    { courseId: 'music-appreciation', row: 5, col: 0 },
    { courseId: 'music-theory-1-h', row: 5, col: 1 },
    { courseId: 'ap-music-theory', row: 5, col: 2 },
    { courseId: 'music-theory-2-hh', row: 5, col: 3 },

    // === Row 6: Ensembles ===
    { courseId: 'intro-band', row: 6, col: 0 },
    { courseId: 'mixed-chorus', row: 6, col: 0 },
    { courseId: 'chorus', row: 6, col: 0 },
    { courseId: 'band-h', row: 6, col: 1 },
    { courseId: 'orchestra-h', row: 6, col: 1 },
    { courseId: 'choir-h', row: 6, col: 1 },
    { courseId: 'madrigal-choir-h', row: 6, col: 2 },

    // === Row 7: Yearbook ===
    { courseId: 'yearbook-1', row: 7, col: 0 },
    { courseId: 'yearbook-2', row: 7, col: 1 },
    { courseId: 'yearbook-3', row: 7, col: 2 },
  ],
  edges: [],
};

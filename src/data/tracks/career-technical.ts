import { Track } from '../types';

// CTE courses cluster into discipline areas, each with their own
// progression from intro to advanced/capstone. Columns represent
// skill level, row groups represent disciplines.

export const careerTechnicalTrack: Track = {
  id: 'career-technical',
  name: 'Career & Technical Education',
  department: 'career-technical',
  description: 'Seven disciplines — business, computer science, architecture, robotics, carpentry, culinary arts, and automotive — each with hands-on, project-based progressions.',
  columns: ['Entry', 'Intermediate', 'Advanced', 'Capstone'],
  rowGroupHeader: 'Discipline',
  rowGroups: [
    { label: 'Business &\nMarketing', startRow: 0, endRow: 1 },
    { label: 'Computer\nScience', startRow: 2, endRow: 2 },
    { label: 'Architecture\n& Design', startRow: 3, endRow: 3 },
    { label: 'Robotics', startRow: 4, endRow: 4 },
    { label: 'Carpentry', startRow: 5, endRow: 5 },
    { label: 'Culinary &\nTrades', startRow: 6, endRow: 7 },
  ],
  nodes: [
    // === Row 0: Business — standalone electives ===
    { courseId: 'intro-business', row: 0, col: 0 },
    { courseId: 'intro-marketing', row: 0, col: 0 },
    { courseId: 'intro-advertising', row: 0, col: 0 },
    { courseId: 'entrepreneurial-study', row: 0, col: 0 },
    { courseId: 'finance', row: 0, col: 0 },

    // === Row 1: Journalism — progression ===
    { courseId: 'journalism-1', row: 1, col: 0 },
    { courseId: 'journalism-2', row: 1, col: 1 },

    // === Row 2: Computer Science ===
    { courseId: 'cs-1-h', row: 2, col: 0 },
    { courseId: 'ap-cs-principles', row: 2, col: 0 },
    { courseId: 'ap-cs-a', row: 2, col: 2 },

    // === Row 3: Architecture & Design ===
    { courseId: 'intro-architecture', row: 3, col: 0 },
    { courseId: 'arch-design-1', row: 3, col: 1 },
    { courseId: 'arch-design-1-h', row: 3, col: 1 },
    { courseId: 'arch-design-2-h', row: 3, col: 2 },
    { courseId: 'arch-design-3-h', row: 3, col: 3 },

    // === Row 4: Robotics ===
    { courseId: 'robotics-1', row: 4, col: 0 },
    { courseId: 'robotics-2-h', row: 4, col: 1 },
    { courseId: 'robotics-3-h', row: 4, col: 2 },
    { courseId: 'robotics-4-h', row: 4, col: 3 },

    // === Row 5: Carpentry ===
    { courseId: 'carpentry-1a', row: 5, col: 0 },
    { courseId: 'carpentry-1b', row: 5, col: 1 },
    { courseId: 'carpentry-2a', row: 5, col: 2 },
    { courseId: 'carpentry-2b', row: 5, col: 3 },

    // === Row 6: Culinary ===
    { courseId: 'culinary-1', row: 6, col: 0 },
    { courseId: 'culinary-2', row: 6, col: 1 },

    // === Row 7: Automotive & Power Tech ===
    { courseId: 'automotive-1', row: 7, col: 0 },
    { courseId: 'power-technology', row: 7, col: 0 },
    { courseId: 'automotive-2', row: 7, col: 1 },
  ],
  edges: [],
};

export type Department =
  | 'english'
  | 'math'
  | 'science'
  | 'social-studies'
  | 'world-languages'
  | 'visual-performing-arts'
  | 'health-pe'
  | 'career-technical'
  | 'special-education';

export type CourseLevel = 'academic' | 'honors' | 'ap' | 'high-honors' | 'resource';

export type Duration = 'full-year' | 'semester';

export interface Course {
  id: string;
  code: string;
  name: string;
  department: Department;
  level: CourseLevel;
  grades: number[];
  credits: number;
  duration: Duration;
  description: string;
  prerequisites: string[];
  tags: string[];
  fulfills: string[];
  contractHonors?: boolean;
  notes?: string;
}

export interface TrackNode {
  courseId: string;
  row: number; // 0=grade 9, 1=grade 10, 2=grade 11, 3=grade 12
  col: number; // 0=leftmost
  label?: string; // override display name
}

export interface TrackEdge {
  from: string; // courseId
  to: string; // courseId
  label?: string;
}

export interface TrackRowGroup {
  label: string;
  startRow: number;
  endRow: number;
}

export interface Track {
  id: string;
  name: string;
  department: Department;
  description: string;
  nodes: TrackNode[];
  edges: TrackEdge[];
  columns: string[]; // column headers like "Academic", "Honors", "AP"
  rowGroups?: TrackRowGroup[]; // pathway-based tracks: groups rows by entry point (e.g. Middle School course)
  rowGroupHeader?: string; // left column header for pathway tables (default: "Middle School")
}

export interface GraduationRequirement {
  area: string;
  credits: number;
  notes: string;
}

export const DEPARTMENT_META: Record<Department, { label: string; color: string }> = {
  english: { label: 'English', color: '#254093' },
  math: { label: 'Mathematics', color: '#1e6b3a' },
  science: { label: 'Science', color: '#8b5e3c' },
  'social-studies': { label: 'Social Studies', color: '#7c3aed' },
  'world-languages': { label: 'World Languages', color: '#b45309' },
  'visual-performing-arts': { label: 'Visual & Performing Arts', color: '#be185d' },
  'health-pe': { label: 'Health & PE', color: '#059669' },
  'career-technical': { label: 'Career & Technical Ed', color: '#4f46e5' },
  'special-education': { label: 'Special Education', color: '#64748b' },
};

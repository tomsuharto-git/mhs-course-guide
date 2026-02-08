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

export type Duration = 'full-year' | 'semester' | 'quarter';

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
  prerequisiteNote?: string; // human-readable prereq text when course IDs alone don't capture the full requirement
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

export const DEPARTMENT_META: Record<Department, { label: string; color: string; overview?: string }> = {
  english: {
    label: 'English',
    color: '#7c3aed',
    overview: 'The English program builds reading, writing, and analytical skills across four years. Students study a wide range of literature\u2014classical to contemporary, American and global\u2014alongside nonfiction and seminal documents. Every course emphasizes the writing process, from drafting through revision, with research and critical essays at all levels. Creative writing, oral interpretation, and collaborative discussion are woven throughout. Students are encouraged to enter local and national writing competitions. All courses align with the New Jersey Student Learning Standards for English Language Arts.',
  },
  math: {
    label: 'Mathematics',
    color: '#b91c1c',
    overview: 'The Mathematics Department offers courses from Algebra through AP Calculus and AP Statistics, including AP Computer Science. Honors courses provide a fast-paced atmosphere with minimal review, preparing students for Advanced Placement exams. Non-honors classes offer college-preparatory math in a cooperative setting with PSAT and SAT preparation. Supplemental math classes provide additional instruction where needed. Students are encouraged to take math every year to fulfill graduation requirements and prepare for college. Note: Algebra I and Geometry taken in middle school count toward placement but not high school credit.',
  },
  science: {
    label: 'Science',
    color: '#059669',
    overview: 'The Science Department offers courses in Biology, Geoscience, Environmental Science, Chemistry, and Physics. The sequence begins with Biology Honors in 9th grade, followed by Geoscience in 10th grade. Juniors and seniors choose from a wide range of courses including AP Biology, AP Chemistry, AP Environmental Science, and multiple levels of AP Physics. Semester electives such as Marine Biology, Forensic Science, Astronomy, and Bioethical Issues are available. Science and math course choices should be planned together, as many courses have math prerequisites. Three years of science are required for graduation.',
  },
  'social-studies': {
    label: 'Social Studies',
    color: '#ea580c',
    overview: 'The Social Studies Department emphasizes project-based learning, authentic assessments, interdisciplinary instruction, and technology. Students engage in problem solving, decision making, and critical analysis of complex issues. The department is also the foundation for nationally ranked extracurricular programs including Model UN, Mock Trial, and Fed Challenge. Three years of history are required: one year of Global Studies and two years of American History. Senior-year electives include African American History, Cultural Pluralism, Women of the World, AP Modern European, AP World History, and Holocaust, Genocide and Modern Humanity.',
  },
  'world-languages': {
    label: 'World Languages',
    color: '#8b5e3c',
    overview: 'The World Languages Department offers Mandarin, Spanish, French, German, Italian, and Latin at academic, honors, high honors, and AP levels. All courses are full-year and earn 5.0 credits. Students with no prior exposure start at Level I; native speakers are placed at the appropriate proficiency level. Skills in speaking, reading, writing, and listening are stressed, with learning extending beyond the classroom through cultural activities, honor societies, language clubs, and interscholastic competitions. Seniors are eligible for the New Jersey Seal of Biliteracy.',
  },
  'visual-performing-arts': {
    label: 'Visual & Performing Arts',
    color: '#e91e8c',
    overview: 'The School of Visual and Performing Arts offers courses in Art, Theater, Music, and Dance. The department combines a curricular component\u2014studio art, drawing, painting, ceramics, photography, music theory, and performance courses\u2014with a co-curricular program of exhibitions, concerts, recitals, plays, musicals, and dance showcases. All courses are open to every student as electives. The program develops creative thinking, self-discipline, collaboration, and aesthetic awareness across all four disciplines.',
  },
  'health-pe': {
    label: 'Health & PE',
    color: '#1e6b3a',
    overview: 'The Health, Physical Education & Wellness program runs every quarter across all four years (1.25 credits per quarter). Students experience team sports, aerobic and anaerobic movement, rhythm, individual and dual sports, fitness and conditioning, and exercise prescription. Health courses cover first aid and safety, substance use, sexual health, nutrition, stress management, and decision-making. All dance classes also satisfy the PE requirement. Courses align with the New Jersey Core Curriculum Content Standards for Comprehensive Health and Physical Education.',
  },
  'career-technical': {
    label: 'Career & Technical Ed',
    color: '#4f46e5',
    overview: 'Career & Technical Education offers hands-on, project-based courses across seven disciplines: Business & Marketing, Computer Science, Architecture & Design, Robotics, Carpentry, Culinary Arts, and Automotive Technology. Each discipline provides a progression from introductory through advanced or capstone coursework. CTE courses prepare students for both workforce entry and further education, with many satisfying the 21st Century Life & Careers graduation requirement.',
  },
  'special-education': { label: 'Special Education', color: '#eab308' },
};

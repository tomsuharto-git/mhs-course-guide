import { Department } from './types';

/** Condensed department intro text from the 2026-2027 Program of Studies. */
export const DEPARTMENT_INTROS: Partial<Record<Department, string>> = {
  english:
    'The English curriculum centers on literacy, analytical skills, and communication through literature, informational text, writing, and language study. Courses span multicultural, historical, and contemporary works across all grade levels. Writing is required in every course and follows MLA style. Students in grades 11\u201312 may choose from a range of semester and full-year elective "Patterns" courses.',

  math:
    'Courses range from Algebra I through Calculus III and AP Statistics. Honors sections offer fast-paced preparation for AP exams; academic sections provide college-prep math in a cooperative setting. Students are encouraged to take math every year. Note: Algebra I and Geometry completed in middle school count toward placement but not high school credit.',

  science:
    'Courses in Biology, Geoscience, Environmental Science, Chemistry, and Physics. The sequence begins with Biology Honors in 9th grade; Geoscience or Chemistry Honors is the typical 10th-grade selection. Juniors and seniors can choose from AP courses and semester electives like Forensic Science, Astronomy, and Marine Biology. Three years of science are required for graduation.',

  'social-studies':
    'The Social Studies Department emphasizes project-based learning, interdisciplinary instruction, and differentiated levels. Three years of history are required: one year of Global Studies and two years of US History (through US I/II, CGI, or CSJ). Electives include African American History, Economics, AP World History, and AP Modern European History. The department also supports Model UN, Mock Trial, and Fed Challenge.',

  'world-languages':
    'French, German, Italian, Latin, Mandarin Chinese, and Spanish are offered at academic, honors, high-honors, and AP levels. All courses are full-year and open to grades 9\u201312. Students with no prior experience start at Level I; native speakers may be placed at an appropriate level. Seniors who attain Intermediate-Mid proficiency are eligible for the New Jersey Seal of Biliteracy.',

  'visual-performing-arts':
    'The School of Visual and Performing Arts offers courses in Art, Theater, Music, and Dance. All courses are available as electives to every MHS student. The department has both a curricular component (studio and performance courses for credit) and a co-curricular component (exhibitions, concerts, recitals, and productions).',

  'health-pe':
    'Physical education is required every year (1.25 credits per quarter). Activities rotate through team sports, aerobic and anaerobic movement, fitness, and individual/dual sports. Health courses are grade-specific and cover topics from first aid to decision-making. All dance classes can also satisfy the PE requirement.',

  'career-technical':
    'CTE courses develop skills in marketing, advertising, journalism, business, computer science, culinary arts, carpentry, automotive technology, architecture, and power technology. The curriculum emphasizes team cooperation, critical thinking, problem-solving, and hands-on learning. New Jersey Core Standards in Career Education are incorporated in all courses.',
};

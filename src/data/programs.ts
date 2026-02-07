export interface SpecialProgram {
  id: string;
  name: string;
  shortName: string;
  type: 'slc' | 'dual-enrollment' | 'internship' | 'research';
  grades: number[];
  credits?: number;
  creditsNote?: string;
  prerequisite?: string;
  description: string;
  highlights?: string[];
  contact?: string;
  fulfills?: string[];
}

export const specialPrograms: SpecialProgram[] = [
  // ============================================================
  // SMALL LEARNING COMMUNITIES
  // ============================================================
  {
    id: 'ninth-grade-academy',
    name: 'Ninth Grade Academy',
    shortName: 'NGA',
    type: 'slc',
    grades: [9],
    description:
      'All ninth-grade students at Montclair High School are members of the Ninth Grade Academy. Located primarily in the George Inness Annex, the program serves as a bridge to a successful high school, college, and career experience. It provides a safe and supportive environment where students can make the significant academic, emotional, and social transitions associated with their first year of high school. With a small learning environment, it offers an intensive academic experience coupled with a level of personalized support and encouragement that ensures students are on track for success.',
    highlights: [
      'Dedicated team: assistant principal, school counselors, student assistance counselor, and nurse',
      'Located in the George Inness Annex',
      'Smaller setting for personalized support',
    ],
  },
  {
    id: 'cgi',
    name: 'The Civics & Government Institute Small Learning Academy',
    shortName: 'CGI',
    type: 'slc',
    grades: [10, 11, 12],
    credits: 15,
    creditsNote: 'Per year (English, History, and elective components)',
    prerequisite: 'CGI Statement of Interest',
    description:
      'Founded in 1997, the Civics & Government Institute (CGI) is a small learning community within Montclair High School, which focuses on the study of citizenship, government, and social issues. Students who choose to join the Institute in their sophomore year participate in student-run government simulations, debates, elective courses, international relations, community service partnerships, US History, and British and American Literature. This constitutes three periods of the students\' day, while they leave the Institute for the remainder of their academic requirements. Throughout their three years in the Institute, students are given many opportunities to develop leadership skills.',
    highlights: [
      'Interdisciplinary: weaves history and English curriculum together thematically',
      'Sophomore themes: Social Movements & Reform, War & Conflict',
      'Junior themes: Economic Theory, Literature & History, Politics and Aesthetics',
      'Senior year: "We The People" state/national competition, Humanities and Philosophy in English, Government & Politics',
      'Student-run Congress with student-written Constitution',
      'Committee service learning projects',
      'Public Demonstrations of Learning each year',
      'All history courses offered at AP or Honors levels',
    ],
    contact: 'Mr. Reginald Clark, 973-509-4001',
    fulfills: ['English', 'Social Studies'],
  },
  {
    id: 'csj',
    name: 'The Center for Social Justice Small Learning Community',
    shortName: 'CSJ',
    type: 'slc',
    grades: [10, 11, 12],
    credits: 15,
    creditsNote: 'Per year: 5 English + 5 History + 5 Honors Social Justice Research Inquiry and Action Lab',
    prerequisite: 'Review of CSJ Interest Form',
    description:
      'The Center for Social Justice is a three-year English and History interdisciplinary program with a strong emphasis on the impact that social movements have had on the development of history, humanities, literature, and the arts. CSJ is based upon the Small Learning Community (SLC) model where students build close working relationships with staff and fellow students. Students will actively engage in a curriculum that focuses on the theme of social justice and use their knowledge to promote issues of social activism within their own community.',
    highlights: [
      'English and History classes on alternating days in a two period block',
      'Research, Inquiry and Action Lab: introduction to issues of social diversity and social justice',
      'Public Display of Learning at end of each unit',
      '30 hours of community service required each year',
      'After 3 years fulfills: 21st Century Skills, Financial Literacy graduation requirements',
    ],
    contact: 'CSJ Office: 973-509-4100 x5529, Lead Teachers: Laura Heyman and Jaime Walker',
    fulfills: ['English', 'Social Studies', '21st Century Skills', 'Financial Literacy'],
  },

  // ============================================================
  // DUAL ENROLLMENT PROGRAMS
  // ============================================================
  {
    id: 'made',
    name: 'Montclair Academic Dual Enrollment Program',
    shortName: 'MADE',
    type: 'dual-enrollment',
    grades: [12],
    credits: 20,
    creditsNote: '20 MHS credits and 12 MSU credits concurrently',
    description:
      'A dual enrollment program between Montclair High School and Montclair State University. High school seniors have the opportunity to take courses across nearly all areas of campus, including Computer Science, Math, English Writing, Psychology, Anthropology, Sociology, Political Science, German, Music, and Earth and Environmental Studies.',
    prerequisite: 'Apply through the School Counseling Office in junior year',
  },
  {
    id: 'eccde',
    name: 'Essex County College Dual Enrollment Program at Essex County College',
    shortName: 'ECCDE',
    type: 'dual-enrollment',
    grades: [12],
    credits: 20,
    creditsNote: '20 MHS credits and 12 Essex County College credits concurrently',
    description:
      'A dual enrollment program between Montclair High School and Essex County College. High school seniors have the opportunity to take courses during the school day at Essex County College, including Computer Science, Math, English Writing, Psychology, Anthropology, Sociology, Political Science, German, Music, and Earth and Environmental Studies.',
    prerequisite: 'Apply through the School Counseling Office in junior year',
  },
  {
    id: 'eccde-mhs',
    name: 'Essex County College Dual Enrollment Afterschool Program at MHS',
    shortName: 'ECCDE-MHS',
    type: 'dual-enrollment',
    grades: [11, 12],
    credits: 35,
    creditsNote: '35 MHS credits and up to 9 Essex County College credits concurrently',
    description:
      'A dual enrollment program between Montclair High School and Essex County College. High school juniors and seniors have the opportunity to take courses after school at Montclair High School. Essex County College courses are selected by MHS staff based on collective student interest. Choices span nearly all areas of campus, including Computer Science, Math, English Writing, Psychology, Anthropology, Sociology, Political Science, German, Music, and Earth and Environmental Studies. Also includes dual enrollment opportunities with Kean University.',
    prerequisite: 'Apply through the School Counseling Office in junior or senior year',
  },

  // ============================================================
  // INTERNSHIP & RESEARCH PROGRAMS
  // ============================================================
  {
    id: 'cip',
    name: 'Career Internship Program',
    shortName: 'C.I.P.',
    type: 'internship',
    grades: [12],
    description:
      'Offered to all Seniors in good academic and behavior standing by offering real-world experience through internships with organizations within a 50-mile radius of Montclair High School. Students will receive a passing score at the end of their senior year based on completion of their internship.',
  },
  {
    id: 'whip',
    name: 'Weston Health Internship Program',
    shortName: 'W.H.I.P.',
    type: 'internship',
    grades: [12],
    description:
      'The goal is to provide motivated Rising Seniors an opportunity to intern and be exposed to a variety of healthcare environments and professions. This is a non-tuition-based program. The areas of observation will include: Radiology, Pharmacy, Respiratory, Dental Clinic, Physical Therapy, Nursing, ICU, Emergency Dept. and Administration. There will also be an opportunity to shadow a physician for 1 week.',
  },
  {
    id: 'weston-science',
    name: 'Weston Science Scholars',
    shortName: 'WSS',
    type: 'research',
    grades: [9, 10, 11],
    credits: 7.5,
    creditsNote: 'Pass/Fail, or as a science elective course. 5 week summer research cohort plus spring and fall auxiliary activities.',
    prerequisite: 'Formal written application, math and science teacher recommendations, essay, and interview. Applications available in January.',
    description:
      'Developed for the academically talented and high achieving students with significant potential in science, mathematics and related fields. Students are offered hands-on participation in a laboratory under the guidance of Montclair State University faculty scientists and mathematicians. The scholars will engage in current and intensive scientific research over the course of a five-week period in the summer. In addition to original research, scholars study a mathematics component relative and pertinent to their research. Scholars will be required to complete 20 hours of community service approved by the directors.',
    highlights: [
      'Hands-on laboratory research at Montclair State University',
      'Mini laboratory activities and workshops',
      'Spring and fall field experiences',
      'Present findings at 2 evenings of colloquia',
      '20 hours of community service required',
    ],
  },
];

import { Course } from '../types';

export const scienceCourses: Course[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // BIOLOGICAL SCIENCES
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'ap-bio',
    code: '6001AP',
    name: 'AP Biology',
    department: 'science',
    level: 'ap',
    grades: [11, 12],
    credits: 6,
    duration: 'full-year',
    description:
      'College-level biology emphasizing inquiry skills, problem solving, and data interpretation. Topics include biological chemistry, cell structure and function, energy transfers, photosynthesis, glycolysis, the Krebs Cycle, DNA structure and replication, genetics, protein synthesis, biotechnology (electrophoresis and gene transfer), physiology, evolution, plant and animal diversity, ecology, and embryonic and therapeutic cloning. Extensive lab work and formal laboratory reports are required. This is a college-level course and not a review of previously taken high school courses. Students may earn college credit or placement through the AP exam.',
    prerequisites: ['bio-h', 'chem-h'],
    tags: ['core', 'ap'],
    fulfills: ['Science'],
    notes:
      'Requires B average or above in both Biology Honors and Chemistry Honors.',
  },
  {
    id: 'bio-h',
    code: '6001H',
    name: 'Biology H',
    department: 'science',
    level: 'honors',
    grades: [9],
    credits: 5,
    duration: 'full-year',
    description:
      'The foundational science course for all 9th graders at MHS. Students explore biological sciences through a critical thinking format, designing and conducting experiments and communicating findings using charts, graphs, and diagrams. Topics include cell structure and function, biochemistry, plant energy conversion, genetics and inheritance, genetic disorders, evolution and natural selection, classification of living organisms, life cycles, microbiology (bacteria and viruses), fossil evidence, and ecological feedback loops. Classes meet five periods per week and qualify as a laboratory science course.',
    prerequisites: [],
    tags: ['core'],
    fulfills: ['Science', 'Biology'],
  },
  {
    id: 'bio-r',
    code: '86001',
    name: 'Biology',
    department: 'science',
    level: 'resource',
    grades: [9],
    credits: 5,
    duration: 'full-year',
    description:
      'Resource center replacement class taught in the resource center program. IEP goals and objectives are addressed throughout the year. A full-year lab course that explores everyday applications of biology with an emphasis on core concepts. Through laboratory activities, cooperative learning, and projects, students explore interactions between organisms and their environment, classification of living things, human anatomy, and life processes. Students also research career paths in biological sciences.',
    prerequisites: [
      'Successful completion of 8th grade Science and recommendation by the Child Study Team',
    ],
    tags: ['core', 'resource'],
    fulfills: ['Science', 'Biology'],
  },

  // Elective courses — Biological Sciences
  {
    id: 'anatomy-h',
    code: '6006H',
    name: 'Anatomy and Physiology H',
    department: 'science',
    level: 'honors',
    grades: [11, 12],
    credits: 6,
    duration: 'full-year',
    description:
      'Designed for students interested in health care careers and/or the human body. Provides a solid foundation in human anatomy and physiology, focusing on structure-function relationships of molecules, cells, tissues, and organs; homeostasis; interrelationships of organ systems; and pathological/diseased states. A midterm and final are required. Students can opt for High Honors level and earn 4 college credits through the Project Acceleration program at Seton Hall University with a C or higher.',
    prerequisites: ['bio-h', 'chem-h', 'chem'],
    tags: ['elective'],
    fulfills: ['Science'],
    notes:
      'B or better in Biology Honors and Chemistry required. High Honors option available through Seton Hall University for college credit.',
  },
  {
    id: 'marine-bio',
    code: '6105',
    name: 'Marine Biology',
    department: 'science',
    level: 'academic',
    grades: [12],
    credits: 2.5,
    duration: 'semester',
    description:
      'A one-semester elective focusing on the ocean and the organisms that coexist in it. Students study preserved specimens of marine life, covering the history of marine biology, waves, tides and currents, algae, invertebrates, and vertebrates. Complementary sources include videos, articles, and Internet sites. Optional field trips are offered when possible.',
    prerequisites: ['bio-h'],
    tags: ['elective'],
    fulfills: [],
    contractHonors: true,
    notes:
      'Prerequisite: C or above in Honors Biology and Honors Chemistry, OR B or above in Academic Chemistry. This course does NOT satisfy Science requirements for graduation.',
  },
  {
    id: 'bioethics',
    code: '6103',
    name: 'Bioethical Issues',
    department: 'science',
    level: 'academic',
    grades: [12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Students examine decision-making and public policy in Biology, Medicine, and Health Care. Topics include the social applications of biological knowledge and biomedical technology — genetically modified food, animal research, organ transplants, and dilemmas opened by the biotechnology revolution. Students learn to see the connection between decisions and consequences for individuals and society, developing critical thinking skills for meaningful discussions.',
    prerequisites: ['bio-h', 'chem-h'],
    tags: ['elective'],
    fulfills: [],
    contractHonors: true,
    notes:
      'Requires C or above in both Honors Biology and Chemistry. This course does NOT satisfy Science requirements for graduation.',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // GEOSCIENCES
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'geosci-h',
    code: '6002H',
    name: 'Geoscience H',
    department: 'science',
    level: 'honors',
    grades: [10],
    credits: 5,
    duration: 'full-year',
    description:
      'A laboratory science course investigating the Earth from a physical science perspective. Students learn proper laboratory procedures and scientific methodology through a thematic approach, connecting our physical environment to deeper scientific principles. The physical Earth provides tangible topics around which chemistry and physics concepts are learned. Students apply physical science concepts to explain natural systems, organize and analyze data through mathematical equations, and write individual lab reports. Areas of study include Geochemistry, Continental Dynamics, Geomorphology, Climate, and Astrophysics.',
    prerequisites: ['bio-h'],
    tags: ['core'],
    fulfills: ['Science'],
    notes:
      'Math prerequisites also apply: B or better in Honors Biology; A in Algebra I H or A in Geometry Academic or B or better in Honors Geometry and/or C or better in Honors Algebra II.',
  },
  {
    id: 'geosci',
    code: '6002',
    name: 'Geoscience',
    department: 'science',
    level: 'academic',
    grades: [10],
    credits: 5,
    duration: 'full-year',
    description:
      'A laboratory science course investigating the Earth from a physical science perspective. Students are introduced to proper laboratory procedures and scientific methodology through a thematic approach. The physical Earth provides tangible topics around which chemistry and physics concepts are learned. Students apply physical science concepts to explain natural systems, organize and analyze data through mathematical equations, and write individual lab reports. Areas of study include Geochemistry, Continental Dynamics, Geomorphology, Climate, and Astrophysics.',
    prerequisites: ['bio-h'],
    tags: ['core'],
    fulfills: ['Science'],
  },
  {
    id: 'geosci-r',
    code: '86002',
    name: 'Geoscience',
    department: 'science',
    level: 'resource',
    grades: [10, 11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'Resource center replacement class designed to study the earth and its history, and related physics and chemistry topics. IEP goals and objectives are addressed throughout the year. Students explore current scientific concepts and problem solving using the scientific method and inquiry skills. Topics include astronomy, geology, meteorology, and oceanography. Mathematical concepts include scientific notation, metric conversions, graphing, and atomic structure. Participation in lab situations and reporting observations orally and in written form is required.',
    prerequisites: [
      'Successful completion of Biology Replacement and recommendation by the Child Study Team',
    ],
    tags: ['core', 'resource'],
    fulfills: ['Science'],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ENVIRONMENTAL SCIENCE
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'ap-enviro',
    code: '6004AP',
    name: 'AP Environmental Science',
    department: 'science',
    level: 'ap',
    grades: [12],
    credits: 6,
    duration: 'full-year',
    description:
      'Equivalent to a one-semester introductory college course in environmental science. Students engage with scientific principles, concepts, and methodologies to understand interrelationships within the natural world. The course requires identifying and analyzing natural and human-made environmental problems, evaluating relative risks, and examining alternative solutions. Highly quantitative, relying on statistical analyses, dimensional analysis, and percent change. Interdisciplinary, embracing topics from geology, biology, environmental studies, chemistry, and geography. This is a college-level course and does not review topics from courses previously taken.',
    prerequisites: ['chem-h', 'bio-h'],
    tags: ['core', 'ap'],
    fulfills: ['Science'],
    notes:
      'Strict prerequisites: C or better in Honors Chemistry, B or better in Honors Biology, B or better in Honors Algebra II, and B or better in US History II.',
  },
  {
    id: 'enviro-h',
    code: '6004H',
    name: 'Environmental Science H',
    department: 'science',
    level: 'honors',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'A full-year science class that qualifies as laboratory science. Offers a rare opportunity to apply many different sciences to extend knowledge of the world and its inhabitants. Through reading and exploration, students learn how science serves to further understanding of the environment and develop decision-making skills. Disciplines include ecology, geology, oceanography, meteorology, and chemistry. Class structure involves laboratory experimentation, cooperative learning groups, individual projects, group discussions, portfolios/notebooks, and testing. Taught at a more rigorous level than Academic Environmental Science with modified assessments and projects.',
    prerequisites: ['bio-h'],
    tags: ['core'],
    fulfills: ['Science'],
    notes:
      'Requires B or above in BOTH Biology Honors and Chemistry.',
  },
  {
    id: 'enviro',
    code: '6004',
    name: 'Environmental Science',
    department: 'science',
    level: 'academic',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'A full-year science class that qualifies as laboratory science. Offers a rare opportunity to apply many different sciences to extend knowledge of the world and its inhabitants. Through reading and exploration, students learn how science serves to further understanding of the environment and develop decision-making skills. Disciplines include ecology, geology, oceanography, meteorology, and chemistry. Class structure involves laboratory experimentation, cooperative learning groups, individual projects, group discussions, portfolios/notebooks, and testing.',
    prerequisites: ['bio-h'],
    tags: ['core'],
    fulfills: ['Science'],
    notes:
      'Requires C or above in BOTH Biology Honors and Chemistry.',
  },
  {
    id: 'enviro-r',
    code: '86004',
    name: 'Environmental Science',
    department: 'science',
    level: 'resource',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'Resource center replacement class that is a laboratory science course designed to apply many different sciences to extend knowledge of the world and its inhabitants. IEP goals and objectives are addressed throughout the year. Through reading and exploration, students learn how science serves to further understanding of the environment and develop decision-making skills. Disciplines include ecology, geology, oceanography, meteorology, and chemistry. Class structure involves laboratory experimentation, cooperative learning groups, individual projects, group discussions, portfolios/notebooks, and testing.',
    prerequisites: ['Recommendation by the Child Study Team'],
    tags: ['core', 'resource'],
    fulfills: ['Science'],
  },

  // Elective courses — Environmental Science
  {
    id: 'astronomy',
    code: '6101',
    name: 'Astronomy',
    department: 'science',
    level: 'academic',
    grades: [12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Students examine the very large and the very small questions about our Universe through individual and group projects. Topics include the practical, scientific, and social uses and implications of Astronomy; the different origins of Astronomy and its contributions to cultures around the world; the formation and lifespan of Solar Systems, Stars, Planets, Moons, and Black Holes; and time-dilation and other quantum phenomena observable in the depths of space.',
    prerequisites: [],
    tags: ['elective'],
    fulfills: [],
    notes:
      'Prerequisites: C or above in Honors Geoscience and/or Honors Chemistry, OR B or above in Geoscience Academic and/or Chemistry Academic. This course does NOT satisfy Science requirements for graduation.',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CHEMISTRY (PHYSICAL SCIENCES)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'ap-chem',
    code: '6003AP',
    name: 'AP Chemistry',
    department: 'science',
    level: 'ap',
    grades: [11, 12],
    credits: 6,
    duration: 'full-year',
    description:
      'Equivalent to the general chemistry course taken during the first college year. Provides a college-level foundation to support future advanced coursework in chemistry. Students cultivate their understanding through inquiry-based investigations exploring atomic structure, intermolecular forces and bonding, chemical reactions, kinetics, thermodynamics, and equilibrium. Approximately one-third of scheduled time is spent in the lab and two-thirds on mathematical solutions of chemical problems. Integrates mathematics as a tool for problem solving and modeling scientific theories.',
    prerequisites: ['chem-h'],
    tags: ['core', 'ap'],
    fulfills: ['Science'],
    notes:
      'Requires B or better in Honors Chemistry and successful completion of Algebra II Honors with B or better. Students are expected to take the AP exam in May.',
  },
  {
    id: 'chem-h',
    code: '6003H',
    name: 'Chemistry H',
    department: 'science',
    level: 'honors',
    grades: [10, 11, 12],
    credits: 6,
    duration: 'full-year',
    description:
      'An extensive overview of the theories and practical applications of chemistry. Students spend a minimum of two periods per week in the lab developing skills in measurement, observation, documentation, critical thinking, and hypothesis formation. Topics include the structure and interactive behavior of matter and its relation to applied technology. Strong emphasis on mathematics including methods of problem solving and data collection. Students should have strong reading, vocabulary, and math skills, and the ability to comprehend large volumes of information.',
    prerequisites: ['bio-h'],
    tags: ['core'],
    fulfills: ['Science'],
    notes:
      'Prerequisites differ by grade. Sophomores: A in Honors Biology, A in Honors Geometry and/or B or better in Honors Algebra II, recommendations from Math and Biology teachers. Juniors: B or better in Honors Geoscience, A in Honors Geometry and/or B or better in Honors Algebra II, must be concurrently enrolled in Honors Algebra II, recommendations from Math and Geoscience teachers.',
  },
  {
    id: 'chem',
    code: '6003',
    name: 'Chemistry',
    department: 'science',
    level: 'academic',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'Designed to meet graduation requirements for laboratory science credit. Provides an extensive overview of atomic structure, nomenclature, chemical reactions, the mole, gas laws, the periodic table, acid and base behavior, and science-math integrated skills. Students spend time each week in a laboratory setting developing skills in measurement, observation, documentation, critical thinking, and hypothesis formation. Students should be able to work collaboratively and independently on projects requiring deductive skills, computation, research, and analysis.',
    prerequisites: ['geosci', 'bio-h'],
    tags: ['core'],
    fulfills: ['Science'],
    notes:
      'Requires C or above in Geoscience, Biology Honors, and Algebra I.',
  },
  {
    id: 'chem-r',
    code: '86003',
    name: 'Chemistry',
    department: 'science',
    level: 'resource',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'Resource center replacement class taught in the resource center program. IEP goals and objectives are addressed throughout the year. A lab course emphasizing core concepts in Chemistry: atomic structure and atomic theory, the periodic table, chemical formulas, chemical reactions, and science-math integrated skills. Skills in measurement, observation, documentation, critical thinking, and hypothesis formation are practiced. Students record observations, draw conclusions, and interpret data, working both collaboratively and independently.',
    prerequisites: [
      'Successful completion of Replacement Geoscience and/or Biology and recommendation by the Child Study Team',
    ],
    tags: ['core', 'resource'],
    fulfills: ['Science'],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PHYSICS (PHYSICAL SCIENCES)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'ap-physics-1',
    code: '6005AP',
    name: 'AP Physics 1',
    department: 'science',
    level: 'ap',
    grades: [11, 12],
    credits: 6,
    duration: 'full-year',
    description:
      'Equivalent to a first-semester college course in algebra-based physics, and the start of a two-year sequence for students with exceptional math/science skills. Covers Newtonian mechanics (including rotational dynamics and angular momentum), work, linear momentum, universal gravitation, energy, power, oscillations, fluids, and fluid mechanics. Emphasis on trigonometry, algebra, geometry, and graphical analysis to solve problems and analyze data. Strong math and problem-solving skills are an absolute necessity. Students produce informal and formal lab reports.',
    prerequisites: ['chem-h'],
    tags: ['core', 'ap'],
    fulfills: ['Science'],
    notes:
      'Requires B or better in Honors Chemistry or Honors Physics, and at least 91 in Honors Algebra II. Co-requisites: Trig/Calc H, Calc AB, or Calc BC.',
  },
  {
    id: 'ap-physics-2',
    code: '6005AP2',
    name: 'AP Physics 2',
    department: 'science',
    level: 'ap',
    grades: [11, 12],
    credits: 6,
    duration: 'full-year',
    description:
      'Equivalent to a second-semester college course in algebra-based physics. Covers fluid mechanics, thermodynamics, electricity and magnetism, optics, and atomic and nuclear physics.',
    prerequisites: ['ap-physics-1'],
    tags: ['core', 'ap'],
    fulfills: ['Science'],
    notes: 'Requires B or better in AP Physics 1.',
  },
  {
    id: 'ap-physics-c1',
    code: '6005APC1',
    name: 'AP Physics C - Part I',
    department: 'science',
    level: 'ap',
    grades: [11, 12],
    credits: 6,
    duration: 'full-year',
    description:
      'A two-year calculus-based physics sequence equivalent to the first semester of an introductory college physics course for physics/engineering majors. Topics include measurement, motion, force, momentum, energy, work, angular motion, angular inertia, oscillations, and universal gravitation. Emphasis on calculus, trigonometry, algebra, and geometry to solve problems and analyze data. Strong math and problem-solving skills are an absolute necessity. Required foundational skills include trigonometry, differentiation, and basic integration.',
    prerequisites: ['ap-physics-1'],
    tags: ['core', 'ap'],
    fulfills: ['Science'],
    notes:
      'Requires 92 or better in Trig/Calc Honors, or 85 or better in Calculus AB or Calc BC. Recommended: complete Trig/Calc Honors, Calculus AB, or Calculus BC prior to this course.',
  },
  {
    id: 'ap-physics-c2',
    code: '6005APC2',
    name: 'AP Physics C - Part II',
    department: 'science',
    level: 'ap',
    grades: [12],
    credits: 6,
    duration: 'full-year',
    description:
      'The second semester of calculus-based college physics, covering electric forces, electric fields, magnetism, electromagnetism, electricity, and circuits. Builds on skills from AP Physics C Part I. Emphasis on calculus, trigonometry, algebra, and geometry. Since the ability to perform integration is a necessity, students should first complete an upper-level calculus course. Students produce informal and formal lab reports.',
    prerequisites: ['ap-physics-c1'],
    tags: ['core', 'ap'],
    fulfills: ['Science'],
    notes:
      'Requires B or better in AP Physics C Part I. Also accepts students who did extremely well in AP Physics 1 and completed Trig/Calc Honors, with Physics teacher recommendation. B or better in Calculus AB or higher required. Co-requisite: AP Calculus BC or higher.',
  },
  {
    id: 'physics-h',
    code: '6005H',
    name: 'Physics H',
    department: 'science',
    level: 'honors',
    grades: [11, 12],
    credits: 6,
    duration: 'full-year',
    description:
      'For juniors and seniors interested in practical applications of science and math. Class meets six times per week including four lectures and one double-period lab. The main goal is to instill the ability to accurately predict and calculate the resulting motion of objects under various physical conditions. Topics include Vectors, Kinematics, Newton\'s Laws, Dynamics & Statics, Momentum, and Energy. Advanced math and problem-solving skills are necessary. Trigonometry functions are heavily used during second, third, and fourth marking periods.',
    prerequisites: [],
    tags: ['core'],
    fulfills: ['Science'],
    notes:
      'Requires B or better in Honors Algebra II and Honors Geometry. Co-requisites: Trig/Calc H or Honors PreCalculus.',
  },
  {
    id: 'physics',
    code: '6005',
    name: 'Physics',
    department: 'science',
    level: 'academic',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'For juniors and seniors interested in Science. Classes meet five times a week. Topics include measurement, vectors, motion, force, momentum, and energy. Emphasis on the use of algebra to solve problems and analyze data. Good math and problem-solving skills are necessary, including scientific notation, unit conversions, rounding, graphing/interpreting graphs, and finding the slope of a line. Algebraic computations include solving equations for unknowns, using substitutions, and simplifying algebraic expressions.',
    prerequisites: [],
    tags: ['core'],
    fulfills: ['Science'],
    notes:
      'Requires B or better in Algebra II. Proficiencies needed include skills from Algebra I, Geometry, and Algebra II.',
  },

  // Elective courses — Physical Sciences
  {
    id: 'forensic-sci',
    code: '6104',
    name: 'Forensic Science',
    department: 'science',
    level: 'academic',
    grades: [12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Explores one of the fastest growing fields in the criminal justice system. Students gain an understanding of the fundamentals of criminal investigation and how it is applied in a court of law. Students learn by doing: analyzing lab data, interacting with guest speakers, exploring the Internet, and becoming familiar with various texts. Tools are designed to engage a wide variety of learners — students participate in activities that closely resemble those used by law enforcement personnel, forensic scientists, and attorneys.',
    prerequisites: ['bio-h', 'chem-h', 'chem'],
    tags: ['elective'],
    fulfills: [],
    contractHonors: true,
    notes:
      'Prerequisite: C or above in Honors Biology and Honors Chemistry, OR B or above in Chemistry Academic. This course does NOT satisfy Science requirements for graduation.',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SPECIAL PROGRAMS
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'stem-pbl',
    code: 'PBL/L',
    name: 'STEM Project Based Learning H',
    department: 'science',
    level: 'honors',
    grades: [10, 11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'Divided into four thematic units that provide context for all activities and show students that each discipline utilizes a broad range of activities and skills. Each unit addresses four learning goals: Application, Building Foundations, Personal Development, and Communication. Coursework focuses on activities and projects in which students follow instructions and explore their own ideas. Guest speakers and presentations supplement classroom activities.',
    prerequisites: [],
    tags: ['elective'],
    fulfills: ['Science'],
    notes: 'Also available as a 4-credit (PBLL) option.',
  },
  {
    id: 'weston-scholars',
    code: 'WSS',
    name: 'Weston Science Scholars',
    department: 'science',
    level: 'honors',
    grades: [9, 10, 11],
    credits: 7.5,
    duration: 'full-year',
    description:
      'A program for academically talented and high-achieving students with significant potential in science, mathematics, and related fields. Students participate in hands-on laboratory work under the guidance of Montclair State University faculty scientists over a five-week summer research cohort, plus spring and fall auxiliary activities. Scholars study a mathematics component relative to their research. Includes 20 hours of community service. Evaluated by essay and formal interview.',
    prerequisites: [
      'Application required — strong interest in science and mathematics as evidenced by recent grades',
    ],
    tags: ['elective'],
    fulfills: ['Science'],
    notes: '7.5 credits Pass/Fail, or as a science elective course.',
  },
];

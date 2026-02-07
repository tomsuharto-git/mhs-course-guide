import { Course } from '../types';

export const mathCourses: Course[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // ALGEBRA I
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'alg-1-h',
    code: '4001H',
    name: 'Algebra I Honors',
    department: 'math',
    level: 'honors',
    grades: [9],
    credits: 5,
    duration: 'full-year',
    description:
      'In-depth instruction at a fast pace in a cooperative learning environment. Students must have self-motivation and the ability to comprehend reading materials. This course is an introduction to a more abstract and generalized form of mathematics than arithmetic. Topics include operations with algebraic symbols, elementary set theory, solution of linear equalities and inequalities, graphing algebraic functions and relationships, elementary statistics, and probability. Problem-solving and critical thinking are emphasized throughout, along with the application of the scientific calculator.',
    prerequisites: [],
    tags: ['core', 'grade-9'],
    fulfills: ['Math', 'Algebra I'],
  },
  {
    id: 'alg-1',
    code: '4001',
    name: 'Algebra I',
    department: 'math',
    level: 'academic',
    grades: [9],
    credits: 5,
    duration: 'full-year',
    description:
      'This course is designed for those students who have not successfully completed the NJ State standards for Algebra. It will provide the student with in-depth instruction, a fast pace of instruction, and a cooperative learning environment. The student must have self-motivation and the ability to comprehend reading materials. This course is an introduction to a more abstract and generalized form of mathematics than arithmetic. At the completion of the course, the student will understand the operations with algebraic symbols, elementary set theory, solution of linear equalities and inequalities, graphing algebraic functions and relationships, elementary statistics, and probability. Problem-solving and critical thinking are emphasized throughout the course, along with the application of the scientific calculator.',
    prerequisites: [],
    tags: ['core', 'grade-9'],
    fulfills: ['Math', 'Algebra I'],
  },
  {
    id: 'alg-1-r',
    code: '84001',
    name: 'Algebra I',
    department: 'math',
    level: 'resource',
    grades: [9, 10],
    credits: 5,
    duration: 'full-year',
    description:
      'Algebra I is a resource center replacement class that is taught in the resource center program. It is designed for those students who require individualized and small-group instruction. The goals and objectives in each student\u2019s IEP will be addressed throughout the course. Students will be aware of the operations with algebraic symbols, solutions of linear equations and inequalities, and graphing algebraic functions. Problem-solving concepts are emphasized throughout the course.',
    prerequisites: ['Recommendation by the Child Study Team'],
    tags: ['core', 'resource'],
    fulfills: ['Math', 'Algebra I'],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // GEOMETRY
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'geom-h',
    code: '4002H',
    name: 'Geometry Honors',
    department: 'math',
    level: 'honors',
    grades: [9, 10],
    credits: 5,
    duration: 'full-year',
    description:
      'Faster, more rigorous, and more in-depth instruction in geometry intended for students with strong prior mathematical experiences. Fundamental algebra topics are treated as review within the context of geometric concepts. Higher-order critical thinking skills and cooperative learning are fostered in an academic environment. Topics include properties of geometric figures such as points, lines, planes, polygons, and circles, deductive reasoning through logic and proofs, and problems involving area, volume, and coordinate geometry. Students are expected to read well and complete homework every night. Tools needed: compass, protractor, ruler, and scientific calculator.',
    prerequisites: ['alg-1-h'],
    tags: ['core'],
    fulfills: ['Math', 'Geometry'],
    notes: 'Requires Algebra I Honors with a ≥95 average.',
  },
  {
    id: 'geom',
    code: '4002',
    name: 'Geometry',
    department: 'math',
    level: 'academic',
    grades: [9, 10],
    credits: 5,
    duration: 'full-year',
    description:
      'Instruction at a fast pace with critical thinking skills emphasized in a cooperative learning environment. Topics include the basic properties of geometric figures such as points, lines, planes, polygons, and circles, deductive reasoning using logic and completing proofs, and solving problems involving area, volume, and coordinate geometry. Students are expected to read and do homework every night. Tools needed: compass, protractor, ruler, and scientific calculator.',
    prerequisites: ['alg-1', 'alg-1-h'],
    tags: ['core'],
    fulfills: ['Math', 'Geometry'],
  },
  {
    id: 'geom-r',
    code: '84002',
    name: 'Geometry',
    department: 'math',
    level: 'resource',
    grades: [10, 11],
    credits: 5,
    duration: 'full-year',
    description:
      'Resource center replacement class designed for students who require individualized and small-group instruction. IEP goals and objectives are addressed throughout the course. Students develop knowledge of fundamental geometric concepts including points, lines, planes, rays, segments, and angles. Topics include angle-pair relationships, deductive reasoning through proofs, properties of geometric relations in plane and space, two-dimensional and three-dimensional shapes, area, perimeter, surface area, volume, coordinate geometry, and basic constructions.',
    prerequisites: ['alg-1-r'],
    tags: ['core', 'resource'],
    fulfills: ['Math', 'Geometry'],
    notes: 'Recommendation by the Child Study Team required.',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ALGEBRA II
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'alg-2-trig-h',
    code: '4003TRH',
    name: 'Algebra II/Trigonometry Honors',
    department: 'math',
    level: 'honors',
    grades: [9, 10],
    credits: 5,
    duration: 'full-year',
    description:
      'A fast-paced and highly rigorous course designed to prepare students for AP Precalculus/Intro. to Calculus. This is the second course in the branch of mathematics that enables students to represent and analyze relationships among variable quantities and solve problems involving patterns, functions, and algebraic concepts. There is very minimal review of Algebra I topics. Includes a much more in-depth study of trigonometry, involving the proving of identities and various applications of trigonometry.',
    prerequisites: ['geom-h'],
    tags: ['core'],
    fulfills: ['Math', 'Algebra II'],
    notes: 'Requires Algebra B Accelerated ≥90 AND Geometry Honors ≥90.',
  },
  {
    id: 'alg-2-h',
    code: '4003H',
    name: 'Algebra II Honors',
    department: 'math',
    level: 'honors',
    grades: [9, 10, 11],
    credits: 5,
    duration: 'full-year',
    description:
      'Algebra II Honors is a briskly paced course designed to prepare students for Pre-Calculus Honors and college math. It is the second course in the branch of mathematics that enables students to represent and analyze relationships among variable quantities and solve problems involving patterns, functions, and algebraic concepts and processes. Prerequisite concepts and skills from Algebra I are reviewed and enhanced. Topics include functions, linear equations, systems, polynomials, rational expressions, irrational and complex numbers, quadratics, exponential and logarithmic functions, and laws of exponents.',
    prerequisites: ['geom-h', 'geom'],
    tags: ['core'],
    fulfills: ['Math', 'Algebra II'],
    notes:
      'Multiple prerequisite paths: Algebra B ≥85 or Algebra I HS ≥85, AND Geometry Honors ≥75 or Geometry ≥90 with Algebra I H ≥85.',
  },
  {
    id: 'alg-2',
    code: '4003',
    name: 'Algebra II',
    department: 'math',
    level: 'academic',
    grades: [10, 11],
    credits: 5,
    duration: 'full-year',
    description:
      'A rigorous course that goes in-depth into solving and graphing polynomial, rational, radical, and exponential equations. Topics include functions, linear equations, systems, polynomials, rational expressions, irrational and complex numbers, quadratics, exponential and logarithmic functions, and laws of exponents as well as systems of equations. Multiple-step problem-solving is emphasized. Strong skills in Algebra are a firm prerequisite, including solving single-variable linear equations and operating with signed numbers, fractions, and radicals. Homework is assigned regularly, as independent practice is essential to mastery.',
    prerequisites: ['alg-1', 'geom'],
    tags: ['core'],
    fulfills: ['Math', 'Algebra II'],
  },
  {
    id: 'alg-2-r',
    code: '84003',
    name: 'Algebra II',
    department: 'math',
    level: 'resource',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'Resource center replacement class designed for students who require individualized and small-group instruction. IEP goals and objectives are addressed throughout the course. Students deepen their knowledge of Algebra I concepts including evaluating algebraic expressions, properties of exponents, operations on polynomials, solving and graphing linear equations, systems of linear equations, linear inequalities, absolute value equations, and factoring. Additional topics include long division of polynomials, synthetic division, remainder theorem, modeling with linear functions, quadratic and exponential functions, radicals, complex numbers, solving quadratic equations graphically and algebraically, transformations of functions, and rational exponent and radical equations.',
    prerequisites: ['alg-1-r', 'geom-r'],
    tags: ['core', 'resource'],
    fulfills: ['Math', 'Algebra II'],
    notes: 'Recommendation by the Child Study Team required.',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PRECALCULUS
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'ap-precalc-calc',
    code: '4004APC',
    name: 'AP Precalculus/Intro. to Calculus',
    department: 'math',
    level: 'ap',
    grades: [10, 11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'Formerly Trigonometry/Intro. Calculus H. A comprehensive study of mathematics in preparation for Advanced Placement calculus. The first half covers trigonometric functions, graphs and identities, triangle trigonometry, and polar coordinates. The second half introduces the topics of differential calculus, including limits, continuity, the derivative, and its applications. As recommended by the National Council of Teachers of Mathematics, students should have a mastery of Algebra II and Geometry. Students completing this course successfully will be able to take a full-year calculus course (Calculus Honors, AP Calculus AB, or AP Calculus BC).',
    prerequisites: ['alg-2-trig-h'],
    tags: ['core'],
    fulfills: ['Math'],
    notes: 'Requires Algebra II/Trigonometry Honors with a ≥85 average.',
  },
  {
    id: 'precalc-h',
    code: '4004H',
    name: 'Precalculus Honors',
    department: 'math',
    level: 'honors',
    grades: [10, 11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'This course will provide the student with comprehensive fast-paced instruction and a cooperative learning environment. The student must be self-motivated and able to work with advanced algebraic and geometric concepts. The course extends and broadens the mathematical concepts introduced in previous years. At the completion of the course, the student will be able to understand trigonometric and circular functions and more advanced algebraic concepts, such as logarithms, graphs of rational functions, and limits. This course will not prepare students for AP Calculus BC the following year but will provide highly proficient students with an opportunity for AP Calculus AB.',
    prerequisites: ['alg-2-h', 'alg-2-trig-h'],
    tags: ['core'],
    fulfills: ['Math'],
    notes:
      'Requires Algebra II Honors ≥85 or Algebra II/Trig Honors ≥75. Will not prepare students for AP Calculus BC.',
  },
  {
    id: 'precalc',
    code: '4004',
    name: 'Precalculus',
    department: 'math',
    level: 'academic',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'This course will provide students with a traditional pace of instruction, more individualized instruction, and a cooperative learning environment. Fundamental algebra topics will be treated as a review within the context of trigonometric functions. At the completion of this course, students will understand the concepts of circular and trigonometric functions and their relationships and applications to real-life problems.',
    prerequisites: ['alg-2'],
    tags: ['core'],
    fulfills: ['Math'],
  },
  {
    id: 'ap-precalc',
    code: '4004AP',
    name: 'AP Precalculus',
    department: 'math',
    level: 'ap',
    grades: [10, 11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'Prepares students for college-level mathematics and science courses. Students explore everyday situations using mathematical tools and lenses, develop an understanding of modeling and functions, and examine scenarios through multiple representations. The course framework outlines content and skills needed for careers in mathematics, physics, biology, health science, social science, and data science. Students should demonstrate proficiency with linear functions, polynomial operations, factoring quadratic trinomials, solving right triangle problems using trigonometry, solving linear and quadratic equations and inequalities, algebraic manipulation, and solving systems of equations.',
    prerequisites: ['alg-2-h', 'alg-2-trig-h'],
    tags: ['core', 'ap'],
    fulfills: ['Math'],
    notes:
      'Requires Algebra II H ≥90 or Algebra II/Trig H ≥80. Important: AP Calculus BC is NOT the next step — students seeking BC must take AP Precalc/Calc (formerly Trig/Calc) or AP Calculus AB first. Course overrides to bypass this progression will not be honored.',
  },
  {
    id: 'applied-math',
    code: '8412',
    name: 'Applied Mathematics',
    department: 'math',
    level: 'resource',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'Applied Mathematics is designed for students who need to fulfill the third-year graduation requirement or who still need additional reinforcement of basic math skills. It is a resource center replacement class that is taught in the resource center program. The goals and objectives in each student\u2019s IEP will be addressed throughout the course. The course will focus on the contemporary uses of mathematics and on the processes of mathematical modeling. The intent of the course is to add significant value to students\u2019 mastery of algebra and geometry, expand their knowledge through various interactive platforms and strengthen their problem-solving techniques. The Applied Math curriculum is a mixture of Algebra I, Geometry and Algebra II.',
    prerequisites: [],
    tags: ['resource'],
    fulfills: ['Math'],
    notes:
      'Requires two years of math and recommendation by the Child Study Team.',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CALCULUS
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'ap-calc-bc',
    code: '4007APC',
    name: 'AP Calculus (BC)',
    department: 'math',
    level: 'ap',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'This course will provide the student with an extremely fast-paced, rigorous course in calculus in preparation for the Advanced Placement Examination in Calculus BC. At the completion of the course, the student will be able to understand and apply the concepts of limits, continuity, differential calculus, integral calculus, improper integrals, Taylor and MacLaurin polynomials, series and their convergence/divergence, applications of polar coordinates, parametric representations of functions and their derivatives, vectors in the plane and differential equations. The use of the graphic calculator is incorporated throughout the course. Students are expected to take the AP Exam in Calculus BC. Note: Honors Calculus is not sufficient preparation for AP Calculus.',
    prerequisites: ['ap-precalc-calc', 'ap-calc-ab'],
    tags: ['core', 'ap'],
    fulfills: ['Math'],
    notes:
      'Requires AP Precalculus/Intro. to Calc ≥88 or AP Calculus AB ≥87. Honors Calculus is NOT sufficient preparation for this course.',
  },
  {
    id: 'ap-calc-ab',
    code: '4007APA',
    name: 'AP Calculus (AB)',
    department: 'math',
    level: 'ap',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'This course will provide the student with a rigorous course in calculus at an accelerated pace in preparation for the AP Examination in AB Calculus. At the completion of the course, the student will understand the theory and applications of differential and integral calculus. As recommended by the National Council of Teachers of Mathematics, students enrolled in this course should have a mastery of algebra, geometry, and trigonometry. Students are expected to take the AP Exam in May. It is expected that students who successfully complete the course will have developed proficiency in the following areas: evaluating limits, derivatives, and integrals; applying derivatives to related rates, optimization problems, and motion; applying integrals to area, volume, and differential equations; and using advanced techniques of integration. Please note that students who take Calculus Honors are not eligible to take AP Calculus AB.',
    prerequisites: ['ap-precalc-calc', 'precalc-h', 'ap-precalc'],
    tags: ['core', 'ap'],
    fulfills: ['Math'],
    notes:
      'Requires AP Precalc/Calc ≥80, Pre-Calculus Honors ≥90, or AP Precalculus ≥80. Students who take Calculus Honors are NOT eligible for AP Calculus AB.',
  },
  {
    id: 'calc-h',
    code: '4007H',
    name: 'Calculus Honors',
    department: 'math',
    level: 'honors',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'This course will provide the student with a rigorous course in calculus with in-depth instruction in the basic concepts of calculus. The course is designed for those students not planning to take the Advanced Placement Examination in Calculus. At the completion of the course, the student will have a clear understanding of the theory of limits, derivatives, integrals, and their applications. Topics covered include maxima and minima, related rates, area and volume, exponential, logarithmic, and trigonometric functions. As recommended by the National Council of Teachers of Mathematics (NCTM), students who enroll in this course should have a mastery of algebra, geometry, and trigonometry.',
    prerequisites: ['precalc-h'],
    tags: ['core'],
    fulfills: ['Math'],
    notes:
      'Requires Pre-Calculus Honors ≥75 and demonstrated proficiency in solving equations. NOT designed for AP exam preparation. Juniors taking Honors Calculus will be offered AP Statistics as seniors.',
  },
  {
    id: 'calc-3-hh',
    code: '4008HH',
    name: 'Calculus III High Honors',
    department: 'math',
    level: 'high-honors',
    grades: [12],
    credits: 5,
    duration: 'full-year',
    description:
      'This course in multivariable calculus is for those seniors who have successfully completed AP Calculus BC. Topics covered include vector-valued functions of several variables, multiple integration, directional derivatives, vector analysis, and calculus in three dimensions.',
    prerequisites: ['ap-calc-bc'],
    tags: ['core'],
    fulfills: ['Math'],
    notes: 'Requires AP Calculus BC with a ≥90 average.',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // STATISTICS & PROBABILITY
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'ap-stats',
    code: '4005AP',
    name: 'AP Statistics',
    department: 'math',
    level: 'ap',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'This course provides in-depth instruction at a fast pace in a cooperative learning environment. It is intended for students who have a strong mathematics background equivalent to Algebra II. This AP course is designed to prepare students to take the Advanced Placement College Board examination in Statistics. The instruction in this course is technology and calculator-based. This course is equivalent to an introductory non-calculus-based statistics course offered by the mathematics departments at many colleges and universities. Those students intending to major in psychology, sociology, health sciences or business may wish to consider taking this course. Those intending to major in the sciences, engineering, mathematics, or computer science will find this course to be an effective preparation for the upper-level calculus-based statistics course they will take in college. Those students planning to take an AP science course in their senior year will benefit greatly from AP Statistics in their junior year. The approach taken in this course will allow students to build interdisciplinary connections with other subjects and with their world outside school. Topics include exploring data, planning a study (deciding what and how to measure), anticipating patterns (introducing probability and simulation), and statistical inference. Students are expected to have a TI-83/84 plus calculator and are expected to take the AP Statistics Exam in May.',
    prerequisites: ['alg-2-h', 'alg-2-trig-h', 'precalc-h'],
    tags: ['core', 'ap'],
    fulfills: ['Math'],
    notes:
      'Requires Algebra II H ≥80, Algebra II/Trig H ≥75, or Pre-Calculus Honors ≥80. 11th graders must concurrently take another math class. Students are expected to take the AP Exam in May.',
  },
  {
    id: 'prob-stats-h',
    code: '4005H',
    name: 'Probability and Statistics Honors',
    department: 'math',
    level: 'honors',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'This course provides an alternative to Calculus courses for those who wish to include a fourth year of math in the high school program. This course will include the following major topics: exploring data, planning a study (deciding what and how to measure), anticipating patterns (introducing probability and simulation), and statistical inference. Students are encouraged to use their own TI-83/84 plus calculator. Successful students will be able to perform exploratory data analysis, apply and interpret techniques of statistical inference, and critique and interpret various research design models. The approach taken in this course will allow students to build interdisciplinary connections with other subjects and with their world outside school.',
    prerequisites: ['alg-2-h', 'precalc-h', 'alg-2', 'precalc'],
    tags: ['core'],
    fulfills: ['Math'],
    notes:
      'Requires Algebra II H ≥75, Pre-Calculus H ≥75, Algebra II ≥95, or Pre-Calculus ≥95.',
  },
  {
    id: 'prob-stats',
    code: '4005',
    name: 'Probability and Statistics',
    department: 'math',
    level: 'academic',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'This course provides an alternative to Pre-Calculus for those who wish to include a fourth year of math in the high school program. Topics covered include exploring data, planning a study (deciding what and how to measure), anticipating patterns (introducing probability and simulation), and statistical inference. Students are encouraged to use their own TI-83/84 plus calculator. Successful students will be able to perform exploratory data analysis, apply and interpret techniques of statistical inference, and critique and interpret various research design models.',
    prerequisites: ['alg-2', 'precalc'],
    tags: ['core'],
    fulfills: ['Math'],
    notes:
      '11th-grade students seeking a 4th year of math should NOT enroll — take the next course in your progression instead.',
  },
];

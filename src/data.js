// ============================================================
//  COMPLETE CONTENT INVENTORY — Bhavishya Verma
//  100% of resume content preserved. Presentation only is remixed.
// ============================================================

export const profile = {
  name: 'Bhavishya Verma',
  shortName: 'Bhavishya',
  role: 'React.js & Full-Stack Web Developer',
  location: 'Dehradun, Uttarakhand, India',
  email: 'bhavishyeah@gmail.com',
  phone: '9667340978',
  status: 'Open for freelance, internships & full-time roles',
  tagline: 'I BUILD REACT PRODUCTS.',
  secondaryTagline:
    'React.js & Full-Stack Developer crafting polished platforms, payment flows, real-time systems, and AI-assisted ideas — engineered, not assembled.',
  bio: "19-year-old BCA student and full-stack developer who likes building products with strong structure, premium detail, and long-term thinking. I work across frontend, backend, payments, databases, auth, real-time systems, and AI integrations. My style is simple: make it functional, beautiful, and memorable.",
  summary:
    "React.js & Full-Stack Web Developer with 1+ year of hands-on experience building and deploying production-ready web applications. Proficient in React.js, TypeScript, Node.js, JavaScript, MongoDB, REST APIs, and modern web technologies. Delivered responsive, SEO-optimised platforms serving 300+ monthly users, integrated payment and authentication systems, and created immersive 3D web experiences. Additional experience in AI/ML from a 3-month internship, applying Python and NLP to real-world data pipelines. Passionate about writing clean code, leading technical initiatives, and solving user problems at scale.",
  typewriter: [
    'full-stack web products.',
    'secure payment flows.',
    'real-time experiences.',
    'AI-assisted features.',
    'immersive 3D web.',
  ],
  links: {
    github: 'https://github.com/bhavishyeah',
    linkedin: 'https://www.linkedin.com/in/bhavishyeah',
  },
  languages: [
    { name: 'Hindi', level: 'Native' },
    { name: 'English', level: 'B2 Proficiency' },
  ],
}

// Hero + counters (value is the numeric target, used by CountUp)
export const stats = [
  { value: 20, suffix: '+', label: 'Projects shipped' },
  { value: 10, suffix: '+', label: 'Core technologies' },
  { value: 2.5, suffix: 'k+', label: 'Community reach', decimals: 1 },
  { value: 300, suffix: '+', label: 'Monthly users' },
  { value: 1, suffix: '+', label: 'Year experience' },
]

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  school: 'Institute of Technology & Management, Dehradun, Uttarakhand',
  grad: 'Expected Graduation: 2027',
  cgpa: '8.25',
  cgpaOutOf: '/10',
}

// Personal details bento (About)
export const facts = [
  { label: 'Location', value: 'Dehradun, India' },
  { label: 'Role', value: 'Student + Full-Stack Developer' },
  { label: 'Focus', value: 'Web Apps, AI, Product UX' },
  { label: 'Strength', value: 'End-to-end product building' },
  { label: 'Style', value: 'Polished, premium, memorable' },
  { label: 'Status', value: 'Open to opportunities' },
]

// ============================================================
//  PROJECTS — all 6, full content
// ============================================================
export const projects = [
  {
    index: '01',
    name: 'SelfWinner',
    tag: 'Featured',
    category: 'Product / Education / Payments',
    date: 'December 2025 – Present',
    accent: '#a3e635',
    layout: 'left-large',
    tagline: 'Secure academic notes marketplace with payments & protected delivery.',
    bullets: [
      'Developed a secure academic notes marketplace to simplify content access for students.',
      'Implemented JWT authentication, Google OAuth, Razorpay integration, and protected file delivery using Cloudinary.',
      'Enabled secure digital distribution of educational resources while improving accessibility and content monetization.',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Google OAuth', 'Razorpay', 'Cloudinary'],
  },
  {
    index: '02',
    name: '3D Nissan GTR Experience',
    tag: '3D',
    category: '3D / Interactive / Automotive',
    date: 'May 2026',
    accent: '#8b5cf6',
    layout: 'center-3d',
    is3D: true,
    tagline: 'Immersive cinematic 3D automotive showcase built with Three.js.',
    bullets: [
      'Created an immersive 3D automotive showcase using Three.js, GSAP, and modern frontend technologies.',
      'Added 5+ interactive animations, cinematic transitions, and performance optimization techniques for a premium user experience.',
    ],
    stack: ['React.js', 'Vite', 'React Three Fiber', 'Three.js', 'GSAP', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
  },
  {
    index: '03',
    name: 'She Can Foundation Website',
    tag: 'Social Impact',
    category: 'NGO / Volunteer / Social Impact',
    date: 'June 2026',
    accent: '#a3e635',
    layout: 'right-offset',
    tagline: 'Responsive NGO platform supporting awareness campaigns & initiatives.',
    bullets: [
      'Designed a responsive NGO website as a volunteer project using React.js and modern frontend technologies.',
      'Improved digital visibility and accessibility while creating an engaging platform to support 18+ awareness campaigns and 10+ community initiatives.',
    ],
    stack: ['React.js', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'GSAP', 'Framer Motion', 'Vercel'],
  },
  {
    index: '04',
    name: 'Dental Care Website',
    tag: '170+ Appointments',
    category: 'Business / Healthcare / Conversion',
    date: 'April 2026',
    accent: '#f97316',
    layout: 'left-small',
    statBadge: { value: 170, suffix: '+', label: 'Appointments' },
    tagline: 'Conversion-focused clinic website driving real appointment inquiries.',
    bullets: [
      'Built a conversion-focused business website for a local dental clinic using React.js and responsive design principles.',
      'Added trust-building content to improve patient engagement and appointment inquiries with 170+ direct appointment conversions.',
    ],
    stack: ['React.js', 'Vite', 'JavaScript', 'Email.js', 'HTML5', 'CSS3', 'Responsive Design', 'Form Validation', 'Vercel'],
  },
  {
    index: '05',
    name: 'Cherrish',
    tag: 'Social',
    category: 'Social / Community / UX',
    date: '',
    accent: '#8b5cf6',
    layout: 'center-right',
    tagline: 'Anonymous confession platform with expressive, playful social UX.',
    bullets: [
      'Designed an anonymous confession platform with social interaction and expressive UI.',
      'Built anonymous content mechanics with profile and post interactions.',
      'Focused on playful interface choices without losing clarity.',
      'Handled scalable content rendering and engagement flow design.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'REST API'],
  },
  {
    index: '06',
    name: 'Robot Voting Arena',
    tag: 'Realtime',
    category: 'Realtime / Events / Gamified',
    date: '',
    accent: '#f97316',
    layout: 'full-width',
    tagline: 'Arena-style real-time voting with live leaderboards and event energy.',
    bullets: [
      'Created an engaging arena-style real-time voting experience with live leaderboards and event energy.',
      'Implemented live leaderboard updates and fast UI feedback loops.',
      'Designed audience-friendly interaction flow for public participation.',
      'Balanced performance with theatrical product presentation.',
    ],
    stack: ['WebSockets', 'Realtime', 'Node.js', 'Leaderboard'],
  },
]

// ============================================================
//  EXPERIENCE — all 3 roles, full bullets
// ============================================================
export const experience = [
  {
    period: 'June 2025 – Present',
    role: 'Freelance Web Developer',
    company: 'College Aggregator',
    bullets: [
      'Built and deployed a college discovery platform using React.js and TypeScript, delivering 30+ structured pages covering 24+ colleges with a responsive UI and intuitive navigation for students.',
      'Achieved 300+ monthly users by applying best SEO practices, structured content, and metadata to improve search visibility and organic reach.',
      'Improved load times and mobile experience through performance and accessibility optimizations; deployed and maintained the live site on Vercel.',
      'Full project lifecycle ownership from requirements and design through development, deployment, and ongoing maintenance, ensuring timely updates and content accuracy.',
    ],
  },
  {
    period: 'January 2026 – April 2026',
    role: 'AI Intern',
    company: 'Codec Technologies',
    bullets: [
      'Reduced misclassification and improved detection robustness by implementing an NLP-based spam classification pipeline in Python covering text cleaning, feature engineering, and supervised model training with iterative hyperparameter tuning.',
      'Delivered short-term trend forecasts and decision-support visualisations by building a stock-forecasting model using time-series feature engineering and predictive modelling techniques.',
      'Processed, cleaned, and merged heterogeneous datasets; applied cross-validation and precision/recall evaluation metrics to validate model performance and guide iterative improvements.',
      'Optimised model hyperparameters with experimental findings documented and production-deployment recommendations prepared for monitoring and scaling.',
    ],
  },
  {
    period: 'May 2026 – July 2026',
    role: 'Web Development Intern',
    company: 'She Can Foundation',
    bullets: [
      'Built and polished the official foundation website with a modern, mission-aligned experience.',
      'Improved structure, responsiveness, and storytelling across content sections.',
      'Contributed production-ready frontend work under real organizational constraints.',
    ],
  },
]

// ============================================================
//  SKILLS — all 5 categories with every technology
// ============================================================
export const skillCategories = [
  {
    key: 'frontend',
    label: 'Frontend Development',
    motif: 'brackets',
    accent: '#a3e635',
    items: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Web Accessibility (WCAG)'],
  },
  {
    key: 'backend',
    label: 'Backend Development',
    motif: 'database',
    accent: '#a3e635',
    items: ['SQL', 'Node.js', 'Authentication Systems', 'MongoDB', 'REST APIs'],
  },
  {
    key: 'data',
    label: 'Data & Analytics',
    motif: 'chart',
    accent: '#8b5cf6',
    items: ['Advanced MS Excel', 'Data Analysis', 'Data Management', 'Data Cleaning', 'Data Visualization'],
  },
  {
    key: 'engineering',
    label: 'Software Engineering',
    motif: 'gear',
    accent: '#a3e635',
    items: ['Debugging', 'Testing', 'Version Control', 'API Integration', 'SDLC concepts', 'CI/CD', 'PWA', 'Agile'],
  },
  {
    key: 'ai',
    label: 'Artificial Intelligence',
    motif: 'neural',
    accent: '#8b5cf6',
    items: ['Python', 'Machine Learning Fundamentals', 'Natural Language Processing (NLP)', 'Predictive Modeling'],
  },
  {
    key: 'tools',
    label: 'Tools & Platforms',
    motif: 'gear',
    accent: '#a3e635',
    items: ['UI/UX Design', 'Figma', 'Canva', 'Git', 'GitHub', 'Vercel', 'Render', 'Framer'],
  },
  {
    key: 'seo',
    label: 'SEO',
    motif: 'chart',
    accent: '#8b5cf6',
    items: ['SEO Optimization', 'Keyword Research', 'Content Structuring'],
  },
]

// Tech galaxy nodes (3D). level: core = lime, growing = violet
export const techGalaxy = [
  { name: 'React.js', level: 'core' },
  { name: 'TypeScript', level: 'core' },
  { name: 'JavaScript', level: 'core' },
  { name: 'Node.js', level: 'core' },
  { name: 'MongoDB', level: 'core' },
  { name: 'REST APIs', level: 'core' },
  { name: 'Tailwind CSS', level: 'core' },
  { name: 'HTML5', level: 'core' },
  { name: 'CSS3', level: 'core' },
  { name: 'Git', level: 'core' },
  { name: 'Three.js', level: 'growing' },
  { name: 'R3F', level: 'growing' },
  { name: 'GSAP', level: 'growing' },
  { name: 'Python', level: 'growing' },
  { name: 'NLP', level: 'growing' },
  { name: 'Machine Learning', level: 'growing' },
  { name: 'Figma', level: 'growing' },
  { name: 'Vercel', level: 'growing' },
  { name: 'SQL', level: 'growing' },
  { name: 'Framer Motion', level: 'growing' },
]

// ============================================================
//  AWARDS, WORKSHOPS, VOLUNTEERING
// ============================================================
export const awards = [
  { title: '1st Place — Robotics Innovation Challenge 2026', detail: 'Arduino Firefighting Robot' },
  { title: '1st Place — Cyber Security Poster Making Competition', detail: '' },
  { title: '2nd Place — ONGC Vigilance Awareness Week Debate', detail: 'Debate Competition 2024' },
  { title: 'Best Practical Presentation Award', detail: 'Synergy 2024' },
  { title: 'Runner-Up — Brain Booster', detail: '' },
]

export const workshops = [
  'Organized multiple technology expert talks under the ITM Tech Club.',
  'Conducted 7 Google Gemini (Generative AI) workshops.',
  'Coordinated technical workshops, hackathons, and student engagement activities.',
  "Assisted in organizing Freshers' and Farewell events.",
]

export const volunteering = {
  role: 'NSS Camp Volunteer',
  org: 'NSS, Dehradun',
  period: 'November 2024 – November 2025',
  bullets: [
    'Actively volunteered in an intensive NSS special checkup and treatment camp.',
    'Coordinated free medical checkups, diagnostic screenings, and treatment distributions for over 2500+ underprivileged people.',
  ],
  stat: { value: 2500, suffix: '+', label: 'People served' },
}

// Marquee bands
export const marqueeItems = [
  'REACT', 'NEXT.JS', 'NODE.JS', 'THREE.JS', 'FULL-STACK', 'OPEN FOR WORK',
]

export const nav = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Awards', href: '#awards' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

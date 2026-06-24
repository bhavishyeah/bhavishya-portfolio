// ============================================================
//  CONTENT INVENTORY — Bhavishya Verma  (light / blue theme)
//  100% of resume content preserved.
// ============================================================

export const profile = {
  name: 'Bhavishya Verma',
  shortName: 'Bhavishya',
  role: 'React.js & Full-Stack Web Developer',
  location: 'Dehradun, Uttarakhand, India',
  email: 'solo.bhavishya@gmail.com',
  phone: '9667340978',
  status: 'Open for freelance, internships & full-time roles',
  bio: 'React.js & Full-Stack Developer crafting polished platforms, payment flows, real-time systems, and AI-assisted ideas — engineered, not assembled.',
  secondaryBio:
    '19-year-old BCA student and full-stack developer who likes building products with strong structure, premium detail, and long-term thinking.',
  summary:
    'React.js & Full-Stack Web Developer with 1+ year of hands-on experience building and deploying production-ready web applications. Proficient in React.js, TypeScript, Node.js, JavaScript, MongoDB, REST APIs, and modern web technologies. Delivered responsive, SEO-optimised platforms serving 300+ monthly users, integrated payment and authentication systems, and created immersive 3D web experiences. Additional experience in AI/ML from a 3-month internship, applying Python and NLP to real-world data pipelines. Passionate about writing clean code, leading technical initiatives, and solving user problems at scale.',
  links: {
    github: 'https://github.com/bhavishyeah',
    linkedin: 'https://www.linkedin.com/in/bhavishya-dev',
  },
  languages: [
    { name: 'Hindi', level: 'Native' },
    { name: 'English', level: 'B2 Proficiency' },
  ],
}

export const stats = [
  { value: 20, suffix: '+', label: 'Projects Shipped' },
  { value: 10, suffix: '+', label: 'Core Technologies' },
  { value: 2.5, suffix: 'K+', label: 'Community Reach', decimals: 1 },
  { value: 300, suffix: '+', label: 'Monthly Users' },
  { value: 1, suffix: '+', label: 'Year Experience' },
]

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  school: 'Institute of Technology & Management, Dehradun, Uttarakhand',
  grad: 'Expected Graduation: 2027',
  cgpa: '8.25',
  cgpaOutOf: '/10',
}

export const facts = [
  { label: 'Location', value: 'Aligarh / Dehradun, India' },
  { label: 'Role', value: 'Student + Full-Stack Developer' },
  { label: 'Focus', value: 'Web Apps, AI, Product UX' },
  { label: 'Strength', value: 'End-to-end product building' },
  { label: 'Style', value: 'Polished, premium, memorable' },
  { label: 'Status', value: 'Open to opportunities' },
]

// link: replace '#' with the real live URL when available
export const projects = [
  {
    index: '01',
    name: 'SelfWinner',
    badge: 'Featured',
    category: 'Product / Education / Payments',
    date: 'December 2025 – Present',
    link: 'https://www.selfwinner.com',
    repo: 'https://github.com/bhavishyeah/selfwinner',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    description:
      'Secure academic notes marketplace with JWT authentication, Google OAuth, Razorpay integration, and protected file delivery via Cloudinary.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Google OAuth', 'Razorpay', 'Cloudinary'],
    caseStudyPath: '/case-study/selfwinner',
  },
  {
    index: '02',
    name: '3D Nissan GTR Experience',
    badge: '3D',
    category: '3D / Interactive / Automotive',
    date: 'May 2026',
    link: 'https://futurix-kappa.vercel.app',
    repo: 'https://github.com/bhavishyeah/futurix-gtr',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
    description:
      'Immersive 3D automotive showcase with 5+ interactive animations and cinematic transitions.',
    tech: ['React.js', 'Vite', 'React Three Fiber', 'Three.js', 'GSAP', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
  },
  {
    index: '03',
    name: 'She Can Foundation Website',
    badge: 'Social Impact',
    category: 'NGO / Volunteer / Social Impact',
    date: 'June 2026',
    link: 'https://shecanfoundation.henna.vercel.app',
    repo: 'https://github.com/bhavishyeah/shecan-foundation',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
    description:
      'Responsive NGO website supporting 18+ awareness campaigns and 10+ community initiatives.',
    tech: ['React.js', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'GSAP', 'Framer Motion', 'Vercel'],
  },
  {
    index: '04',
    name: 'Dental Care Website',
    badge: 'Healthcare',
    category: 'Business / Healthcare / Conversion',
    date: 'April 2026',
    link: 'https://thapar-dental-care-ddn.vercel.app',
    repo: 'https://github.com/bhavishyeah/thapar-dental-care',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%)',
    description:
      'Conversion-focused dental clinic website with 170+ direct appointment conversions.',
    tech: ['React.js', 'Vite', 'JavaScript', 'Email.js', 'HTML5', 'CSS3', 'Responsive Design', 'Form Validation', 'Vercel'],
  },
  {
    index: '05',
    name: 'Cherrish',
    badge: 'Social',
    category: 'Social / Community / UX',
    date: '',
    link: 'https://www.cherrish.in/',
    repo: 'https://github.com/bhavishyeah/cherrish',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #60a5fa 100%)',
    description:
      'Anonymous confession platform with pseudonymous posting, profile interactions, and moderation-friendly structure.',
    tech: ['React', 'Node.js', 'MongoDB', 'REST API'],
  },
  {
    index: '06',
    name: 'Robot Voting Arena',
    badge: 'Realtime',
    category: 'Realtime / Events / Gamified',
    date: '',
    link: 'https://robot-voting-arena.vercel.app/',
    repo: 'https://github.com/bhavishyeah/robot-voting-arena',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)',
    description:
      'Real-time voting experience with live leaderboards and event-driven competitive UI.',
    tech: ['WebSockets', 'Realtime', 'Node.js', 'Leaderboard'],
    caseStudyPath: '/case-study/robot-voting-arena',
  },
]

export const experience = [
  {
    period: 'June 2025 – Present',
    role: 'Freelance Web Developer',
    company: 'College Aggregator',
    bullets: [
      'Built and deployed a college discovery platform using React.js and TypeScript, delivering 30+ structured pages covering 24+ colleges with responsive UI and intuitive navigation.',
      'Achieved 300+ monthly users by applying best SEO practices, structured content, and metadata to improve search visibility and organic reach.',
      'Improved load times and mobile experience through performance and accessibility optimizations; deployed on Vercel.',
      'Full project lifecycle ownership from requirements through deployment and maintenance.',
    ],
  },
  {
    period: 'January 2026 – April 2026',
    role: 'AI Intern',
    company: 'Codec Technologies',
    bullets: [
      'Implemented an NLP-based spam classification pipeline in Python covering text cleaning, feature engineering, and supervised model training with hyperparameter tuning.',
      'Built a stock-forecasting model using time-series feature engineering and predictive modeling for decision-support visualizations.',
      'Processed, cleaned, and merged heterogeneous datasets; applied cross-validation and precision/recall metrics.',
      'Optimized model hyperparameters and documented findings for production deployment.',
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

// Skills with brand-icon slugs (simpleicons CDN) + proficiency level.
// slug: null => no brand logo (renders a lettered chip). level: 'core' (filled) | 'growing' (outlined)
export const skillCategories = [
  {
    label: 'Frontend Development',
    items: [
      { name: 'React.js', slug: 'react', level: 'core' },
      { name: 'TypeScript', slug: 'typescript', level: 'core' },
      { name: 'JavaScript', slug: 'javascript', level: 'core' },
      { name: 'HTML5', slug: 'html5', level: 'core' },
      { name: 'CSS3', slug: 'css3', level: 'core' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', level: 'core' },
      { name: 'Web Accessibility (WCAG)', slug: null, level: 'growing' },
    ],
  },
  {
    label: 'Backend Development',
    items: [
      { name: 'Node.js', slug: 'nodedotjs', level: 'core' },
      { name: 'MongoDB', slug: 'mongodb', level: 'core' },
      { name: 'SQL', slug: 'mysql', level: 'growing' },
      { name: 'REST APIs', slug: null, level: 'core' },
      { name: 'Authentication Systems', slug: null, level: 'growing' },
    ],
  },
  {
    label: 'Data & Analytics',
    items: [
      { name: 'Advanced MS Excel', slug: 'microsoftexcel', level: 'growing' },
      { name: 'Data Analysis', slug: null, level: 'growing' },
      { name: 'Data Management', slug: null, level: 'growing' },
      { name: 'Data Cleaning', slug: null, level: 'growing' },
      { name: 'Data Visualization', slug: null, level: 'growing' },
    ],
  },
  {
    label: 'Software Engineering',
    items: [
      { name: 'Version Control', slug: 'git', level: 'core' },
      { name: 'CI/CD', slug: 'githubactions', level: 'growing' },
      { name: 'PWA', slug: 'pwa', level: 'growing' },
      { name: 'Debugging', slug: null, level: 'core' },
      { name: 'Testing', slug: null, level: 'growing' },
      { name: 'API Integration', slug: null, level: 'core' },
      { name: 'SDLC concepts', slug: null, level: 'growing' },
      { name: 'Agile', slug: null, level: 'growing' },
    ],
  },
  {
    label: 'Artificial Intelligence',
    items: [
      { name: 'Python', slug: 'python', level: 'growing' },
      { name: 'Machine Learning Fundamentals', slug: null, level: 'growing' },
      { name: 'Natural Language Processing (NLP)', slug: null, level: 'growing' },
      { name: 'Predictive Modeling', slug: null, level: 'growing' },
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      { name: 'Figma', slug: 'figma', level: 'growing' },
      { name: 'Canva', slug: 'canva', level: 'growing' },
      { name: 'Git', slug: 'git', level: 'core' },
      { name: 'GitHub', slug: 'github', level: 'core' },
      { name: 'Vercel', slug: 'vercel', level: 'core' },
      { name: 'Render', slug: 'render', level: 'growing' },
      { name: 'Framer', slug: 'framer', level: 'growing' },
      { name: 'UI/UX Design', slug: null, level: 'growing' },
    ],
  },
  {
    label: 'SEO',
    items: [
      { name: 'SEO Optimization', slug: null, level: 'growing' },
      { name: 'Keyword Research', slug: null, level: 'growing' },
      { name: 'Content Structuring', slug: null, level: 'growing' },
    ],
  },
]

// Award carousel placeholders — high-res Unsplash mock URLs (swap for real assets later).
const U = (id) => `https://images.unsplash.com/photo-${id}?w=900&q=80&auto=format&fit=crop`
export const awards = [
  {
    rank: '1st', title: 'Robotics Innovation Challenge', event: 'Arduino Firefighting Robot', date: '2026',
    images: [U('1581092160562-40aa08e78837'), U('1518770660439-4636190af475'), U('1526374965328-7f61d4dc18c5')],
  },
  {
    rank: '1st', title: 'Cyber Security Poster Making', event: 'Poster Making Competition', date: '',
    images: [U('1550751827-4bd374c3f58b'), U('1510511459019-5dda7724fd87'), U('1563013544-824ae1b704d3')],
  },
  {
    rank: '2nd', title: 'ONGC Vigilance Week Debate', event: 'Debate Competition', date: '2024',
    images: [U('1505373877841-8d25f7d46678'), U('1517245386807-bb43f82c33c4'), U('1524178232363-1fb2b075b655')],
  },
  {
    rank: 'Best', title: 'Practical Presentation Award', event: 'Synergy', date: '2024',
    images: [U('1531482615713-2afd69097998'), U('1542744173-8e7e53415bb0'), U('1552664730-d307ca884978')],
  },
  {
    rank: 'Runner Up', title: 'Brain Booster', event: 'Brain Booster', date: '',
    images: [U('1488190211105-8b0e65b80b4e'), U('1456513080510-7bf3a84b82f8'), U('1454165804606-c3d57bc86b40')],
  },
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
  detail: 'Coordinated free medical checkups, diagnostic screenings, and treatment distributions for 2500+ underprivileged people.',
  stat: { value: 2500, suffix: '+', label: 'People Served' },
}

export const marqueeItems = [
  'REACT', 'NEXT.JS', 'NODE.JS', 'TYPESCRIPT', 'FULL-STACK', 'AI', 'OPEN FOR WORK',
]

export const nav = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Awards', href: '#awards' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]


// ============================================================
//  CASE STUDIES — deep-dive content for select projects
// ============================================================
export const caseStudies = {
  selfwinner: {
    slug: 'selfwinner',
    name: 'SelfWinner',
    problem: 'Placeholder: Students struggle to find reliable, affordable study materials...',
    decisions: [
      {
        title: 'Razorpay Payment Integration',
        description: 'Placeholder: Chose Razorpay for seamless UPI + card payments...',
      },
      {
        title: 'JWT + Google OAuth Authentication',
        description: 'Placeholder: Dual auth strategy for flexibility and security...',
      },
    ],
    media: [
      {
        src: '/images/selfwinner-payment-flow.png',
        alt: 'Placeholder: SelfWinner payment flow diagram showing user checkout to Razorpay callback',
      },
    ],
    improvements: [
      'Placeholder: Add subscription-based access tier for recurring revenue.',
      'Placeholder: Implement full-text search across notes with Elasticsearch.',
    ],
  },
  'robot-voting-arena': {
    slug: 'robot-voting-arena',
    name: 'Robot Voting Arena',
    problem: 'Placeholder: Live events need real-time audience participation...',
    decisions: [
      {
        title: 'WebSocket Strategy',
        description: 'Placeholder: Used WebSockets for sub-second vote propagation...',
      },
      {
        title: 'Leaderboard Ranking Logic',
        description: 'Placeholder: Server-side sorted set ensures consistent ordering...',
      },
    ],
    media: [
      {
        src: '/images/robot-voting-leaderboard.png',
        alt: 'Placeholder: Robot Voting Arena leaderboard update flow showing WebSocket broadcast',
      },
    ],
    improvements: [
      'Placeholder: Add historical round replay with animated score timelines.',
      'Placeholder: Implement rate limiting per user to prevent vote spamming.',
    ],
  },
}

// ============================================================
//  NOW CONTENT — "What I'm building now" section
// ============================================================
export const nowContent = 'Currently scaling and upgrading the SelfWinner platform.'

// ============================================================
//  LOGOS — marquee banner (simpleicons CDN slugs)
// ============================================================
export const marqueeLogos = [
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'Three.js', slug: 'threedotjs' },
  { name: 'GSAP', slug: 'greensock' },
  { name: 'Git', slug: 'git' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Vercel', slug: 'vercel' },
  { name: 'Figma', slug: 'figma' },
  { name: 'Python', slug: 'python' },
]

// ============================================================
//  TECH → brand-icon slug map (for project tags)
//  null / missing => renders text-only tag.
// ============================================================
export const techIcons = {
  'React.js': 'react',
  'React': 'react',
  'Node.js': 'nodedotjs',
  'MongoDB': 'mongodb',
  'JWT': 'jsonwebtokens',
  'Google OAuth': 'google',
  'Razorpay': 'razorpay',
  'Cloudinary': 'cloudinary',
  'Vite': 'vite',
  'React Three Fiber': 'threedotjs',
  'Three.js': 'threedotjs',
  'GSAP': 'greensock',
  'JavaScript': 'javascript',
  'HTML5': 'html5',
  'CSS3': 'css3',
  'Vercel': 'vercel',
  'Framer Motion': 'framer',
  'Email.js': 'maildotru',
  'TypeScript': 'typescript',
  'Tailwind CSS': 'tailwindcss',
  'Python': 'python',
  'Git': 'git',
  'GitHub': 'github',
}

export function techSlug(name) {
  return techIcons[name] || null
}

// ============================================================
//  SKILL PROFICIENCY — deterministic pseudo-random score /5
//  ("randomly scaled" but stable per skill, lightly biased by level)
// ============================================================
function scoreFor(name, level) {
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0
  // core: 4–5, growing: 2–4
  return level === 'core' ? 4 + (h % 2) : 2 + (h % 3)
}

export const skillCategoriesScored = skillCategories.map((c) => ({
  ...c,
  items: c.items.map((s) => ({ ...s, score: scoreFor(s.name, s.level) })),
}))

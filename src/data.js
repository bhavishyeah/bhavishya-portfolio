export const profile = {
  name: 'Bhavishya Verma',
  shortName: 'Bhavishya',
  role: 'React.js & Full-Stack Developer',
  location: 'Dehradun, India',
  email: 'bhavishya@example.com',
  tagline: 'I build web products that feel engineered, not assembled.',
  bio1: "19-year-old BCA student and full-stack developer who likes building products with strong structure, premium detail, and long-term thinking.",
  bio2: "I work across frontend, backend, payments, databases, auth, real-time systems, and AI integrations. My style is simple: make it functional, beautiful, and memorable.",
  status: 'Open for freelance, internships & full-time roles',
}

export const stats = [
  { value: '20+', label: 'Projects shipped' },
  { value: '10+', label: 'Core technologies' },
  { value: '2.5k+', label: 'Community reach' },
]

export const facts = [
  { label: 'Location', value: 'Aligarh / Dehradun, India' },
  { label: 'Role', value: 'Student + Full-Stack Developer' },
  { label: 'Focus', value: 'Web Apps, AI, Product UX' },
  { label: 'Strength', value: 'End-to-end product building' },
  { label: 'Style', value: 'Polished, premium, memorable' },
  { label: 'Status', value: 'Open to opportunities' },
]

export const projects = [
  {
    index: '01',
    tag: 'Featured',
    name: 'SelfWinner',
    tagline: 'Notes-selling platform with protected viewer, payments, and premium UX.',
    desc: 'Built a monetized study platform with secure PDF viewing, gated access, order flows, user auth, and polished onboarding for a better student buying experience.',
    bullets: [
      'Integrated authentication, Razorpay payment flow, and controlled note delivery.',
      'Created viewer-first UX focused on trust, clarity, and conversion.',
      'Structured product and user data for scaling beyond a simple notes site.',
    ],
    stack: ['Laravel', 'Razorpay', 'PDF Viewer', 'MySQL', 'Auth'],
    category: 'Product / Education / Payments',
    accent: '#c8ff4d',
  },
  {
    index: '02',
    tag: 'Social',
    name: 'Cherrish',
    tagline: 'Anonymous confession platform with social interaction and expressive UI.',
    desc: 'Designed a social product centered on pseudonymous posting, interactions, and moderation-friendly structure while keeping the experience emotionally engaging.',
    bullets: [
      'Built anonymous content mechanics with profile and post interactions.',
      'Focused on playful interface choices without losing clarity.',
      'Handled scalable content rendering and engagement flow design.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'REST API'],
    category: 'Community / Social / UX',
    accent: '#6e6bff',
  },
  {
    index: '03',
    tag: 'Realtime',
    name: 'Robot Voting Arena',
    tagline: 'Real-time voting experience with live leaderboards and event energy.',
    desc: 'Created an engaging arena-style system where live votes updated rankings instantly, making the product feel event-driven and competitive.',
    bullets: [
      'Implemented live leaderboard updates and fast UI feedback loops.',
      'Designed audience-friendly interaction flow for public participation.',
      'Balanced performance with theatrical product presentation.',
    ],
    stack: ['WebSockets', 'Realtime', 'Node.js', 'Leaderboard'],
    category: 'Realtime / Events / Gamified',
    accent: '#ff7a59',
  },
]

export const experience = [
  {
    period: 'May 2026 — Jul 2026',
    role: 'Web Development Intern',
    company: 'She Can Foundation',
    bullets: [
      'Built and polished the official foundation website with a modern, mission-aligned experience.',
      'Improved structure, responsiveness, and storytelling across content sections.',
      'Contributed production-ready frontend work under real organizational constraints.',
    ],
  },
  {
    period: 'Current',
    role: 'Freelance Full-Stack Developer',
    company: 'Independent',
    bullets: [
      'Builds client and self-initiated products across education, social, and event use cases.',
      'Handles frontend, backend, integrations, database design, and deployment.',
      'Works with React, Next.js, Laravel, Node.js, APIs, auth, and payment systems.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Computer Applications',
  school: 'Graphic Era Hill University, Dehradun',
  grad: 'Graduation: 2027',
  cgpa: '8.25',
}

export const awards = [
  '1st Prize at Tech Sonance 2.0, Jigyasa.',
  '2nd Prize in Toy Car Model Making at Smart India Hackathon activity.',
  'NSS volunteer serving 2,500+ people across camps and drives.',
  'Organized workshops and AI sessions for student communities.',
]

export const stack = [
  { name: 'JavaScript', cat: 'Language', icon: 'javascript', level: 'core' },
  { name: 'TypeScript', cat: 'Language', icon: 'typescript', level: 'growing' },
  { name: 'Python', cat: 'Language', icon: 'python', level: 'growing' },
  { name: 'React', cat: 'Frontend', icon: 'react', level: 'core' },
  { name: 'Next.js', cat: 'Frontend', icon: 'nextdotjs', level: 'core' },
  { name: 'Laravel', cat: 'Backend', icon: 'laravel', level: 'core' },
  { name: 'Node.js', cat: 'Backend', icon: 'node.js', level: 'core' },
  { name: 'Express', cat: 'Backend', icon: 'express', level: 'growing' },
  { name: 'MongoDB', cat: 'Database', icon: 'mongodb', level: 'core' },
  { name: 'MySQL', cat: 'Database', icon: 'mysql', level: 'core' },
  { name: 'Supabase', cat: 'Backend Service', icon: 'supabase', level: 'growing' },
  { name: 'Firebase', cat: 'Backend Service', icon: 'firebase', level: 'growing' },
  { name: 'Git', cat: 'Workflow', icon: 'git', level: 'core' },
  { name: 'GitHub', cat: 'Workflow', icon: 'github', level: 'core' },
  { name: 'Vercel', cat: 'Deployment', icon: 'vercel', level: 'growing' },
  { name: 'Railway', cat: 'Deployment', icon: 'railway', level: 'growing' },
  { name: 'Cloudinary', cat: 'Media', icon: 'cloudinary', level: 'growing' },
  { name: 'Google Auth', cat: 'Authentication', icon: 'google', level: 'growing' },
  { name: 'Razorpay', cat: 'Payments', icon: 'webmoney', level: 'core' },
  { name: 'WebSockets', cat: 'Realtime', icon: 'socketdotio', level: 'growing' },
  { name: 'Gemini AI', cat: 'AI Integration', icon: 'googlegemini', level: 'growing' },
  { name: 'Three.js', cat: 'Graphics', icon: 'threedotjs', level: 'growing' },
  { name: 'GSAP', cat: 'Animation', icon: 'greensock', level: 'growing' },
  { name: 'Tailwind CSS', cat: 'Frontend', icon: 'tailwindcss', level: 'core' },
  { name: 'Framer Motion', cat: 'Animation', icon: 'framer', level: 'growing' },
]

export const skillGroups = [
  { label: 'Frontend', items: ['HTML', 'CSS', 'React', 'Next.js', 'Responsive UI', 'Animations'] },
  { label: 'Backend', items: ['Laravel', 'Node.js', 'Express', 'REST APIs', 'Auth'] },
  { label: 'Data & Infra', items: ['MongoDB', 'MySQL', 'Supabase', 'Firebase', 'Deployment'] },
  { label: 'Specialties', items: ['Razorpay', 'Cloudinary', 'WebSockets', 'PDF Viewer', 'AI Features'] },
]

export const nav = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

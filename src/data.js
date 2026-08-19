// ---------------------------------------------------------------------------
// Edit everything in this file to personalize the portfolio. Nothing else
// needs to change for a basic content update.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Doha Harby',
  role: 'Full Stack Developer',
  tagline: 'I build fast, reliable web apps end-to-end — from a pixel-perfect React interface to the API and database behind it.',
  location: 'Menofia, Egypt',
  email: 'dohaharby8@gmail.com',
  phone: '+20 155 767 2021',
  cvPath: '/Doha_Ahmed_Harby_Resume.pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/Doha-Harby', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/doha-harby-4a1602266/', icon: 'linkedin' },
    { label: 'WhatsApp', url: 'https://wa.me/201557672021', icon: 'whatsapp' },
  ],
}

export const about = {
  bio: [
    "I'm a full stack developer who recently completed an intensive full-stack training program (Digital Egypt Builders Initiative), building hands-on experience with React on the front end and .NET / SQL Server on the back end.",
    "I care about clean component architecture, readable code, and interfaces that feel obvious to use. I'm looking for opportunities where I can keep growing as a full stack developer and contribute to real, production-facing products.",
  ],
  facts: [
    { label: 'Experience', value: '1+ years' },
    { label: 'Projects shipped', value: '5+' },
    { label: 'Main stack', value: 'React · .NET · SQL Server' },
    { label: 'Based in', value: 'Menofia, Egypt (remote-friendly)' },
  ],
}

export const education = [
  {
    type: 'education',
    title: 'B.Sc. in Computer Science',
    place: 'Sadat City University, Faculty of Computers and Artificial Intelligence',
    period: '2019 — Present',
    description: '',
  },
  {
    type: 'certificate',
    title: 'Full Stack .NET Development',
    place: 'Digital Egypt Builders Initiative (DEBI)',
    period: 'Dec 2025',
    description: 'Intensive full-stack development training covering C#, .NET, ASP.NET Core, SQL Server, REST APIs, React.js, and modern software development practices.',
  },
  {
    type: 'certificate',
    title: 'HCIA Big Data',
    place: 'Huawei',
    period: 'Aug 2024',
    description: 'Core big data concepts, cloud fundamentals, and basic deployment/security practices.',
  },
]

// Replaces a traditional work-history timeline with training/internship
// experience, since that best reflects where Doha is right now.
export const training = [
  {
    title: 'Full Stack .NET Development Track',
    place: 'Digital Egypt Builders Initiative (DEBI)',
    period: 'Dec 2025',
    points: [
      'Completed an intensive, project-based full-stack program covering C#, ASP.NET Core, SQL Server, REST APIs, and React.js.',
      'Applied modern software development practices — clean code structure, version control, and API design — across hands-on projects.',
      'Built full-stack features end-to-end: React front ends wired to ASP.NET Core APIs backed by SQL Server.',
    ],
  },
]

// Category values are used by the Projects filter — keep them consistent.
export const projectCategories = ['All', 'Frontend', 'Backend', 'Fullstack']

export const projects = [
 {
  title: 'AutoHub',
  description: 'Full-stack car marketplace with secure authentication, role-based access, advanced filtering, and real-time Stripe payments.',
  category: 'Fullstack',
  tech: ['ASP.NET Core MVC', 'SQL Server', 'JWT', 'Stripe', 'Bootstrap 5'],
  image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop',
  period: 'Oct 2025 – Dec 2025',
  live: 'https://auto-hub.runasp.net',
  github: 'https://github.com/Hagar992/AutoHub-System',
},

{
  title: 'Tasaneem  — Patient Management System',
  description: 'Production-deployed patient management system for physiotherapy and nutrition clinics with CRUD, soft delete, and medical progress tracking.',
  category: 'Fullstack',
  tech: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'AutoMapper'],
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
  period: 'Oct 2025 – Dec 2025',
  live: 'https://testdoctortasneem.runasp.net',
  github: 'https://github.com/Doha-Harby/TasneemWebSite-Using-3tier-Architecture',
},
]

export const skills = {
  Frontend: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS'],
  Backend: ['C#', '.NET / ASP.NET Core', 'REST APIs'],
  'Databases & Tools': ['SQL Server', 'Git & GitHub'],
}

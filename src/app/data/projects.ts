export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  links: {
    demo?: string
    github?: string
    docs?: string
    store?: string
  }
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall'
  featured: boolean
  image?: string
  color?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations with GSAP and responsive design.",
    technologies: ["Next.js", "TypeScript", "GSAP", "Tailwind"],
    links: {
      demo: "#",
      github: "#"
    },
    size: "large",
    featured: true,
    color: "bg-gradient-to-br from-blue-600 to-purple-700"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    links: {
      demo: "#",
      github: "#"
    },
    size: "medium",
    featured: true,
    color: "bg-gradient-to-br from-green-600 to-teal-700"
  },
  {
    id: 3,
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for data visualization and analytics using modern data science tools.",
    technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
    links: {
      demo: "#",
      github: "#"
    },
    size: "wide",
    featured: false,
    color: "bg-gradient-to-br from-orange-600 to-red-700"
  },
  {
    id: 4,
    title: "Task Manager",
    description: "Collaborative task management app with real-time updates.",
    technologies: ["Vue.js", "Firebase", "Socket.io"],
    links: {
      demo: "#",
      github: "#"
    },
    size: "small",
    featured: false,
    color: "bg-gradient-to-br from-indigo-600 to-blue-700"
  },
  {
    id: 5,
    title: "Weather API",
    description: "RESTful API for weather forecasting with location services and historical data analysis.",
    technologies: ["Express.js", "PostgreSQL", "Redis"],
    links: {
      docs: "#",
      github: "#"
    },
    size: "tall",
    featured: false,
    color: "bg-gradient-to-br from-cyan-600 to-blue-700"
  },
  {
    id: 6,
    title: "Mobile Expense Tracker",
    description: "Cross-platform mobile app for expense tracking with budget management and analytics.",
    technologies: ["React Native", "Expo", "SQLite"],
    links: {
      store: "#",
      github: "#"
    },
    size: "medium",
    featured: false,
    color: "bg-gradient-to-br from-emerald-600 to-green-700"
  },
  {
    id: 7,
    title: "AI Chatbot",
    description: "Intelligent chatbot using natural language processing.",
    technologies: ["Python", "TensorFlow", "FastAPI"],
    links: {
      demo: "#",
      github: "#"
    },
    size: "small",
    featured: false,
    color: "bg-gradient-to-br from-purple-600 to-pink-700"
  },
  {
    id: 8,
    title: "Blog CMS",
    description: "Content management system for blogs with markdown support.",
    technologies: ["React", "Strapi", "GraphQL"],
    links: {
      demo: "#",
      github: "#"
    },
    size: "small",
    featured: false,
    color: "bg-gradient-to-br from-rose-600 to-pink-700"
  }
]
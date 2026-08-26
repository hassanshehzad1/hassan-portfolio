import { Service } from '@/types/portfolio';

export const services: Service[] = [
  {
    id: 'fullstack-dev',
    title: 'Full Stack Development',
    description: 'Complete full-stack application development from frontend to backend with modern technologies.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Full Stack'],
    icon: 'Layers',
    category: 'Full Stack',
  },
  {
    id: 'api-dev',
    title: 'API Development & Integration',
    description: 'Design and development of secure, scalable APIs and third-party API integrations.',
    technologies: ['APIs', 'Node.js', 'Express.js', 'API Integration', 'JWT'],
    icon: 'Database',
    category: 'APIs',
  },
  {
    id: 'saas-mern',
    title: 'SaaS Application Development',
    description: 'Development of scalable SaaS applications using modern MERN-based architecture.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'SaaS', 'Multi-tenant'],
    icon: 'Cloud',
    category: 'SaaS',
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile application development for iOS and Android using modern frameworks.',
    technologies: ['React Native', 'Expo', 'JavaScript', 'TypeScript', 'Mobile APIs'],
    icon: 'Smartphone',
    category: 'Mobile',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Cloud infrastructure, deployment, and scalable application hosting on cloud platforms.',
    technologies: ['AWS', 'Vercel', 'Netlify', 'Docker', 'Cloud Deployment'],
    icon: 'Cloud',
    category: 'Cloud',
  },
  {
    id: 'ai-powered-dev',
    title: 'AI-Powered Applications Development',
    description: 'Building intelligent applications with AI capabilities including LLM integration, automation, and smart features.',
    technologies: ['LLMs', 'AI Integration', 'Python', 'Automation', 'Smart Features'],
    icon: 'Brain',
    category: 'AI',
  },
  {
    id: 'mvp-dev',
    title: 'MVP (Minimal Viable Product) Development',
    description: 'Rapid development of MVPs to validate ideas, test markets, and launch products quickly with core features.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Rapid Prototyping', 'Product Launch'],
    icon: 'Zap',
    category: 'MVP',
  },
];

export const serviceCategories = [
  'All',
  'Full Stack',
  'APIs',
  'SaaS',
  'Mobile',
  'Cloud',
  'AI',
  'MVP',
];

export const growingExpertise = [
  {
    id: 'ml-growing',
    title: 'Machine Learning',
    description: 'Building expertise in machine learning algorithms and applications.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    id: 'ai-agents-growing',
    title: 'AI Agents',
    description: 'Developing AI agent systems and LLM integration.',
    technologies: ['LLMs', 'AI Agents', 'RAG', 'Automation'],
  },
  {
    id: 'llm-apps-growing',
    title: 'LLM Applications',
    description: 'Building applications powered by Large Language Models.',
    technologies: ['LLMs', 'Prompt Engineering', 'RAG', 'AI Integration'],
  },
  {
    id: 'rag-growing',
    title: 'RAG',
    description: 'Implementing Retrieval-Augmented Generation systems.',
    technologies: ['RAG', 'Vector Databases', 'LLMs', 'Semantic Search'],
  },
  {
    id: 'ai-powered-growing',
    title: 'AI-Powered Applications',
    description: 'Creating intelligent applications with AI capabilities.',
    technologies: ['AI Integration', 'LLMs', 'Automation', 'Smart Features'],
  },
  {
    id: 'n8n-growing',
    title: 'n8n Automation',
    description: 'Workflow automation and intelligent system integration.',
    technologies: ['n8n', 'Workflow Automation', 'APIs', 'Integration'],
  },
  {
    id: 'data-science-growing',
    title: 'Data Science',
    description: 'Data analysis, visualization, and insights generation.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Data Analysis', 'Visualization'],
  },
];

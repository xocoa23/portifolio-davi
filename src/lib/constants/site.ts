import { NavItem } from '@/types'

/**
 * Site-wide configuration and metadata
 */
export const SITE_CONFIG = {
  name: 'Davi Reis',
  title: 'Davi Reis - Estudante de ADS & Desenvolvedor',
  description: 'Estudante apaixonado por tecnologia e inovação, focado em desenvolvimento de software e IA. Cursando Análise e Desenvolvimento de Sistemas na Uniopet.',
  url: 'https://davi-reis-portfolio.vercel.app',
  keywords: [
    'desenvolvedor',
    'full stack',
    'estudante',
    'análise e desenvolvimento de sistemas',
    'python',
    'javascript',
    'html',
    'css',
    'inteligência artificial',
    'IA',
    'automação',
    'curitiba',
  ],
  author: {
    name: 'Davi Reis',
    email: 'davideoliveiralr+portfolio@gmail.com',
    phone: '+55 (41) 99162-6188',
    location: 'Curitiba, Paraná - Brasil',
    address: 'Rua Ivo Leão, 250 - Curitiba, PR',
    cep: '80030-180',
    github: 'https://github.com/xocoa23',
    linkedin: 'https://www.linkedin.com/in/davi-reis-95376b2a3/',
    whatsapp: 'https://wa.me/5541991626188',
  },
  education: {
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Uniopet',
    location: 'Curitiba, Paraná',
    period: 'Cursando até 2027',
    status: 'Em andamento',
  },
  social: {
    github: 'https://github.com/xocoa23',
    linkedin: 'https://www.linkedin.com/in/davi-reis-95376b2a3/',
    email: 'https://mail.google.com/mail/?view=cm&to=davideoliveiralr%2Bportfolio@gmail.com',
  },
}

/**
 * Navigation items for the site header
 */
export const NAV_ITEMS: NavItem[] = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/about' },
  { name: 'Projetos', href: '/projects' },
  { name: 'Contato', href: '/contact' },
]

/**
 * Footer quick links
 */
export const FOOTER_LINKS = {
  navigation: NAV_ITEMS,
  legal: [
    { name: 'Política de Privacidade', href: '/privacy' },
    { name: 'Termos de Uso', href: '/terms' },
  ],
}

/**
 * Project filter categories
 */
export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'Todos' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'ai', name: 'IA & Automação' },
] as const

/**
 * Copyright text
 */
export const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} ${SITE_CONFIG.name}. Todos os direitos reservados.`

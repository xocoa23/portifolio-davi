import {
  Code2,
  Database,
  Smartphone,
} from 'lucide-react'
import { Skill, SkillCategory } from '@/types'

/**
 * Main skills displayed on About page with proficiency levels
 */
export const skills: Skill[] = [
  { name: 'HTML', level: 80, category: 'Frontend' },
  { name: 'CSS', level: 75, category: 'Frontend' },
  { name: 'JavaScript', level: 70, category: 'Frontend' },
  { name: 'TypeScript', level: 35, category: 'Frontend' },
  { name: 'Python', level: 65, category: 'Backend' },
  { name: 'C', level: 55, category: 'Backend' },
  { name: 'Node.js', level: 35, category: 'Backend' },
  { name: 'PHP', level: 40, category: 'Backend' },
  { name: 'SQL / MySQL', level: 45, category: 'Banco de Dados' },
  { name: 'Java', level: 45, category: 'Backend' },
  { name: 'Desenvolvimento com IA', level: 75, category: 'Ferramentas' },
]

/**
 * Skill categories displayed on Home page
 */
export const homeSkills: SkillCategory[] = [
  {
    name: 'Web',
    description: 'HTML, CSS, JavaScript',
    icon: Smartphone,
    color: 'text-blue-400'
  },
  {
    name: 'Programação',
    description: 'Python, C, Java',
    icon: Code2,
    color: 'text-green-400'
  },
  {
    name: 'Banco de Dados',
    description: 'SQL, MySQL',
    icon: Database,
    color: 'text-purple-400'
  },
]

/**
 * Get skills by category
 */
export const getSkillsByCategory = (category: string) =>
  skills.filter(skill => skill.category === category)

/**
 * Get all unique skill categories
 */
export const getSkillCategories = () =>
  Array.from(new Set(skills.map(skill => skill.category)))

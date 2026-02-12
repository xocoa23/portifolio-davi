import { LucideIcon } from 'lucide-react'

// Project types
export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: 'frontend' | 'backend' | 'fullstack'
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
}

// Skill types
export interface Skill {
  name: string
  level: number
  category: string
}

export interface SkillCategory {
  name: string
  description: string
  icon: LucideIcon
  color: string
}

// Experience types
export interface Experience {
  title: string
  company: string
  period: string
  description: string
  icon: LucideIcon
}

// Statistics types
export interface Statistic {
  label: string
  value: string
  icon: LucideIcon
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

// Theme types
export type Theme = 'light' | 'dark'

// Navigation types
export interface NavItem {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: LucideIcon
  color?: string
}

// Contact info types
export interface ContactInfo {
  icon: LucideIcon
  title: string
  value: string
  href?: string
}

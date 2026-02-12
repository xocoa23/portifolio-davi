import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
} from 'lucide-react'
import { ContactInfo, SocialLink } from '@/types'

/**
 * Contact information displayed on Contact page
 */
export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    value: 'davideoliveiralr+portfolio@gmail.com',
    href: 'mailto:davideoliveiralr+portfolio@gmail.com',
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: '+55 (41) 99162-6188',
    href: 'tel:+5541991626188',
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'Curitiba, PR - Brasil',
    href: '#',
  },
]

/**
 * Social media links used throughout the site
 */
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/xocoa23',
    icon: Github,
    color: 'hover:text-gray-300',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/davi-reis-95376b2a3/',
    icon: Linkedin,
    color: 'hover:text-blue-400',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5541991626188',
    icon: MessageCircle,
    color: 'hover:text-green-400',
  },
]

/**
 * Get social link by name
 */
export const getSocialLink = (name: string) =>
  socialLinks.find(link => link.name.toLowerCase() === name.toLowerCase())

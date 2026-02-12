import { Award, Users, Clock, CheckCircle } from 'lucide-react'
import { Statistic } from '@/types'

/**
 * Statistics displayed on About page
 */
export const statistics: Statistic[] = [
  {
    label: 'Projetos Realizados',
    value: '4+',
    icon: Award
  },
  {
    label: 'Tecnologias Utilizadas',
    value: '10+',
    icon: CheckCircle
  },
  {
    label: 'Experiência Profissional',
    value: '2+',
    icon: Clock
  },
  {
    label: 'Formação',
    value: 'ADS',
    icon: Users
  },
]

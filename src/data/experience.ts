import { Code2, Smartphone, Database, GraduationCap } from 'lucide-react'
import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    title: 'Estagiário - Setor EAD',
    company: 'UniBrasil',
    period: '2024 - Presente',
    description: 'Atuação no setor de Educação a Distância, gerenciando o Ambiente Virtual de Aprendizagem (AVA), gerenciamento de usuários e resolução de protocolos no TOTVS, organizando planilhas e desenvolvendo automações para otimizar processos internos.',
    icon: Code2,
  },
  {
    title: 'Jovem Aprendiz - Suporte Técnico',
    company: 'MADERO',
    period: '2020 - 2021',
    description: 'Suporte técnico em TI, atendimento de chamados, manutenção preventiva e corretiva em totens de autoatendimento e equipamentos de informática.',
    icon: Smartphone,
  },
  {
    title: 'Estudante - Análise e Desenvolvimento de Sistemas',
    company: 'Uniopet',
    period: '2025 - 2027',
    description: 'Cursando graduação em ADS com foco em desenvolvimento de software, algoritmos, estruturas de dados, banco de dados e engenharia de software.',
    icon: GraduationCap,
  },
]

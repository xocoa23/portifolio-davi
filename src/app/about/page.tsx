'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Smartphone,
  Globe,
  Award,
  Users,
  Clock,
  CheckCircle,
  Download
} from 'lucide-react'
import { skills } from '@/data/skills'
import { experiences } from '@/data/experience'
import { statistics } from '@/data/statistics'
import type { Skill, Experience } from '@/types'

const AboutPage = () => {
  // Dados importados de src/data/
  const stats = statistics

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-dark-900 transition-colors">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Sobre</span>
              <span className="text-gray-900 dark:text-white"> Mim</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estudante de tecnologia, sempre buscando
              aprender e criar soluções que fazem a diferença.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Minha História
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Minha jornada na tecnologia começou em 2020 como Jovem Aprendiz na MADERO,
                  onde atuei com suporte técnico e manutenção de equipamentos. Foi ali que
                  descobri minha paixão por resolver problemas com tecnologia.
                </p>
                <p>
                  Atualmente curso Análise e Desenvolvimento de Sistemas na Uniopet em
                  Curitiba, e estou estagiando na UniBrasil no setor de Educação a Distância,
                  onde trabalho com o AVA, automações e organização de processos.
                </p>
                <p>
                  Tenho experiência prática com HTML, CSS, JavaScript, Python e C, além de
                  noções em Java, SQL e PHP. Busco sempre evoluir, criando projetos práticos
                  e explorando novas tecnologias como IA e automação.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/cv-davi.pdf"
                  download
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Baixar CV</span>
                </a>
                <a
                  href="/contact"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>Entrar em Contato</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 dark:from-primary-500/20 dark:to-primary-600/20 rounded-2xl p-8 border border-gray-200 dark:border-transparent">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Estatísticas</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="p-4 bg-gray-50 dark:bg-dark-700/50 rounded-lg">
                          <stat.icon className="h-8 w-8 text-primary-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Habilidades Técnicas
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Tecnologias e ferramentas que domino para criar soluções completas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="space-y-1"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 dark:text-white font-medium text-sm">{skill.name}</span>
                    <span className="text-primary-500 dark:text-primary-400 font-semibold text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-1.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-1.5 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Experiência Profissional
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Minha jornada profissional e os projetos que moldaram minha carreira
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 dark:bg-dark-700/30 hover:bg-gray-100 dark:hover:bg-dark-700/50 rounded-xl transition-all duration-300 border border-gray-200 dark:border-transparent"
                >
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg">
                      <exp.icon className="h-8 w-8 text-primary-500 dark:text-primary-400" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-primary-500 dark:text-primary-400 font-medium">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { StarField } from '@/components/ui/StarField'
import { homeSkills } from '@/data/skills'
import { socialLinks } from '@/data/contact'
import { SITE_CONFIG } from '@/lib/constants/site'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        {/* Star Field Background - Interactive with mouse */}
        <StarField />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                <span className="gradient-text">{SITE_CONFIG.name}</span>
                <br />
                <span className="text-gray-900 dark:text-white">Estudante de</span>
                <br />
                <span className="gradient-text">ADS & Dev</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Link href="/projects">
                  <Button variant="primary" size="lg" className="group">
                    <span>Ver Projetos</span>
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    Entrar em Contato
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 pt-8">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-100 dark:bg-white/10 hover:bg-primary-500 dark:hover:bg-primary-500 rounded-full transition-all duration-300 group"
                    aria-label={link.name}
                  >
                    <link.icon className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-primary-400 dark:border-primary-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-400 dark:bg-primary-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100 dark:bg-dark-800/50">
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
                Áreas de Conhecimento
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Tecnologias e habilidades que estudo e aplico nos meus projetos
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {homeSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="h-full p-6 bg-white dark:bg-dark-700/50 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 dark:border-transparent flex flex-col items-center justify-center">
                    <skill.icon className={`h-12 w-12 mx-auto mb-4 ${skill.color}`} />
                    <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Vamos conversar?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Estou aberto a oportunidades, projetos e parcerias na área de tecnologia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full group">
                  <span>Vamos Conversar</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>

              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open('/cv-davi.pdf', '_blank')}
              >
                <Download className="h-5 w-5 mr-2" />
                <span>Baixar CV</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

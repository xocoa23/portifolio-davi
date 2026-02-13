'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Filter,
  Search,
  Code2,
  Smartphone,
  Database,
  Globe
} from 'lucide-react'
import { projects } from '@/data/projects'
import type { Project } from '@/types'

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'Todos', icon: Code2 },
    { id: 'frontend', name: 'Frontend', icon: Smartphone },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'fullstack', name: 'Full Stack', icon: Globe },
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredProjects = projects.filter(project => project.featured)

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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Meus</span>
              <span className="text-gray-900 dark:text-white"> Projetos</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Uma coleção dos projetos que desenvolvi, mostrando minha evolução
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Projetos em Destaque
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto">
                Os projetos que mais me orgulho e que demonstram minhas habilidades
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-gray-50 dark:bg-dark-700/30 hover:bg-gray-100 dark:hover:bg-dark-700/50 rounded-xl overflow-hidden transition-all duration-300 card-hover border border-gray-200 dark:border-transparent"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={640}
                      height={160}
                      className="w-full h-40 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                        Destaque
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-200 dark:bg-dark-600 text-primary-500 dark:text-primary-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center space-x-2 text-xs px-4 py-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Ver Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center space-x-2 text-xs px-4 py-2"
                      >
                        <Github className="h-3 w-3" />
                        <span>Código</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Todos os Projetos
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto">
                Explore todos os meus projetos e veja as tecnologias que utilizo
              </p>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
                    }`}
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar projetos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-dark-700/30 hover:bg-gray-50 dark:hover:bg-dark-700/50 rounded-xl overflow-hidden transition-all duration-300 card-hover border border-gray-200 dark:border-transparent"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={640}
                      height={160}
                      className="w-full h-40 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                          ★
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-primary-500 dark:text-primary-400 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-500 dark:text-gray-400 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary inline-flex items-center justify-center space-x-2 text-sm py-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-secondary inline-flex items-center justify-center space-x-2 text-sm py-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Nenhum projeto encontrado
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tente ajustar os filtros ou termo de busca
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage

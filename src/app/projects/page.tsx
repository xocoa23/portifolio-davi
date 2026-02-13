'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Filter,
  Search,
  Code2,
  Smartphone,
  Database,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { projects } from '@/data/projects'
import type { Project } from '@/types'

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState(0)

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

  const paginate = useCallback((newDirection: number) => {
    setSlideDirection(newDirection)
    setCurrentSlide((prev) => {
      const next = prev + newDirection
      if (next < 0) return featuredProjects.length - 1
      if (next >= featuredProjects.length) return 0
      return next
    })
  }, [featuredProjects.length])

  const goToSlide = useCallback((index: number) => {
    setSlideDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }, [currentSlide])

  const handleDragEnd = useCallback((_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50
    const velocityThreshold = 500
    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      paginate(1)
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      paginate(-1)
    }
  }, [paginate])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -400 : 400,
      opacity: 0,
      scale: 0.95,
    }),
  }

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
            </div>

            {/* Carousel */}
            <div className="relative max-w-2xl mx-auto">
              {/* Arrow Buttons */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 sm:-translate-x-14 z-10 p-2.5 rounded-full bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-600 text-gray-700 dark:text-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200/50 dark:border-dark-500/50"
                aria-label="Projeto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 sm:translate-x-14 z-10 p-2.5 rounded-full bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-600 text-gray-700 dark:text-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200/50 dark:border-dark-500/50"
                aria-label="Próximo projeto"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Slide with drag */}
              <div className="overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait" custom={slideDirection}>
                  <motion.div
                    key={currentSlide}
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragEnd={handleDragEnd}
                    className="bg-gray-50 dark:bg-dark-700/30 rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-600/50 shadow-lg cursor-grab active:cursor-grabbing select-none"
                  >
                    {/* Image with gradient overlay */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={featuredProjects[currentSlide].image}
                        alt={featuredProjects[currentSlide].title}
                        width={800}
                        height={320}
                        className="w-full h-52 sm:h-64 object-cover object-top pointer-events-none"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 bg-primary-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-md">
                          Destaque
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4">
                        <span className="text-white/70 text-xs font-medium">
                          {currentSlide + 1} / {featuredProjects.length}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                          {featuredProjects[currentSlide].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {featuredProjects[currentSlide].description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {featuredProjects[currentSlide].technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-primary-500/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full border border-primary-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-3 pt-1">
                        <a
                          href={featuredProjects[currentSlide].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center space-x-2 text-xs px-5 py-2.5 rounded-lg"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>Ver Demo</span>
                        </a>
                        <a
                          href={featuredProjects[currentSlide].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary inline-flex items-center space-x-2 text-xs px-5 py-2.5 rounded-lg"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Código</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 h-2.5 bg-primary-500 shadow-md shadow-primary-500/30'
                        : 'w-2.5 h-2.5 bg-gray-300 dark:bg-dark-600 hover:bg-primary-300 dark:hover:bg-primary-700'
                    }`}
                    aria-label={`Ir para projeto ${index + 1}`}
                  />
                ))}
              </div>

              {/* Drag hint */}
              <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-3">
                Arraste para navegar
              </p>
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

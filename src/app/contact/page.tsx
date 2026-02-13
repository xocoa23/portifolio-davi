'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MessageCircle } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { Alert } from '@/components/ui/Alert'
import { useContactForm } from '@/hooks/useContactForm'
import { contactInfo, socialLinks } from '@/data/contact'
import { ContactFormData } from '@/types'
import { SITE_CONFIG } from '@/lib/constants/site'

export default function ContactPage() {
  const { submitForm, status, errors, resetForm } = useContactForm()
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await submitForm(formData)
    if (result.success) {
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
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
              <span className="gradient-text">Entre em</span>
              <span className="text-gray-900 dark:text-white"> Contato</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Vamos conversar sobre seu próximo projeto! Estou sempre aberto a
              novas oportunidades e desafios interessantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Vamos Conversar
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  Estou sempre interessado em novos projetos e oportunidades.
                  Se você tem uma ideia ou precisa de ajuda com desenvolvimento,
                  não hesite em entrar em contato!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-dark-700/30 hover:bg-gray-100 dark:hover:bg-dark-700/50 rounded-lg transition-all duration-300 group"
                  >
                    <div className="p-2 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors duration-300">
                      <info.icon className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-semibold text-sm">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Redes Sociais
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-gray-50 dark:bg-dark-700/30 hover:bg-gray-100 dark:hover:bg-dark-700/50 rounded-lg transition-all duration-300 ${link.color}`}
                      aria-label={link.name}
                    >
                      <link.icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark-700/30 rounded-xl p-6 border border-gray-200 dark:border-dark-600"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Envie uma Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Nome"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    placeholder="Seu nome completo"
                    required
                  />

                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <Input
                  label="Assunto"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  error={errors.subject}
                  placeholder="Qual é o assunto da sua mensagem?"
                  required
                />

                <Textarea
                  label="Mensagem"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  error={errors.message}
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                  rows={6}
                  required
                />

                {/* Status Messages */}
                {status === 'success' && (
                  <Alert variant="success" title="Sucesso!">
                    Mensagem enviada com sucesso! Entrarei em contato em breve.
                  </Alert>
                )}

                {status === 'error' && !Object.keys(errors).length && (
                  <Alert variant="error" title="Erro">
                    Erro ao enviar mensagem. Por favor, tente novamente.
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full"
                  isLoading={status === 'loading'}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Pronto para começar?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base max-w-xl mx-auto">
              Vamos trabalhar juntos para criar algo incrível que faça a diferença
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="md"
                onClick={() => window.open('mailto:davideoliveira.lr@gmail.com', '_blank')}
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>Enviar Email</span>
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={() => window.open(SITE_CONFIG.author.whatsapp, '_blank')}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                <span>WhatsApp</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

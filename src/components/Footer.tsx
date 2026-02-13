import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/xocoa23',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/davi-reis-95376b2a3/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:davideoliveira.lr@gmail.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-dark-800 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/images/icons/logo-davi.png"
                alt="Logo DR"
                width={32}
                height={32}
                className="scale-[2.5] translate-y-[8%] group-hover:scale-[2.7] transition-transform duration-300"
              />
            </div>
            <span className="text-lg font-bold gradient-text">Davi</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Davi. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-dark-700 hover:bg-primary-500 rounded-lg transition-all duration-300 group"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://portifoliodavi-liard.vercel.app'),
  title: 'Davi Reis - Estudante de ADS & Desenvolvedor',
  description: 'Portfólio de Davi Reis - Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia, programação e inovação.',
  keywords: ['desenvolvedor', 'estudante', 'ADS', 'HTML', 'CSS', 'JavaScript', 'Python', 'portfolio', 'curitiba'],
  authors: [{ name: 'Davi Reis' }],
  openGraph: {
    title: 'Davi Reis - Estudante de ADS & Desenvolvedor',
    description: 'Portfólio de Davi Reis - Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia, programação e inovação.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
            <Header />
            <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

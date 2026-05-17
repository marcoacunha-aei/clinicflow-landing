import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'ClinicFlow | Automação e Inteligência Artificial para Clínicas',
  description: 'Transforme o atendimento da sua clínica com IA. Qualifique pacientes, automatize agendamentos, envie lembretes e organize leads em uma única plataforma.',
  keywords: ['clínica', 'automação', 'inteligência artificial', 'agendamento', 'pacientes', 'saúde', 'atendimento', 'CRM', 'leads'],
  authors: [{ name: 'ClinicFlow' }],
  creator: 'ClinicFlow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://clinicflow.com.br',
    siteName: 'ClinicFlow',
    title: 'ClinicFlow | Automação e Inteligência Artificial para Clínicas',
    description: 'Transforme o atendimento da sua clínica com IA. Qualifique pacientes, automatize agendamentos, envie lembretes e organize leads.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClinicFlow | Automação e IA para Clínicas',
    description: 'Transforme o atendimento da sua clínica com IA.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0078D7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

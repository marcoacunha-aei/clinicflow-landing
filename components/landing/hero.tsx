import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Shield, Zap, Clock } from "lucide-react"
import { MetaBadge } from "./meta-badge"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.50_0.20_255_/_0.15),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-foreground/80">+500 clinicas ja automatizaram o atendimento</span>
            </div>
            <MetaBadge />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-balance mb-6 leading-[1.1]">
            <span className="text-foreground">Pare de perder pacientes. </span>
            <span className="bg-gradient-to-r from-[#062A67] via-[#0078D7] to-[#22C7F5] bg-clip-text text-transparent">
              Automatize seu atendimento.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            A IA que atende, qualifica e agenda pacientes 24h por dia no WhatsApp e Instagram. 
            API Oficial Meta para sua clinica operar com seguranca e credibilidade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base shadow-xl shadow-primary/25"
              asChild
            >
              <a href="#teste-ia">
                <MessageCircle className="mr-2 h-5 w-5" />
                Testar IA Gratuitamente
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 h-14 text-base border-border/50 hover:bg-secondary/50"
              asChild
            >
              <a href="#demonstracao">
                Agendar Demonstracao
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>100% compativel com LGPD</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>Respostas em menos de 3 segundos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Funciona 24 horas, 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

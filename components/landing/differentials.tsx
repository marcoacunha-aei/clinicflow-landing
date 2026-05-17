import { 
  Zap, 
  Shield, 
  Puzzle, 
  TrendingUp,
  Clock,
  HeartPulse
} from "lucide-react"

const differentials = [
  {
    icon: HeartPulse,
    title: "Feita pra area da saude",
    description: "IA treinada com linguagem medica. Entende procedimentos, planos e jargoes do setor."
  },
  {
    icon: Zap,
    title: "Roda em minutos",
    description: "Sem projeto de meses. Configure hoje e comece a usar amanha."
  },
  {
    icon: Shield,
    title: "Blindada pela LGPD",
    description: "Criptografia de ponta, servidores no Brasil, conformidade total com a lei."
  },
  {
    icon: Puzzle,
    title: "API Oficial Meta",
    description: "Somos Meta Business Partner. WhatsApp e Instagram com API oficial, sem risco de bloqueio."
  },
  {
    icon: TrendingUp,
    title: "Voce ve os numeros",
    description: "Dashboard com metricas de conversao, tempo de resposta e performance da IA."
  },
  {
    icon: Clock,
    title: "Suporte de verdade",
    description: "Time brasileiro que atende rapido. Nada de chatbot de suporte ou espera de dias."
  }
]

const stats = [
  { value: "3x", label: "mais agendamentos" },
  { value: "80%", label: "menos faltas" },
  { value: "24h", label: "atendimento continuo" },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">Por que a ClinicFlow</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6 text-balance">
              Nao e so mais uma ferramenta. E a unica que voce vai precisar.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed">
              Desenvolvida por quem entende de clinicas, testada por quem atende pacientes todo dia. 
              Tecnologia que funciona no mundo real.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-secondary/50 rounded-2xl">
                  <div className="text-2xl lg:text-3xl font-semibold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-card rounded-2xl border border-border/50 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-medium text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

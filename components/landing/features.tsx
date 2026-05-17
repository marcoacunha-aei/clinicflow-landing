import { 
  Bot, 
  UserCheck, 
  CalendarCheck, 
  Bell, 
  Users, 
  RefreshCw, 
  MessageSquare,
  Headphones,
  Instagram
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "IA que conversa de verdade",
    description: "Nao e chatbot engessado. Entende contexto, responde com naturalidade e resolve duvidas no WhatsApp e Instagram."
  },
  {
    icon: Instagram,
    title: "WhatsApp + Instagram",
    description: "Atenda nos dois canais com a mesma IA. API Oficial Meta, sem risco de bloqueio ou instabilidade."
  },
  {
    icon: CalendarCheck,
    title: "Agenda sozinha",
    description: "Paciente escolhe horario e marca consulta direto no chat. Sem vai e volta de mensagens."
  },
  {
    icon: Bell,
    title: "Acaba com as faltas",
    description: "Lembretes automaticos no WhatsApp 24h e 2h antes. Reducao de ate 80% em no-shows."
  },
  {
    icon: Users,
    title: "Tudo em um lugar so",
    description: "CRM com historico completo de cada lead. Chega de procurar conversa no WhatsApp."
  },
  {
    icon: RefreshCw,
    title: "Reativa quem sumiu",
    description: "Sequencias automaticas de follow-up que recuperam leads que esfriaram."
  },
  {
    icon: Headphones,
    title: "Passa pra humano quando precisa",
    description: "IA identifica casos complexos e transfere para atendente em tempo real."
  },
  {
    icon: MessageSquare,
    title: "Widget pro seu site",
    description: "Chat personalizado que captura visitantes e transforma em leads qualificados."
  }
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">O que voce recebe</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground text-balance">
            Uma plataforma completa, nao um punhado de ferramentas
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

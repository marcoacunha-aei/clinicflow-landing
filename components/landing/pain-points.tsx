import { 
  Clock, 
  UserX, 
  PhoneMissed, 
  FileQuestion, 
  CalendarX,
  MessageSquareOff
} from "lucide-react"

const painPoints = [
  {
    icon: PhoneMissed,
    title: "Leads escapando todo dia",
    description: "Paciente mandou mensagem as 22h e so foi respondido no dia seguinte. Resultado: foi pra concorrencia."
  },
  {
    icon: Clock,
    title: "Equipe sobrecarregada",
    description: "Secretarias respondendo WhatsApp, atendendo telefone e recebendo pacientes ao mesmo tempo."
  },
  {
    icon: UserX,
    title: "Tempo gasto com curiosos",
    description: "Horas explicando procedimentos pra quem so queria saber preco e nunca mais apareceu."
  },
  {
    icon: CalendarX,
    title: "Agenda com buracos",
    description: "Paciente nao apareceu. Ninguem lembrou de confirmar. Uma hora de faturamento perdida."
  },
  {
    icon: FileQuestion,
    title: "Caos na organizacao",
    description: "Dados em planilha, conversas no WhatsApp pessoal, anotacoes em papel. Impossivel ter controle."
  },
  {
    icon: MessageSquareOff,
    title: "Dinheiro deixado na mesa",
    description: "Centenas de leads que demonstraram interesse e nunca mais foram contatados."
  }
]

export function PainPoints() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-destructive mb-3 uppercase tracking-wider">Isso soa familiar?</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground text-balance">
            Quanto sua clinica esta perdendo por mes?
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-destructive/20 hover:shadow-lg hover:shadow-destructive/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <point.icon className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

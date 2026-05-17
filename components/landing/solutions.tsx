import { CheckCircle2, ArrowRight } from "lucide-react"

const solutions = [
  {
    problem: "Leads escapando",
    solution: "Resposta automatica em 3 segundos, 24h"
  },
  {
    problem: "Equipe sobrecarregada",
    solution: "IA assume 80% dos atendimentos repetitivos"
  },
  {
    problem: "Tempo com curiosos",
    solution: "Questionario inteligente filtra quem nao tem perfil"
  },
  {
    problem: "Agenda com buracos",
    solution: "Lembretes automaticos reduzem faltas em 80%"
  },
  {
    problem: "Caos na organizacao",
    solution: "CRM centralizado com historico completo"
  },
  {
    problem: "Dinheiro na mesa",
    solution: "Follow-up automatico reativa leads frios"
  }
]

export function Solutions() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <CheckCircle2 className="h-4 w-4" />
            A solucao existe
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground text-balance">
            Cada problema tem uma resposta
          </h2>
        </div>

        {/* Solutions List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-destructive">X</span>
                </div>
                <span className="text-muted-foreground line-through text-sm truncate">{item.problem}</span>
              </div>
              
              <ArrowRight className="h-4 w-4 text-muted-foreground/50 hidden sm:block shrink-0" />
              
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <span className="font-medium text-foreground text-sm">{item.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

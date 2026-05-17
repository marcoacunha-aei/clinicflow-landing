import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles, CheckCircle2 } from "lucide-react"

export function TestAI() {
  return (
    <section id="teste-ia" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/25">
            <Sparkles className="h-8 w-8 text-primary-foreground" />
          </div>

          {/* Content */}
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4 text-balance">
            Veja a IA funcionando agora
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto text-pretty leading-relaxed">
            Nao e video. Nao e demo gravada. Converse de verdade com nossa IA e 
            sinta como seria ter ela atendendo seus pacientes.
          </p>

          {/* CTA */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-10 h-14 text-base shadow-xl shadow-primary/25"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Comecar conversa agora
          </Button>

          {/* Features */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>Zero cadastro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>Responde na hora</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>Totalmente gratis</span>
            </div>
          </div>

          {/* Webchat placeholder */}
          {/* WEBCHAT SCRIPT PLACEHOLDER - Insira o script do webchat aqui */}
        </div>
      </div>
    </section>
  )
}

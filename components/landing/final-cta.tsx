import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function FinalCTA() {
  return (
    <section id="demonstracao" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#062A67] via-[#0078D7] to-[#22C7F5] p-8 sm:p-12 lg:p-20">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 text-balance leading-tight">
              Sua clinica pode estar perdendo pacientes agora mesmo.
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-10 text-pretty leading-relaxed">
              Enquanto voce le isso, alguem mandou mensagem pra sua clinica e nao foi respondido. 
              Agende 30 minutos e veja como resolver isso hoje.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-white/95 text-[#0078D7] px-8 h-14 text-base font-medium shadow-2xl"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Quero uma demonstracao
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white px-8 h-14 text-base"
              >
                Falar pelo WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Guarantee */}
            <p className="mt-10 text-white/60 text-sm">
              Sem compromisso. Sem cartao. Demo personalizada em 30 minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

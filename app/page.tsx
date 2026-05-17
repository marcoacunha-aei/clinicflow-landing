import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { PainPoints } from "@/components/landing/pain-points"
import { Solutions } from "@/components/landing/solutions"
import { Features } from "@/components/landing/features"
import { Differentials } from "@/components/landing/differentials"
import { TestAI } from "@/components/landing/test-ai"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <Features />
        <Differentials />
        <TestAI />
        <FinalCTA />
      </main>
      <Footer />
      {/* WEBCHAT SCRIPT PLACEHOLDER */}
    </>
  )
}

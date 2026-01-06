import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TeeWanScale } from "@/components/teewan-scale"
import { Portfolio } from "@/components/portfolio"
import { ResearchTerminal } from "@/components/research-terminal"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient glow effect - top left radial */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 10% 20%, rgba(0, 255, 200, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 90% 80%, rgba(0, 255, 200, 0.06) 0%, transparent 40%)
            `,
          }}
        />

        {/* Grid Overlay (Dyson Sphere Motif) - enhanced visibility */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 200, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 200, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Subtle vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(5, 5, 5, 0.8) 100%)`,
          }}
        />
      </div>

      <Navigation />
      <HeroSection />
      <TeeWanScale />
      <Portfolio />
      <ResearchTerminal />
      <Footer />
    </main>
  )
}

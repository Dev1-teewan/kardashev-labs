"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { KardashevEvolutionaryMap } from "./kardashev-evolutionary-map";
import { KardashevDefinitionModal } from "./kardashev-definition-modal";
import { HelpCircle } from "lucide-react";

export function HeroSection() {
  const [isDefinitionModalOpen, setIsDefinitionModalOpen] = useState(false);
  return (
    <section
      id="overview"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-32"
    >
      {/* Light Ray Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(0, 255, 200, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Directive Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-white/40 tracking-wider border border-white/10 rounded-full bg-white/[0.02]">
            <span className="gradient-icon drop-shadow-[0_0_8px_rgba(0,255,200,0.8)]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="zap-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent-lime))" />
                  </linearGradient>
                </defs>
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  stroke="url(#zap-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
            <span className="text-muted-foreground">Crypto X AI | At Scale.</span>
          </span>
        </motion.div>

        {/* Main Headline with (?) Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4">
            <span className="text-white">PUSHING HUMANITY UP THE </span>
            <span className="gradient-text relative inline-flex items-center">
              <span>KARDASHEV SCALE</span>
              <button
                onClick={() => setIsDefinitionModalOpen(true)}
                className="relative group ml-3 inline-flex items-center justify-center"
                aria-label="What is the Kardashev Scale?"
              >
                <HelpCircle
                  size={44}
                  className="text-white/40 hover:text-[#00ffc8] transition-colors cursor-pointer"
                />
                <motion.span
                  className="absolute -inset-2 bg-[#00ffc8]/10 blur-2xl -z-10"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </button>
            </span>
          </h1>

          {/* 3-Layer Mission Statement */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg md:text-xl text-white/80 font-medium">
              We are here to help push humanity to a
            </p>
            <p className="text-xl md:text-2xl font-bold">
              <span className="gradient-text">Tier-1</span>{" "}
              <span className="text-white">civilization</span>
            </p>
          </div>
        </motion.div>

        {/* Evolutionary Map - Moved to bottom of hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <KardashevEvolutionaryMap />
        </motion.div>

        {/* Definition Modal */}
        <KardashevDefinitionModal
          isOpen={isDefinitionModalOpen}
          onClose={() => setIsDefinitionModalOpen(false)}
        />
      </div>
    </section>
  );
}

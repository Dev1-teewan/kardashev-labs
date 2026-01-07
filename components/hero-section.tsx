"use client";

import { motion } from "framer-motion";
import { KardashevProgress } from "./kardashev-progress";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32"
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/[0.02]"
        >
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
          <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            Type 1 Infrastructure
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          <span className="text-white">BUILDING </span>
          <span className="gradient-text relative">
            TIER-1
            <motion.span
              className="absolute -inset-2 bg-[#00ffc8]/10 blur-2xl -z-10"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </span>
          <span className="text-white"> INTELLIGENCE</span>
          <br />
          <span className="text-white/80">FOR ON-CHAIN SYSTEMS.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-16 leading-relaxed"
        >
          Autonomous agents, capital-efficient strategies, and coordination
          infrastructure for the Web3 frontier.
        </motion.p>

        {/* Kardashev Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <KardashevProgress />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: "-6rem" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="font-mono text-xs tracking-wider uppercase">
              Explore
            </span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20"
        >
          {[
            { value: "3", label: "Active Systems" },
            { value: "24/7", label: "Autonomous" },
            { value: "T1", label: "Classification" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-mono font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-white/40 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}

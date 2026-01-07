"use client";

import { motion } from "framer-motion";
import { SynergyReactor } from "./synergy-reactor";

export function SynergyReactorSection() {
  return (
    <section
      id="synergy"
      className="relative min-h-screen flex flex-col items-center justify-center py-32"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Problem Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1.5 text-[10px] font-mono text-white/30 tracking-widest border border-white/5 rounded-full bg-white/[0.01]">
            // SOLUTION: HOW_WE_DO_IT
          </span>
        </motion.div>

        {/* Synergy Reactor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SynergyReactor />
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { SynergyReactor } from "./synergy-reactor";

export function SynergyReactorSection() {
  return (
    <section
      id="operations"
      className="relative min-h-screen flex flex-col items-center justify-center py-32"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Problem Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <motion.span
            className="inline-block px-4 py-2 text-xs font-mono font-semibold text-[#00ffc8]/70 tracking-widest border border-[#00ffc8]/20 rounded-full bg-[#00ffc8]/3 backdrop-blur-sm relative"
            animate={{
              textShadow: [
                "0 0 6px rgba(0, 255, 200, 0.2)",
                "0 0 12px rgba(0, 255, 200, 0.3)",
                "0 0 6px rgba(0, 255, 200, 0.2)",
              ],
              boxShadow: [
                "0 0 8px rgba(0, 255, 200, 0.05)",
                "0 0 15px rgba(0, 255, 200, 0.1)",
                "0 0 8px rgba(0, 255, 200, 0.05)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Synthesizing The Two
          </motion.span>
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

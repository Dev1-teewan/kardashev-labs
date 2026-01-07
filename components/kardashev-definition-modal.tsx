"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface KardashevDefinitionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KardashevDefinitionModal({
  isOpen,
  onClose,
}: KardashevDefinitionModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.95,
          y: isOpen ? 0 : 20,
        }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
      >
        {/* Glassmorphism Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ffc8]/5 to-transparent opacity-50" />

        <div className="relative z-10 p-6 md:p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X size={20} className="text-white/70" />
          </button>

          {/* Content */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-mono tracking-wider uppercase">
              What is the Kardashev Scale?
            </h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-mono">
              A theoretical system, proposed by astronomer Nikolai Kardashev in
              1964, that classifies civilizations by their level of
              technological advancement, measured by the amount of energy they
              can harness and utilize, ranging from planetary (Type I) to
              stellar (Type II) to galactic (Type III). Humanity is currently
              below Type I, but the scale helps us imagine future potential,
              with extensions like Type IV (universe-level) and Type V
              (multiversal-level) representing speculative future stages.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

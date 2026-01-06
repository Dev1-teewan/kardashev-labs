"use client"

import { motion } from "framer-motion"

export function KardashevProgress() {
  const tiers = [
    { label: "T0", name: "PRIMITIVE", active: false },
    { label: "T1", name: "AUTONOMOUS", active: true },
    { label: "T2", name: "PLANETARY", active: false },
    { label: "T3", name: "STELLAR", active: false },
  ]

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* 3D Effect Container */}
      <div
        className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent"
        style={{
          transform: "perspective(1000px) rotateX(2deg)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#00ffc8]/10 to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        {/* Progress Track */}
        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            {tiers.map((tier, index) => (
              <div key={tier.label} className="relative flex flex-col items-center z-10">
                {/* Tier Marker */}
                <motion.div
                  className={`relative w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${
                    tier.active
                      ? "border-[#00ffc8] bg-[#00ffc8]/10"
                      : index < 1
                        ? "border-white/20 bg-white/5"
                        : "border-white/10 bg-transparent"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {tier.active && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-[#00ffc8]/20 blur-xl"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  )}
                  <span
                    className={`font-mono text-sm font-bold relative z-10 ${
                      tier.active ? "text-[#00ffc8]" : "text-white/40"
                    }`}
                  >
                    {tier.label}
                  </span>
                </motion.div>

                {/* Tier Name */}
                <span
                  className={`mt-3 text-xs font-mono tracking-wider ${
                    tier.active ? "text-[#00ffc8]" : "text-white/30"
                  }`}
                >
                  {tier.name}
                </span>

                {/* Active Indicator */}
                {tier.active && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-8 px-2 py-1 bg-[#00ffc8] rounded text-[10px] font-mono font-bold text-[#050505]"
                  >
                    CURRENT
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Progress Bar Track */}
          <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
            {/* Filled Progress */}
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #00ffc8 0%, #a0ff00 100%)",
                boxShadow: "0 0 20px rgba(0, 255, 200, 0.5)",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "37.5%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Animated Pulse */}
            <motion.div
              className="absolute top-0 h-full w-4 bg-white/30 rounded-full blur-sm"
              animate={{ left: ["0%", "37.5%"] }}
              transition={{ duration: 2, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            />
          </div>

          {/* Energy Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#00ffc8] rounded-full"
                style={{ left: `${5 + i * 6}%`, top: "50%" }}
                animate={{
                  y: [-20, 20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

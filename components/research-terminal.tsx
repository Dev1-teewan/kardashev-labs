"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Circle } from "lucide-react";

const researchTopics = [
  "[RESEARCH] Privacy-preserving execution layers",
  "[ANALYSIS] Agent-based finance protocols",
  "[STUDY] Cross-chain coordination mechanisms",
  "[RESEARCH] MEV-aware strategy optimization",
  "[ANALYSIS] Decentralized identity systems",
  "[STUDY] Zero-knowledge proof applications",
  "[RESEARCH] Autonomous market making",
  "[ANALYSIS] Multi-sig orchestration patterns",
];

export function ResearchTerminal() {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState<string>("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLogs = [...prev, researchTopics[currentIndex]];
        if (newLogs.length > 6) newLogs.shift();
        return newLogs;
      });
      setCurrentIndex((prev) => (prev + 1) % researchTopics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Initialize with first few logs
  useEffect(() => {
    setLogs(researchTopics.slice(0, 3));
  }, []);

  // Update time on client side only
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toISOString().slice(11, 19));
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <section id="research" className="relative py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs font-mono text-white/50 tracking-widest border border-white/10 rounded-full">
            RESEARCH LAB
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Active Research Terminal
          </h2>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Terminal Container */}
          <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <Circle size={12} className="text-red-500/70 fill-current" />
                <Circle size={12} className="text-yellow-500/70 fill-current" />
                <Circle size={12} className="text-green-500/70 fill-current" />
              </div>
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-white/30" />
                <span className="text-xs font-mono text-white/30">
                  kardashev-research-v1.0
                </span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="w-2 h-2 rounded-full bg-[#00ffc8]"
                />
                <span className="text-xs font-mono text-[#00ffc8]/70">
                  LIVE
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 h-64 overflow-hidden">
              <div className="space-y-3">
                {logs.map((log, index) => (
                  <motion.div
                    key={`${log}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-xs font-mono text-white/20 mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-mono text-[#00ffc8]/80">
                      {log}
                    </span>
                  </motion.div>
                ))}

                {/* Cursor */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-white/20">
                    {String(logs.length + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center">
                    <span className="text-sm font-mono text-white/50">
                      {">"}
                    </span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="ml-1 w-2 h-4 bg-[#00ffc8]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="px-4 py-2 border-t border-white/5 bg-white/[0.01]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-white/20">
                  KARDASHEV_LABS::RESEARCH
                </span>
                <span className="text-xs font-mono text-white/20">
                  UTC {currentTime}
                </span>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#00ffc8]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, X } from "lucide-react";

const projects = [
  {
    id: 3,
    name: "Swarm Ops (Autonomous Agentic Layer)",
    specs: {
      LOGIC: "Autonomous LLM orchestration for multi-agent coordination.",
      STATUS: "EthDenver 2025 Coinbase's SDK Winner - Infrastructure & Tooling.",
      CAPACITY: "High-frequency on-chain interaction management.",
    },
    tags: ["AI_AGENTS", "ETHDENVER_WINNER", "AGENTIC_OPS"],
    featured: false,
    linksDisabled: false,
    links: {
      x: "https://x.com/kardashevlabs",
      website: "https://kardashevlabs.com",
      video: "https://youtube.com",
    },
  },
  {
    id: 2,
    name: "Dashy (Cluster Orchestration)",
    specs: {
      LOGIC: "Visual execution layer for Solana wallet clusters.",
      STATUS: "Solana Colosseum Awarded - Wallet Infrastructure.",
      CAPACITY: "Multi-sig & batch transaction synchronization.",
    },
    tags: ["WALLET_INFRA", "COLOSSEUM", "CLUSTER_SYNC"],
    featured: false,
    linksDisabled: false,
    links: {
      x: "https://x.com/LetsDashy/status/1856355916637188561",
      website: "dashy-teal.vercel.app",
      video: "https://studio.youtube.com/video/R7qukskWYqk/edit",
    },
  },
  {
    id: 1,
    name: "Gainz (Delta-Neutral Primitive)",
    specs: {
      LOGIC: "Automated funding-rate arbitrage via perpetual futures.",
      STATUS: "24/7 Risk-neutralized execution with auto-rebalancing.",
      CAPACITY: "Type 1 Capital Efficiency at scale.",
    },
    tags: ["DEFI", "ARBITRAGE", "CAPITAL_EFFICIENCY"],
    featured: true,
    linksDisabled: true,
    links: {
      x: "https://x.com/kardashevlabs",
      website: "https://kardashevlabs.com",
      video: "https://youtube.com",
    },
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block px-3 py-1.5 mb-4 text-[10px] font-mono text-white/30 tracking-widest border border-white/5 rounded-full bg-white/[0.01]">
            ACHIEVEMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Core Modules
          </h2>
          <p className="text-xs md:text-sm font-mono text-white/40 tracking-wide">
            // SYSTEM_DESIGNATION: T1_AUTONOMOUS_PRIMITIVES
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
                {/* Internal Border Effect */}
                <div className="absolute inset-4 rounded-xl border border-white/[0.03] pointer-events-none" />

                {/* Light Ray on Hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00ffc8]/10 to-transparent blur-2xl" />
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#00ffc8] transition-colors duration-300">
                        {project.name}
                      </h3>
                      {/* System Specifications List */}
                      <ul className="space-y-3 font-mono">
                        {Object.entries(project.specs).map(([key, value]) => (
                          <li key={key} className="leading-relaxed">
                            <span className="text-[10px] text-white/30 tracking-widest uppercase">
                              {key}:
                            </span>
                            <span className="text-[12px] text-white/80 ml-2">
                              {value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {project.linksDisabled ? (
                        <>
                          <div className="p-2 rounded-lg border border-white/10 bg-white/5 opacity-50 cursor-not-allowed pointer-events-none">
                            <X size={16} className="text-white/50" />
                          </div>
                          <div className="p-2 rounded-lg border border-white/10 bg-white/5 opacity-50 cursor-not-allowed pointer-events-none">
                            <ExternalLink size={16} className="text-white/50" />
                          </div>
                          <a
                            href="#research-terminal"
                            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              document
                                .getElementById("research-terminal")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }}
                          >
                            <Play
                              size={16}
                              className="text-white/50 group-hover/btn:text-white transition-colors"
                            />
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            href={project.links.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn cursor-pointer"
                          >
                            <X
                              size={16}
                              className="text-white/50 group-hover/btn:text-white transition-colors"
                            />
                          </a>
                          <a
                            href={project.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn cursor-pointer"
                          >
                            <ExternalLink
                              size={16}
                              className="text-white/50 group-hover/btn:text-white transition-colors"
                            />
                          </a>
                          <a
                            href={project.links.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn cursor-pointer"
                          >
                            <Play
                              size={16}
                              className="text-white/50 group-hover/btn:text-white transition-colors"
                            />
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono text-white/40 border border-white/10 rounded-full bg-white/[0.02]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-2">
                    <motion.div
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="w-2 h-2 rounded-full bg-[#00ffc8]"
                    />
                    <span className="text-xs font-mono text-white/30">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

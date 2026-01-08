"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, X } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Swarm Ops (Autonomous Agentic Layer)",
    specs: {
      CORE: "Decentralized multi-agent coordination framework utilizing autonomous LLM.",
      PROOF:
        "EthDenver 2025 Coinbase's AgentKit Winner: Most Innovation Use Case.",
      SCALE:
        "High-frequency orchestration of complex, agentic on-chain interactions.",
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
      CORE: "High-fidelity visual orchestration layer for cross-chain (SVM/EVM) wallet clusters.",
      PROOF: "Solana Global Colosseum Awarded - Crypto Infrastructure Track.",
      SCALE:
        "Manage complex swarms while ensuring absolute cross-transaction isolation.",
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
    id: 3,
    name: "Gainz (Delta-Neutral Primitive)",
    specs: {
      CORE: "Automated funding-rate arbitrage via perpetual futures.",
      PROOF:
        "24/7 Risk-neutralized execution with autonomous rebalancing and health management.",
      SCALE:
        "Monitor and deploy delta-neutral strategies across multiple protocols.",
    },
    tags: ["DEFI", "ARBITRAGE", "CAPITAL_EFFICIENCY"],
    featured: false,
    linksDisabled: true,
    links: {
      x: "https://x.com/kardashevlabs",
      website: "https://kardashevlabs.com",
      video: "https://youtube.com",
    },
  },
  {
    id: 4,
    name: "LUME (Liquidity Monitoring Engine)",
    specs: {
      CORE: "Real-time state-monitoring primitive for cross-protocol  TVL tracking and LST staking.",
      PROOF:
        "Verifiable on-chain telemetry for Solana LST deposits and protocol liquidity health.",
      SCALE:
        "Orchestrating global liquidity alerts to identify systemic asset inflows and outflows.",
    },
    tags: ["FLOW_INTELLIGENCE", "STATE_MONITOR", "LST_ANALYTICS"],
    featured: false,
    linksDisabled: true,
    links: {
      x: "",
      website: "",
      video: "",
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
          <motion.span
            className="inline-block px-4 py-2 mb-4 text-xs font-mono font-semibold text-[#00ffc8]/70 tracking-widest border border-[#00ffc8]/20 rounded-full bg-[#00ffc8]/3 backdrop-blur-sm relative"
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
            ACHIEVEMENTS
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Core Modules
          </h2>
          <p className="text-xs md:text-sm font-mono text-white/70 tracking-wide">
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
                  {/* Header - Name and Links on one row */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white flex-1 group-hover:text-[#00ffc8] transition-colors duration-300 pr-4">
                      {project.name}
                    </h3>
                    {!(
                      project.linksDisabled &&
                      !project.links.x &&
                      !project.links.website &&
                      !project.links.video
                    ) && (
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {project.linksDisabled ? (
                          <>
                            <div className="p-2 rounded-lg border border-white/10 bg-white/5 opacity-50 cursor-not-allowed pointer-events-none">
                              <X size={16} className="text-white/50" />
                            </div>
                            <div className="p-2 rounded-lg border border-white/10 bg-white/5 opacity-50 cursor-not-allowed pointer-events-none">
                              <ExternalLink
                                size={16}
                                className="text-white/50"
                              />
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
                    )}
                  </div>
                  {/* System Specifications List - Full width row */}
                  {Object.keys(project.specs).length > 0 && (
                    <div className="mb-6">
                      <ul className="space-y-3 font-mono">
                        {Object.entries(project.specs).map(([key, value]) => (
                          <li key={key} className="leading-relaxed">
                            <span className="text-[10px] text-white/50 tracking-widest uppercase whitespace-nowrap">
                              {key}:
                            </span>
                            <span className="text-xs md:text-sm text-white/90 ml-2 break-words">
                              {value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags and Status */}
                  <div className="flex items-center justify-between gap-4 mt-6">
                    {/* Tags on left */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono text-white/60 border border-white/20 rounded-full bg-white/[0.02]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Status on right */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <motion.div
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="w-2 h-2 rounded-full bg-[#00ffc8]"
                      />
                      <span className="text-xs font-mono text-white/60">
                        ACTIVE
                      </span>
                    </div>
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

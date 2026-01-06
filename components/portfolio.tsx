"use client"

import { motion } from "framer-motion"
import { ExternalLink, Play, X } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Delta Neutral Bot",
    description: "Market-neutral yield extraction via funding inefficiencies.",
    tags: ["Perps", "Funding", "Risk"],
    featured: true,
    links: {
      x: "https://x.com/kardashevlabs",
      website: "https://kardashevlabs.com",
      video: "https://youtube.com",
    },
  },
  {
    id: 2,
    name: "Dashy",
    description: "Wallet cluster management for coordinated on-chain execution.",
    tags: ["Infra", "Automation"],
    featured: false,
    links: {
      x: "https://x.com/kardashevlabs",
      website: "https://kardashevlabs.com",
      video: "https://youtube.com",
    },
  },
  {
    id: 3,
    name: "Swarm Ops",
    description: "Multi-agent AI system managing cross-wallet interactions.",
    tags: ["AI Agents", "Ops"],
    featured: false,
    links: {
      x: "https://x.com/kardashevlabs",
      website: "https://kardashevlabs.com",
      video: "https://youtube.com",
    },
  },
]

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
          <span className="inline-block px-4 py-2 mb-6 text-xs font-mono text-white/50 tracking-widest border border-white/10 rounded-full">
            SYSTEMS PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Active Infrastructure</h2>
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
              className={`group relative ${project.featured ? "md:col-span-2" : ""}`}
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
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#00ffc8] transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-white/50 max-w-md">{project.description}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.links.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/btn cursor-pointer"
                      >
                        <X size={16} className="text-white/50 group-hover/btn:text-white transition-colors" />
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
                        <Play size={16} className="text-white/50 group-hover/btn:text-white transition-colors" />
                      </a>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
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
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="w-2 h-2 rounded-full bg-[#00ffc8]"
                    />
                    <span className="text-xs font-mono text-white/30">ACTIVE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

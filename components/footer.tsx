"use client"

import { motion } from "framer-motion"
import { Github, X, MessageCircle } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00ffc8]/20 rounded-lg blur-sm" />
              <Logo className="relative" />
            </div>
            <span className="font-mono text-sm tracking-wider text-white/70">KARDASHEV LABS</span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/[0.02]">
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-2 rounded-full bg-[#00ffc8]"
            />
            <span className="text-xs font-mono text-white/50">ALL SYSTEMS OPERATIONAL</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: X, label: "X" },
              { icon: Github, label: "GitHub" },
              { icon: MessageCircle, label: "Discord" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="p-2 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group"
              >
                <Icon size={18} className="text-white/40 group-hover:text-white/70 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs font-mono text-white/30">
            © {new Date().getFullYear()} KARDASHEV LABS. BUILDING TIER-1 INFRASTRUCTURE.
          </p>
        </div>
      </div>
    </footer>
  )
}

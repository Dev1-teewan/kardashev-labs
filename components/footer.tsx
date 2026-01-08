"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { Logo } from "./logo";

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
            <div className="flex flex-col">
              <span className="font-mono text-sm tracking-wider text-white/70">
                Kardashev Labs
              </span>
              <span className="font-mono text-[10px] tracking-wider text-white/50">
                A Teewan Company
              </span>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/[0.02]">
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-2 rounded-full bg-[#00ffc8]"
            />
            <span className="text-xs font-mono text-white/50">
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/kardashev-labs-teewan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={18}
                className="text-white/40 group-hover:text-white/70 transition-colors"
              />
            </a>
            <a
              href="https://github.com/Dev1-teewan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github
                size={18}
                className="text-white/40 group-hover:text-white/70 transition-colors"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs font-mono text-white/30">
            © {new Date().getFullYear()} TEEWAN SDN BHD, EST 2024. BUILDING
            TIER-1 INFRASTRUCTURE.
          </p>
        </div>
      </div>
    </footer>
  );
}

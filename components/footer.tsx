"use client";

import { Github, Linkedin } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="relative py-6 md:py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start gap-3">
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

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-3 md:gap-4">
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

        {/* Copyright - Below logo and links */}
        <div className="mt-4 md:mt-6 text-center">
          <p className="text-[10px] md:text-xs font-mono text-white/30 leading-relaxed">
            © {new Date().getFullYear()} TEEWAN SDN BHD, EST 2024.
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            BUILDING TIER-1 INFRASTRUCTURE.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Overview", "Scale", "Portfolio", "Research"]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00ffc8]/20 rounded-lg blur-sm" />
              <Logo className="relative" />
            </div>
            <span className="font-mono text-sm tracking-wider text-white/90">KARDASHEV LABS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white/50 hover:text-white/90 transition-colors duration-300 font-mono tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          {/* T1 Status Indicator */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 border border-[#00ffc8]/20 rounded-full bg-[#00ffc8]/5">
              <motion.div
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-[#00ffc8] shadow-[0_0_8px_rgba(0,255,200,0.8)]"
              />
              <span className="text-xs font-mono text-[#00ffc8]/80 tracking-wider">T1 STATUS: ACTIVE</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 p-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-white/70 hover:text-white transition-colors font-mono"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <motion.div
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-[#00ffc8] shadow-[0_0_8px_rgba(0,255,200,0.8)]"
                />
                <span className="text-xs font-mono text-[#00ffc8]/80">T1 STATUS: ACTIVE</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

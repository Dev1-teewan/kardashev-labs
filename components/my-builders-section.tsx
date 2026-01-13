"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Placeholder data for 6 images - using uniform style
const builderImages = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
}));

export function MyBuildersSection() {
  return (
    <section id="my-builders" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-lg border border-[#00ffc8]/30 bg-[#00ffc8]/5 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#00ffc8] animate-pulse" />
            <span className="text-xs font-mono font-medium text-[#00ffc8] tracking-wider">
              COMMUNITY
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            MY Builders
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            A vibrant community of builders, designers, investors, developers,
            students, and visionaries.
          </p>
        </motion.div>

        {/* 6-Image Grid - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10"
        >
          {builderImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="group relative"
            >
              {/* Image Container - Compact */}
              <motion.div
                className="relative aspect-[3/2] rounded-lg overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Uniform Placeholder Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02]" />

                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)]" />

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 border border-[#00ffc8]/0 group-hover:border-[#00ffc8]/30 transition-colors duration-300 rounded-lg"
                  initial={false}
                />

                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-3">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center opacity-50 group-hover:opacity-70 transition-opacity">
                      <svg
                        className="w-5 h-5 text-white/40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Subtle Glow on Hover */}
                <motion.div
                  className="absolute -inset-1 rounded-lg bg-[#00ffc8]/0 group-hover:bg-[#00ffc8]/10 blur-xl transition-opacity duration-300 -z-10"
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-[#050505] bg-[#00ffc8] rounded-full hover:bg-[#00ffc8]/90 transition-all duration-300 group relative overflow-hidden shadow-lg shadow-[#00ffc8]/20"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 200, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Community</span>
            <ExternalLink
              size={18}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00ffc8] to-[#00d4a3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

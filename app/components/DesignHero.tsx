'use client';

import { motion } from 'framer-motion';
import { HiArrowRight, HiSparkles } from 'react-icons/hi';
import Image from 'next/image';

export default function DesignHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/60 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#0f172a] mb-6"
            >
              Crafting Digital
              <br />
              <span className="text-[#2563eb]">Experiences</span>
              <br />
              <span className="font-extrabold">with Purpose</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-gray-500 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              I build thoughtful, functional, and beautiful digital products
              that solve complex problems through minimalist design and
              user-centric philosophy.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#work"
                className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-gray-200 text-[#0f172a] font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                Read My Story
              </a>
            </motion.div>
          </div>

          {/* Right: Hero image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 relative"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-88 lg:w-88 lg:h-104">
              {/* Card with image */}
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-100">
                <Image
                  src="/desk-hero.png"
                  alt="Workspace"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-6 -left-8 sm:-left-12 max-w-[260px]"
              >
                <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white shadow-xl shadow-gray-200/60 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <HiSparkles className="text-[#2563eb]" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0f172a] leading-tight">
                      Award winning UI/UX specialized in Fintech & SaaS
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

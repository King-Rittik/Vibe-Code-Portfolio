'use client';

import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import ParticleBackground from './ParticleBackground';
import Image from 'next/image';

const roles = [
  'Senior Software Engineer',
  'Full-Stack Developer',
  'System Design Enthusiast',
  'Open Source Contributor',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <ParticleBackground />

      {/* Radial gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-zinc-400">Available for opportunities</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Rittik</span>
            <br />
            <span className="text-zinc-400">Soni</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="px-3 py-1 text-sm rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-400"
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-zinc-500 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Crafting scalable systems and delightful user experiences at the
            intersection of design and engineering. 5+ years building products
            used by millions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              View My Work
              <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/[0.08] text-zinc-400 font-medium hover:text-white hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
          >
            {[
              { icon: FaGithub, href: '#', label: 'GitHub' },
              { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
              { icon: FaXTwitter, href: '#', label: 'X (Twitter)' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-zinc-500 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 blur-2xl animate-pulse" />
            {/* Rotating border */}
            <div className="absolute inset-2 rounded-full border border-white/[0.06]" />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, rgba(124,58,237,0.3) 25%, transparent 50%, rgba(6,182,212,0.3) 75%, transparent 100%)',
                animation: 'spin 8s linear infinite',
              }}
            />
            {/* Image */}
            <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-white/[0.08]">
              <Image
                src="/avatar.png"
                alt="Rittik Soni"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-600 tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-zinc-700 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-violet-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

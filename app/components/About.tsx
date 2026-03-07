'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiGlobeAlt, HiLightningBolt, HiHeart } from 'react-icons/hi';
import Image from 'next/image';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Shipped' },
  { value: '10M+', label: 'Users Impacted' },
  { value: '20+', label: 'Open Source PRs' },
];

const highlights = [
  { icon: HiCode, label: 'Clean Architecture', desc: 'Writing maintainable, testable code that scales.' },
  { icon: HiGlobeAlt, label: 'Distributed Systems', desc: 'Building reliable services handling millions of requests.' },
  { icon: HiLightningBolt, label: 'Performance', desc: 'Obsessed with sub-100ms response times.' },
  { icon: HiHeart, label: 'User Experience', desc: 'Bridging the gap between design and engineering.' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-violet-400 font-medium tracking-widest uppercase mb-3 block">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Passionate about building{' '}
            <span className="gradient-text">exceptional</span> software
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/10 to-cyan-500/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
                <Image
                  src="/avatar.png"
                  alt="About me"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 px-5 py-3 rounded-2xl glass"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                    <HiCode className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Coding Daily</div>
                    <div className="text-xs text-zinc-500">Since 2019</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              I&apos;m a Software Engineer with 5+ years of experience building
              high-performance applications at scale. Currently working on distributed
              systems and cloud-native architectures.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Previously at <span className="text-white font-medium">Google</span>,{' '}
              <span className="text-white font-medium">Meta</span>, and several
              high-growth startups where I led teams building products that serve
              millions of users worldwide.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              When I&apos;m not coding, you&apos;ll find me contributing to open source,
              writing technical blogs, or exploring the latest in AI and machine learning.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="text-violet-400" size={22} />
              </div>
              <div className="font-semibold text-white mb-2">{item.label}</div>
              <div className="text-sm text-zinc-500 leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

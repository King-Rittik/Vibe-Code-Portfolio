'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAws } from 'react-icons/fa6';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPython, SiGo, SiRust,
  SiPostgresql, SiMongodb, SiRedis, SiGraphql,
  SiDocker, SiKubernetes, SiGooglecloud,
  SiGit, SiFigma, SiLinux, SiTerraform,
} from 'react-icons/si';

const categories = [
  {
    title: 'Frontend',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-500/30',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'hover:border-violet-500/30',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'Rust', icon: SiRust, color: '#CE422B' },
    ],
  },
  {
    title: 'Database',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'hover:border-emerald-500/30',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'hover:border-orange-500/30',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
    ],
  },
  {
    title: 'Tools',
    color: 'from-rose-500/20 to-pink-500/20',
    borderColor: 'hover:border-rose-500/30',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[160px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-cyan-400 font-medium tracking-widest uppercase mb-3 block">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Technologies I{' '}
            <span className="gradient-text">work with</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg mx-auto">
            A curated set of technologies I use daily to build production-grade
            applications and systems.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              className={`group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] ${cat.borderColor} transition-all duration-500 hover:bg-white/[0.04]`}
            >
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${cat.color}`} />
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIdx * 0.1 + i * 0.05 + 0.3 }}
                    className="group/skill flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.03] hover:bg-white/[0.05] hover:border-white/[0.08] transition-all duration-300 cursor-default"
                  >
                    <skill.icon
                      size={20}
                      style={{ color: skill.color }}
                      className="group-hover/skill:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm text-zinc-400 group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

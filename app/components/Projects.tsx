'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa6';
import Image from 'next/image';

const projects = [
  {
    title: 'FinFlow Dashboard',
    description: 'A real-time fintech dashboard with advanced analytics, portfolio tracking, and AI-powered market insights. Built for institutional investors.',
    image: '/project-fintech.png',
    tech: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    github: '#',
    live: '#',
    featured: true,
    gradient: 'from-violet-600/20 to-blue-600/20',
  },
  {
    title: 'MindSync AI',
    description: 'An AI-powered conversational assistant with multi-modal capabilities, real-time streaming, and RAG-based knowledge retrieval.',
    image: '/project-ai.png',
    tech: ['Next.js', 'Python', 'FastAPI', 'OpenAI', 'Pinecone'],
    github: '#',
    live: '#',
    featured: true,
    gradient: 'from-cyan-600/20 to-emerald-600/20',
  },
  {
    title: 'LuxeCart',
    description: 'Premium e-commerce platform with AR product preview, one-click checkout, and personalized recommendations engine.',
    image: '/project-ecommerce.png',
    tech: ['React Native', 'Go', 'Redis', 'Stripe', 'AWS'],
    github: '#',
    live: '#',
    featured: true,
    gradient: 'from-orange-600/20 to-rose-600/20',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

      <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.04] overflow-hidden hover:border-white/[0.08] transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />

          {/* Overlay links */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <a
              href={project.github}
              className="p-2.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={project.live}
              className="p-2.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <HiExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs rounded-md bg-white/[0.03] border border-white/[0.04] text-zinc-500 group-hover:text-zinc-400 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[160px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-cyan-400 font-medium tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg mx-auto">
            A selection of recent work that showcases my approach to building
            modern, scalable applications.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded-full border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300"
          >
            View All Projects
            <HiExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

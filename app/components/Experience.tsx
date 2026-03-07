'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink } from 'react-icons/hi';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Google',
    companyColor: '#4285F4',
    period: '2023 – Present',
    location: 'Mountain View, CA',
    description: 'Leading development of cloud-native microservices serving 100M+ daily active users. Architected a real-time data pipeline reducing latency by 40%.',
    tech: ['Go', 'Kubernetes', 'GCP', 'gRPC', 'Spanner'],
    link: '#',
  },
  {
    title: 'Software Engineer III',
    company: 'Meta',
    companyColor: '#1877F2',
    period: '2021 – 2023',
    location: 'Menlo Park, CA',
    description: 'Built and scaled the Marketplace recommendations engine, increasing user engagement by 25%. Mentored 4 junior engineers.',
    tech: ['React', 'Python', 'PyTorch', 'GraphQL', 'Hack'],
    link: '#',
  },
  {
    title: 'Software Engineer',
    company: 'Stripe',
    companyColor: '#635BFF',
    period: '2020 – 2021',
    location: 'San Francisco, CA',
    description: 'Developed core payment processing APIs handling $2B+ in annual transaction volume. Improved checkout conversion rates by 15%.',
    tech: ['Ruby', 'TypeScript', 'AWS', 'PostgreSQL', 'Redis'],
    link: '#',
  },
  {
    title: 'Software Engineer',
    company: 'Startup (Series B)',
    companyColor: '#10B981',
    period: '2019 – 2020',
    location: 'Remote',
    description: 'First engineering hire. Built the entire frontend from scratch and established CI/CD pipelines. Grew user base from 0 to 50K.',
    tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Terraform'],
    link: '#',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-violet-400 font-medium tracking-widest uppercase mb-3 block">
            Career
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Work{' '}
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/30 via-cyan-500/30 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-violet-500 bg-[#050510] z-10 mt-8">
                <div className="absolute inset-0 rounded-full bg-violet-500/30 animate-ping" style={{ animationDuration: '3s' }} />
              </div>

              {/* Card */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="text-sm font-medium"
                          style={{ color: exp.companyColor }}
                        >
                          {exp.company}
                        </span>
                        <span className="text-zinc-600">·</span>
                        <span className="text-sm text-zinc-500">{exp.location}</span>
                      </div>
                    </div>
                    <a
                      href={exp.link}
                      className="p-2 rounded-lg text-zinc-600 hover:text-white hover:bg-white/[0.05] transition-all opacity-0 group-hover:opacity-100"
                    >
                      <HiExternalLink size={16} />
                    </a>
                  </div>

                  <span className="inline-block text-xs text-zinc-500 bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.04] mb-3">
                    {exp.period}
                  </span>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/[0.03] border border-white/[0.04] text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

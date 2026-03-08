'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaXTwitter, FaDribbble } from 'react-icons/fa6';

const socials = [
  { icon: FaGithub, href: '#', label: 'GitHub', handle: '@rittiksoni' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn', handle: 'in/rittiksoni' },
  { icon: FaXTwitter, href: '#', label: 'X (Twitter)', handle: '@rittik_dev' },
  { icon: FaDribbble, href: '#', label: 'Dribbble', handle: '@rittiks' },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[160px]" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-violet-400 font-medium tracking-widest uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let&apos;s build something{' '}
            <span className="gradient-text">amazing</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-500 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-zinc-500 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-500 mb-2 font-medium">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Info cards */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center">
                  <HiMail className="text-violet-400" size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Email</div>
                  <div className="text-sm text-zinc-500">rittik@example.com</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center">
                  <HiLocationMarker className="text-violet-400" size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Location</div>
                  <div className="text-sm text-zinc-500">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2">
              <div className="text-sm font-medium text-zinc-400 mb-4">Connect with me</div>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
                  >
                    <social.icon className="text-zinc-500 group-hover:text-white transition-colors" size={18} />
                    <div>
                      <div className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                        {social.label}
                      </div>
                      <div className="text-[10px] text-zinc-600">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

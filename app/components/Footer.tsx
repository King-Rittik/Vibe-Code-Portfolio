'use client';

import { FaGithub, FaLinkedin, FaXTwitter, FaDribbble, FaHeart } from 'react-icons/fa6';

const links = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaXTwitter, href: '#', label: 'X' },
  { icon: FaDribbble, href: '#', label: 'Dribbble' },
];

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="text-lg font-bold tracking-tight">
            <span className="gradient-text">KR</span>
            <span className="text-zinc-600">.</span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {links.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2.5 rounded-lg text-zinc-600 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-xs text-zinc-600">
            <span>Built with</span>
            <FaHeart className="text-violet-500 text-[10px]" />
            <span>by Keshav Raghav · © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

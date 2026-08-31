'use client';

import { Code, ExternalLink, Download, ArrowRight, User } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for sticky navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-300 text-sm">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            Full Stack Software Engineer | Backend-Focused | AI Agents | Exploring AI/ML Automation (n8n)
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Building scalable software, intelligent AI systems, and automation that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700"
            >
              Contact Me
            </button>
            <a
              href="/resume/Hassan-Shehzad-Resume.pdf"
              download
              className="px-8 py-3 bg-gray-800/50 text-white rounded-lg font-medium hover:bg-gray-700/50 transition-colors border border-gray-700 flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Code size={24} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

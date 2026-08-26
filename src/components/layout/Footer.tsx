'use client';

import { Code, User, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{profile.name}</h3>
            <p className="text-gray-400 text-sm">Full Stack Software Engineer | Backend-Focused</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('#home')} className="text-gray-400 hover:text-white text-sm transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('#about')} className="text-gray-400 hover:text-white text-sm transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('#projects')} className="text-gray-400 hover:text-white text-sm transition-colors">Projects</button></li>
              <li><button onClick={() => scrollToSection('#contact')} className="text-gray-400 hover:text-white text-sm transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Code size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <User size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

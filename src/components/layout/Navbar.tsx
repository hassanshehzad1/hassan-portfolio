'use client';

import { useState, useEffect } from 'react';
import { Code, ExternalLink, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
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
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 w-14">
            <a href="#home" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
              HS
            </a>
          </div>

          {/* Desktop Navigation - Center (XL only) */}
          <div className="hidden xl:flex items-center justify-center flex-1 px-4">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium rounded-md hover:bg-gray-800/50 whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Right Side (XL only) */}
          <div className="hidden xl:flex items-center space-x-2 flex-shrink-0 justify-end">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-white transition-colors rounded-md hover:bg-gray-800/50"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://github.com/hassanshehzad1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-white transition-colors rounded-md hover:bg-gray-800/50"
              aria-label="GitHub"
            >
              <Code size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-shehzad-10312a285/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-white transition-colors rounded-md hover:bg-gray-800/50"
              aria-label="LinkedIn"
            >
              <ExternalLink size={20} />
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm whitespace-nowrap"
            >
              Let's Work Together
            </button>
          </div>

          {/* Mobile/Tablet Menu Button (lg and below) */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation */}
      {isOpen && (
        <div className="xl:hidden bg-black/95 backdrop-blur-md border-b border-gray-800">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-md hover:bg-gray-800/50"
              >
                {item.name}
              </button>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gray-800 px-4">
              <a
                href="https://github.com/hassanshehzad1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Code size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hassan-shehzad-10312a285/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection('#contact')}
              className="block w-full text-center px-4 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors mt-4"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

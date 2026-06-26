import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'career', label: 'Career' },
    { id: 'erp-project', label: 'ERP 구축' },
    { id: 'architecture', label: '아키텍처' },
    { id: 'infra', label: '운영·인프라' },
    { id: 'troubleshooting', label: '문제 해결' },
    { id: 'erp-ops', label: 'ERP 운영' },
    { id: 'other-projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'awards', label: 'Awards' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/90 dark:bg-slate-950/90 border-b border-slate-200/10 shadow-lg py-3'
          : 'bg-slate-900/90 dark:bg-slate-950/90 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 p-1.5 rounded-lg text-indigo-500 dark:text-sky-400 hover:bg-slate-100/10 dark:hover:bg-slate-900/40 transition-colors"
            aria-label="Home"
          >
            <Terminal className="w-6 h-6 stroke-[2.5]" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-indigo-500 dark:text-sky-300 bg-indigo-500/10 dark:bg-sky-400/10'
                    : 'text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}

          </nav>

          {/* Mobile Actions */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-2xl py-4 px-6">
          <div className="grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-sky-400 bg-sky-400/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

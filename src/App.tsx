import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Career from './components/Career';
import ErpProject from './components/ErpProject';
import Architecture from './components/Architecture';
import InfraOps from './components/InfraOps';
import Troubleshooting from './components/Troubleshooting';
import ErpOperations from './components/ErpOperations';
import OtherProjects from './components/OtherProjects';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-fade');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'} transition-colors duration-300`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. About */}
        <AboutMe />
        {/* 3. Career */}
        <Career />
        {/* 4. ERP 신규 구축 프로젝트 (메인 섹션) */}
        <ErpProject />
        {/* 5. 시스템 아키텍처 */}
        <Architecture />
        {/* 6. 운영 및 인프라 */}
        <InfraOps />
        {/* 7. 주요 문제 해결 사례 */}
        <Troubleshooting />
        {/* 8. ERP 운영 경험 (한솔PNS) */}
        <ErpOperations />
        {/* 9. Other Projects */}
        <OtherProjects />
        {/* 10. Education */}
        <Education />
        {/* 11. Awards & Certifications */}
        <Awards />
        {/* 12. Contact */}
        <Contact />
      </main>
    </div>
  );
}

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
import MobilePortfolio from './components/mobile/MobilePortfolio';
import ContactModal from './components/ContactModal';
import { useIsMobile } from './components/mobile/useIsMobile';

export default function App() {
  const isMobile = useIsMobile();
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

  const [showMobileRecommendModal, setShowMobileRecommendModal] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile) {
      setShowMobileRecommendModal(true);
    } else {
      setShowMobileRecommendModal(false);
    }
  }, [isMobile]);

  const handleContactClick = () => {
    if (isMobile) setShowContactModal(true);
    else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Recommend Modal (only show on mobile) */}
      {showMobileRecommendModal && isMobile && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileRecommendModal(false)} />
          <div className="relative z-10 max-w-md w-full p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl">
            <h3 className="text-lg font-bold">⚠️ 모바일 화면 안내</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">모바일에서는 읽기 편하도록 핵심 내용만 제공됩니다.<br />프로젝트의 자세한 내용과 다양한 기능은<br />PC에서 더욱 편하게 확인하실 수 있습니다.</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => {
                  setShowMobileRecommendModal(false);
                }}
                className="px-4 py-2 rounded bg-indigo-600 text-white"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact modal for mobile */}
      <ContactModal open={showContactModal} onClose={() => setShowContactModal(false)} />

      {/* Mobile UI - keep mounted but toggle visibility to avoid blank screens on resize */}
      <div style={{ display: isMobile ? 'block' : 'none' }}>
        <MobilePortfolio theme={theme} setTheme={setTheme} onContactClick={handleContactClick} />
      </div>

      {/* Desktop UI - keep mounted but toggle visibility */}
      <div style={{ display: isMobile ? 'none' : 'block' }}>
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'} transition-colors duration-300`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <main>
            {/* 1. Hero */}
            <Hero onContactClick={handleContactClick} />
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
      </div>
    </>
  );
}

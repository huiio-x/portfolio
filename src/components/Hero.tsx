import React from 'react';
import { Calendar, Cpu, Layers, Settings } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-900 text-white"
    >
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Area: Slogan & Intro */}
        <div className="lg:col-span-7 space-y-6 reveal-fade">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
            <span>ERP Backend Developer Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            운영 경험 위에<br />
            구축 경험을 더한{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              실무 중심 ERP 개발자
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light leading-relaxed">
            한솔PNS에서 <strong className="text-indigo-300 font-medium">ERP 운영 및 유지보수 3년 5개월</strong>,
            현재 좋은상자에서 <strong className="text-sky-300 font-medium">ERP 신규 구축 진행</strong>.
            설계, 개발, 배포, 운영 전 과정을 1인으로 수행하며
            제조업 업무 프로세스를 이해하는 개발자 <strong className="text-white">최희정</strong>입니다.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#erp-project"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
            >
              ERP 구축 프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-slate-850 hover:bg-slate-800 text-sm font-semibold border border-slate-700 transition-all active:scale-95"
            >
              연락하기
            </a>
          </div>
        </div>

        {/* Right Area: Key Stats */}
        <div className="lg:col-span-5 reveal-fade delay-2">
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative glow-card">
            {/* Window control dots */}
            <div className="flex space-x-1.5 mb-6">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            <h3 className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-4">ERP Developer Profile</h3>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-slate-450">ERP 운영 경력</span>
                  <Calendar className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold tracking-tight text-white">3년 5개월</div>
                  <div className="text-2.5xs text-slate-400 mt-1">한솔PNS 제조업 ERP</div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-slate-450">ERP 구축</span>
                  <Settings className="w-4 h-4 text-sky-400" />
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold tracking-tight text-white">신규 구축</div>
                  <div className="text-2.5xs text-slate-400 mt-1">좋은상자 · 1인 개발 중</div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-slate-450">담당 도메인</span>
                  <Layers className="w-4 h-4 text-emerald-450" />
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold tracking-tight text-white">제조업 ERP</div>
                  <div className="text-2.5xs text-slate-400 mt-1">생산·재고·출하·영업</div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-xs text-slate-450">개발 범위</span>
                  <Cpu className="w-4 h-4 text-purple-400" />
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold tracking-tight text-white">Full Cycle</div>
                  <div className="text-2.5xs text-slate-400 mt-1">설계→개발→배포→운영</div>
                </div>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-450">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                좋은상자 ERP 구축 진행
              </span>
              <span>Spring Boot · MariaDB · Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

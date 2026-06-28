import React from 'react';
import { ExternalLink, Github, Map, CreditCard, Bot } from 'lucide-react';

// 이미지6: AI 지역화폐 플랫폼 (여민동행) - public/images/에 위치
const img6 = `${import.meta.env.BASE_URL}images/project-yeomindong.png`;

export default function OtherProjects() {
  return (
    <section id="other-projects" className="py-20 bg-slate-900 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
            Other Projects
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-3">
            Other Projects
          </h2>
          <div className="h-1 w-12 bg-purple-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            ERP 외 개발 경험. 홍익대학교 세종캠퍼스 졸업 프로젝트로 개발한 AI 지역화폐 플랫폼입니다.
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-5xl mx-auto reveal-fade delay-2">
          <div className="bg-slate-950/60 border border-slate-850 rounded-3xl overflow-hidden hover:border-slate-700 transition-all shadow-2xl grid grid-cols-1 md:grid-cols-12">

            {/* Left Column: Vertical Project Image / Mobile Mockup container */}
            <div className="md:col-span-5 lg:col-span-4 relative bg-slate-900/40 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-850 min-h-[380px] md:min-h-0">
              {/* Overlay badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                <span className="px-2.5 py-1 bg-purple-600/90 text-white text-[10px] font-bold rounded-lg backdrop-blur-sm">
                  졸업 프로젝트
                </span>
                <span className="px-2.5 py-1 bg-slate-900/90 text-slate-300 text-[10px] font-bold rounded-lg backdrop-blur-sm border border-slate-700">
                  홍익대학교 세종캠퍼스 소프트웨어융합학과
                </span>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="relative w-full max-w-[240px] sm:max-w-[260px] mt-8">
                <img
                  src={img6}
                  alt="AI 지역화폐 플랫폼 여민동행"
                  className="w-full h-auto drop-shadow-2xl"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex flex-col items-center justify-center h-80 w-full gap-3 p-4 text-center border-2 border-dashed border-slate-700 rounded-3xl">
                          <div class="text-4xl">📱</div>
                          <div class="text-slate-450 text-xs font-bold">여민동행 화면</div>
                          <div class="text-slate-650 text-[10px] leading-tight">
                            /public/images/project-yeomindong.png<br/>이미지를 배치해 주세요
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>

            {/* Right Column: Project Info */}
            <div className="md:col-span-7 lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-1">AI 지역화폐 플랫폼</h3>
                  <p className="text-sm font-medium text-purple-400">여민동행</p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  지역화폐 활성화를 목적으로 개발한 AI 기반 플랫폼. 사용자에게 AI를 통해 주변 가맹점 정보를 제공하고,
                  지도 기반으로 가맹점을 시각적으로 조회할 수 있습니다. 지역 경제 활성화와 지역화폐 사용 편의성 향상에
                  초점을 맞춘 프로젝트입니다.
                </p>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3 flex flex-col items-center text-center">
                    <Bot className="w-5 h-5 text-purple-400 mb-2" />
                    <div className="text-xs font-bold text-white mb-1">AI</div>
                    <div className="text-[10px] text-slate-400 leading-tight">OpenAI API 활용 가맹점 정보 안내</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3 flex flex-col items-center text-center">
                    <Map className="w-5 h-5 text-sky-400 mb-2" />
                    <div className="text-xs font-bold text-white mb-1">지도 기반 조회</div>
                    <div className="text-[10px] text-slate-400 leading-tight">위치 기반 가맹점 지도 시각화</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3 flex flex-col items-center text-center">
                    <CreditCard className="w-5 h-5 text-emerald-400 mb-2" />
                    <div className="text-xs font-bold text-white mb-1">지역화폐 관리</div>
                    <div className="text-[10px] text-slate-400 leading-tight">잔액 조회 및 사용 내역 관리</div>
                  </div>
                </div>

                {/* Tech Stack details integrated nicely in the right side */}
                <div className="bg-slate-900/30 border border-slate-850 rounded-2xl p-4 sm:p-5 mt-4">
                  <h4 className="text-xs font-bold text-slate-350 uppercase tracking-wider mb-3">기술 스택</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase mb-1">Frontend</div>
                      <div className="flex flex-wrap gap-1">
                        {['Angular', 'TypeScript'].map(t => (
                          <span key={t} className="px-2 py-0.5 bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] rounded font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase mb-1">Backend</div>
                      <div className="flex flex-wrap gap-1">
                        {['Node.js', 'TypeScript'].map(t => (
                          <span key={t} className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] rounded font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-slate-500 font-semibold uppercase mb-1">AI / API</div>
                      <div className="flex flex-wrap gap-1">
                        {['OpenAI API', 'Naver Map API'].map(t => (
                          <span key={t} className="px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] rounded font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-500">
                    <span>메타버스 융합SW 아카데미 4기</span>
                    <span>2025.01 ~ 2025.06 이수</span>
                  </div>

                  {/* GitHub Links */}
                  <div className="pt-3 mt-3 flex items-center gap-3">
                    <a
                      href="https://github.com/3405000/team201-backend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Backend</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://github.com/3405000/team201-frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-red-400 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Frontend</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-8 reveal-fade delay-4">
          <div className="bg-slate-950/60 border border-slate-850 rounded-3xl overflow-hidden hover:border-slate-700 transition-all shadow-2xl p-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-slate-700/80 text-slate-200 text-[10px] font-bold rounded-lg backdrop-blur-sm">
                아키텍처 / ERD
              </span>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}images/project-development-architecture.png`}
                  alt="프로젝트 개발 아키텍처 다이어그램"
                  className="w-full h-auto rounded-2xl border border-slate-800"
                />
                <p className="mt-3 text-xs text-slate-400">프로젝트 개발 아키텍처 다이어그램</p>
              </div>
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}images/project-entity-relationship-diagram.png`}
                  alt="프로젝트 엔터티 관계도 (ERD)"
                  className="w-full h-auto rounded-2xl border border-slate-800"
                />
                <p className="mt-3 text-xs text-slate-400">프로젝트 엔터티 관계도 (ERD)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Panel Section */}
        <div className="max-w-5xl mx-auto mt-12 reveal-fade delay-3">
          <div className="bg-slate-950/60 border border-slate-850 rounded-3xl overflow-hidden hover:border-slate-700 transition-all shadow-2xl p-6">
            {/* Header with Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-purple-600/90 text-white text-[10px] font-bold rounded-lg backdrop-blur-sm">
                프로젝트 포스터
              </span>
            </div>
            {/* Image */}
            <img
              src={`${import.meta.env.BASE_URL}images/project-yeomindong-panel.png`}
              alt="AI 지역화폐 플랫폼 여민동행 제출 포스터"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

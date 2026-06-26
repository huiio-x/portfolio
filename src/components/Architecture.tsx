import React from 'react';
import { Server, Database, Monitor, HardDrive, ArrowRight, ArrowDown, Globe, Shield } from 'lucide-react';

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 bg-slate-900 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full">
            System Architecture
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-3">
            시스템 아키텍처
          </h2>
          <div className="h-1 w-12 bg-sky-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            React 프론트엔드부터 Spring Boot 백엔드, MariaDB(NAS), NAS 백업까지<br />
            1인으로 구성하고 운영하는 전체 시스템 구조입니다.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-slate-950/50 border border-slate-850 rounded-3xl p-8 sm:p-12 shadow-2xl reveal-fade delay-2 max-w-5xl mx-auto">

          {/* Frontend Layer */}
          <div className="flex justify-center mb-8">
            <div className="border border-purple-500/30 bg-purple-500/5 rounded-2xl px-8 py-5 flex flex-col items-center text-center relative w-full max-w-sm hover:bg-purple-500/10 transition-colors">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-slate-800 border border-slate-700 rounded-md text-2xs text-slate-350 font-semibold font-mono uppercase whitespace-nowrap">
                Client
              </span>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-2">
                <Monitor className="w-5 h-5 text-purple-400" />
              </div>
              <h4 className="text-sm font-bold text-white">React + Tailwind CSS</h4>
              <p className="text-xs text-slate-400 mt-1.5 font-light">PC / Mobile Web 브라우저</p>
              <div className="flex gap-1.5 mt-3 flex-wrap justify-center">
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-3xs text-slate-300 rounded">React</span>
                <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-3xs text-slate-300 rounded">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-1 text-slate-600">
              <ArrowDown className="w-5 h-5" />
              <span className="text-3xs text-slate-500 font-mono uppercase tracking-wide">HTTPS / Nginx</span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>

          {/* Linux Host Server Box */}
          <div className="border border-slate-800 rounded-2xl p-8 bg-slate-950/80 relative mt-8">
            <span className="absolute -top-3 left-6 px-3 py-0.5 bg-slate-800 border border-slate-700 rounded-md text-2xs text-slate-350 font-semibold font-mono uppercase">
              Linux Host Server
            </span>

            {/* Docker Container Layer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

              {/* Nginx + Spring Boot WAS container */}
              <div className="border border-indigo-500/20 bg-indigo-500/5 rounded-2xl p-6 flex flex-col items-center text-center relative hover:bg-indigo-500/10 transition-colors">
                <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded text-2xs font-semibold uppercase">
                  Container
                </span>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-3">
                  <Server className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="text-sm font-bold text-white">Spring Boot WAS</h4>
                <p className="text-xs text-slate-400 mt-3 font-light leading-relaxed">
                  Java 기반 백엔드 API 서버.<br />
                  Nginx 리버스 프록시를 통해 외부 요청 처리
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center mt-4">
                  <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 text-3xs text-slate-300 rounded">Spring Boot</span>
                  <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 text-3xs text-slate-300 rounded">Java</span>
                  <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 text-3xs text-slate-300 rounded">Nginx</span>
                </div>
              </div>

              {/* MariaDB on NAS */}
              <div className="border border-sky-550/20 bg-sky-500/5 rounded-2xl p-6 flex flex-col items-center text-center relative hover:bg-sky-500/10 transition-colors">
                <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-sky-500/10 text-sky-400 border border-sky-500/30 rounded text-2xs font-semibold uppercase">
                  NAS 설치
                </span>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-3">
                  <Database className="w-5 h-5 text-sky-400" />
                </div>
                <h4 className="text-sm font-bold text-white">MariaDB</h4>
                <p className="text-xs text-slate-400 mt-3 font-light leading-relaxed">
                  NAS에 직접 설치. 원자재 입출고, 생산, 재고 데이터 관리.<br />
                  DB 백업 및 운영 관리 담당
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center mt-4">
                  <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 text-3xs text-slate-300 rounded">MariaDB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure Highlights */}
          <div className="mt-10 pt-8 border-t border-slate-800">
            <h3 className="text-sm font-bold text-slate-300 mb-6 text-center uppercase tracking-wider">시스템 운영 특징</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-slate-900/40 border border-slate-850 rounded-2xl p-5 hover:bg-slate-900/60 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h5 className="text-sm font-bold text-white">Docker 기반 배포</h5>
                </div>
                <p className="text-3xs text-slate-400 leading-relaxed font-light">
                  Spring Boot WAS만 Docker 컨테이너로 운영하여 서비스 배포 및 유지보수를 효율적으로 수행합니다.
                </p>
              </div>

              <div className="bg-slate-900/40 border border-slate-850 rounded-2xl p-5 hover:bg-slate-900/60 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Server className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h5 className="text-sm font-bold text-white">Linux 서버 운영</h5>
                </div>
                <p className="text-3xs text-slate-400 leading-relaxed font-light">
                  Linux 환경에서 웹 서비스 운영, 포트 포워딩, Nginx 설정, 모니터링을 직접 관리합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

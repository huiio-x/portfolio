import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const educations = [
    {
      school: '홍익대학교 (세종캠퍼스)',
      major: '소프트웨어융합학과',
      type: '대학교(4년제) · 편입 졸업',
      period: '2024.03 ~ 2026.02',
      gpa: '4.08 / 4.5',
      note: '',
      badge: '4년제',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      highlights: [
        '2025 한국스마트미디어학회 추계학술대회 우수논문상 수상',
        '메타버스 융합SW 아카데미 4기 이수 (2025.01 ~ 2025.06)',
        '2025-2 다정한 책읽기 서평대회 우수상',
        '교내봉사장학생 근무',
      ],
    },
    {
      school: '서일대학교',
      major: '인터넷정보과',
      type: '대학교(3년제) · 졸업',
      period: '2016.03 ~ 2019.02',
      gpa: '3.8 / 4.5',
      note: '전공 동아리 WIS 회장',
      badge: '3년제',
      badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      highlights: [
        '전공 동아리 "WIS" 회장 역임 (2017.02 ~ 2018.03)',
        '캡스톤 디자인 졸업작품전 참여 (스크랩북 앱 "CLIPIT!" 제작)',
        '개인 홈페이지 제작 프로젝트 (그릇 쇼핑몰 ROPOPO)',
        '아두이노 심화 작품 전시회 참여',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Education
          </h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto reveal-fade delay-2">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-sky-400" />

              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <GraduationCap className="w-6 h-6 text-indigo-500" />
                </div>
                <span className={`text-2xs font-semibold px-2 py-0.5 border rounded-md ${edu.badgeColor}`}>
                  {edu.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.school}</h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">{edu.major}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{edu.type}</p>

              <div className="flex items-center gap-4 mt-4 pb-4 border-b border-slate-100 dark:border-slate-850">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Award className="w-3.5 h-3.5" />
                  <span>GPA {edu.gpa}</span>
                </div>
              </div>

              <ul className="mt-4 space-y-1.5">
                {edu.highlights.map((hl, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <span className="text-indigo-400 mt-0.5 shrink-0">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

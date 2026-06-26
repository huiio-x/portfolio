import React from 'react';
import { Trophy, FileText, Languages, BookOpen } from 'lucide-react';

export default function Awards() {
  const items = [
    {
      icon: <FileText className="w-5 h-5 text-indigo-400" />,
      category: '자격증',
      iconBg: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      name: '정보처리기사',
      issuer: '한국산업인력공단',
      date: '2025.12',
      description: '최종합격',
    },
    {
      icon: <Languages className="w-5 h-5 text-sky-400" />,
      category: '어학',
      iconBg: 'bg-sky-500/10',
      borderColor: 'border-sky-500/20',
      name: 'TOEIC 815점',
      issuer: '한국 TOEIC 위원회',
      date: '2022.12',
      description: 'PASS',
    },
    {
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      category: '수상',
      iconBg: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      name: '우수논문상',
      issuer: '한국스마트미디어학회',
      date: '2026.11',
      description: '2025 한국스마트미디어학회 추계학술대회',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      category: '교육 이수',
      iconBg: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      name: '메타버스 융합SW 아카데미 4기',
      issuer: '홍익대학교 세종캠퍼스',
      date: '2025.01 ~ 2025.06',
      description: '메타버스 콘텐츠 및 SW 개발 과정 이수',
    },
  ];

  return (
    <section id="awards" className="py-20 bg-slate-900 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Awards & Certifications
          </h2>
          <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto reveal-fade delay-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-950/60 border ${item.borderColor} rounded-2xl p-5 hover:shadow-lg transition-all hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <span className="text-2xs font-semibold text-slate-400 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white leading-snug mb-1">{item.name}</h3>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">{item.description}</p>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-2xs text-slate-500">{item.issuer}</span>
                <span className="text-2xs font-semibold text-slate-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

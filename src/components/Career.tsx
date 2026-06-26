import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export default function Career() {
  const companies = [
    {
      period: '2026.03 ~ 2026.06',
      company: '(주)좋은상자',
      role: '개발부 · 대리',
      type: 'ERP 신규 구축',
      typeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      dotColor: 'border-emerald-500/50',
      iconColor: 'text-emerald-400',
      description: '제조업 ERP 시스템 신규 구축 프로젝트를 1인 개발자로 수행 중. 엑셀 및 수기 기반 업무 프로세스를 웹 기반 ERP 시스템으로 전환하며 업무 분석, DB 설계, 개발, 배포 및 운영 전 과정을 담당.',
      highlights: [
        '원자재 입고 예정 관리 시스템 구축 (협력사별 입고 현황 실시간 조회)',
        '바코드 기반 원자재 입출고 및 재고 관리 시스템 개발',
        '오더별 바코드 라벨 생성 및 출력 기능 구현',
        '생산 설비 자동 배정 로직 개발 (생산 계획 수립 자동화)',
        'Linux 서버 및 Docker 기반 서비스 운영 환경 구성',
      ],
      skills: ['Spring Boot', 'Java', 'MariaDB', 'Docker', 'Linux', 'React', 'Tailwind CSS', 'Nginx'],
    },
    {
      period: '2019.05 ~ 2022.09',
      company: '한솔PNS 아이티서비스부문',
      role: '인프라운영팀·IT서비스2팀 · 선임',
      type: 'ERP 운영 및 유지보수',
      typeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      dotColor: 'border-indigo-500/50',
      iconColor: 'text-indigo-400',
      description: '종이 제조업 ERP 시스템 운영 및 유지보수 담당. 한솔제지, 한솔PNS 지류유통, 한솔홈데코 등 제조업 계열사의 생산·재고·출하·영업 관련 시스템 개발 및 운영.',
      highlights: [
        '생산·재고·출하 관련 ERP 기능 개선 및 신규 기능 개발',
        '사용자 요구사항 분석 및 업무 프로세스 개선 지원',
        'SQL 기반 데이터 조회·분석 및 운영 이슈 대응',
        'ERP 데이터 관리 및 데이터 정합성 검증',
        '시스템 오류 분석 및 장애 대응',
      ],
      skills: ['JSP', 'Java', 'Oracle', 'Nexacro14', 'ExtJS', 'JavaScript', 'jQuery', 'Docker', 'Linux', 'SVN', 'Git'],
    },
  ];

  return (
    <section id="career" className="py-20 bg-slate-900 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Career
          </h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            총 3년 11개월의 경력 중 ERP 운영부터 신규 구축까지, 제조업 도메인 중심의 커리어입니다.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 max-w-4xl mx-auto pl-6 sm:pl-8 reveal-fade delay-2">
          {companies.map((item, idx) => (
            <div key={idx} className="mb-12 last:mb-0 relative group">
              {/* Chronological dot */}
              <span className={`absolute -left-10 sm:-left-12 top-1.5 flex items-center justify-center w-8 h-8 rounded-xl bg-slate-950 border-2 ${item.dotColor} group-hover:border-opacity-100 transition-colors`}>
                <Briefcase className={`w-3.5 h-3.5 ${item.iconColor}`} />
              </span>

              {/* Timeline content card */}
              <div className="bg-slate-950/40 border border-slate-850 rounded-2xl p-6 hover:border-slate-700 transition-colors relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-2xs font-semibold px-2 py-0.5 border rounded-md ${item.typeColor}`}>
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.company}
                    </h3>
                    <div className="text-xs text-slate-400 mt-0.5">{item.role}</div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-1.5">
                  {item.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-900">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-850 text-2xs text-slate-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

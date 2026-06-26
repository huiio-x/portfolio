import React, { useState } from 'react';
import { Monitor, Database, Settings, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';

interface ErpSystem {
  id: number;
  name: string;
  company: string;
  period: string;
  duration: string;
  role: string;
  tech: string[];
  description: string;
  features: string[];
}

interface ErpProject {
  id: number;
  title: string;
  company: string;
  period: string;
  duration: string;
  role: string;
  tech: string[];
  team: string;
  description: string;
  details: string[];
}

export default function ErpOperations() {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const projects: ErpProject[] = [
    {
      id: 1,
      title: '바코드 프로젝트',
      company: '한솔홈데코',
      period: '2020.04 ~ 2020.07',
      duration: '3개월',
      role: '프론트/백엔드 전담',
      tech: ['Java 1.8', 'Tomcat 7', 'Oracle', 'Linux', 'RD', 'WAS', 'SVN'],
      team: '3명',
      description: '부재료 재고관리 및 PDA 인터페이스 개발을 통해 현장 재고 처리와 출고 프로세스를 자동화했습니다.',
      details: [
        '부재료 재고관리: 입고관리, 현장 위치 관리, 현장 위치 이동, 롤 재고 현황, 생산 투입 등록, 롤 사용 현황, 출고 요청 및 출고 요청 목록 개발',
        'PDA 인터페이스: 로그인 처리, 현장 위치 이동, 바코드 리딩을 활용한 가용 정보·롤 정보 조회, 사용량 등록, 출고 등록, 조회 기능 구현',
        '기자재 관리: 기자재 조회, 수량 입력 기능 및 HSP 연계 조회 기능 개발',
      ],
    },
    {
      id: 2,
      title: '한국제지 연계',
      company: '한솔PNS 지류유통',
      period: '2021.05 ~ 2021.08',
      duration: '4개월',
      role: '프론트/백엔드 전담',
      tech: ['JavaScript', 'Java', 'jQuery', 'Oracle', 'Java 1.8', 'Tomcat 8', 'AI Report', 'Docker', 'Nginx', 'WEB', 'WAS', 'Git'],
      team: '3명',
      description: '한국제지 연계 모듈을 개발하여 자재 매핑, 재고 조회, 오더 로직 및 기준 정보 확장을 수행했습니다.',
      details: [
        '한국제지 자재 매핑 및 도착지(납품처) 정보 관리 기능 개발',
        '구매문서 유형 관리, 판매오더 품목 범주 추가, 기준 정보(플랜트·저장 위치) 확장',
        '한국제지 재고 조회 및 입고 처리 화면 개발',
        '지류유통 한국제지 재고 조회 탭 추가 및 직송/직출고 오더 로직 개발',
        '한국제지 오더 단가 반영 기능 구현',
      ],
    },
    {
      id: 3,
      title: 'SalesPortal 개선',
      company: '한솔PNS 지류유통',
      period: '상시',
      duration: '상시',
      role: '넥사크로 개발',
      tech: ['Nexacro14', 'XUP', 'Java 1.8', 'Tomcat 8.5', 'Repia', 'Linux', 'Web', 'WAS', 'Git'],
      team: '1명',
      description: 'SalesPortal 화면 개선 및 신규 기능 개발을 통해 평가 프로세스와 출력 환경을 업그레이드했습니다.',
      details: [
        '평가 프로세스 변경 및 주요 화면 개선',
        '메일링 서비스 신규 개발',
        '웹에디터 적용 및 인쇄 기능 개발',
        '사용자 UX 개선 및 화면 품질 안정화',
      ],
    },
    {
      id: 4,
      title: '인증관리 프로젝트',
      company: '한솔제지',
      period: '2021.10 ~ 2022.02',
      duration: '5개월',
      role: '넥사크로 개발',
      tech: ['Nexacro14', 'XUP', 'Java 1.8', 'Tomcat 8.5', 'Repia', 'Linux', 'Web', 'WAS', 'Git'],
      team: '1명',
      description: '인증관리 신규 화면 개발을 담당하여 인증 프로세스의 사용자 인터페이스를 구축했습니다.',
      details: [
        '인증관리 신규 화면 설계 및 Nexacro 개발',
        '관련 데이터 조회/입력 화면 구현',
        '기존 인증 흐름에 대한 UI 개선 및 운영 안정화',
      ],
    },
  ];

  const systems: ErpSystem[] = [
    {
      id: 1,
      name: '하모니 (웹 ERP)',
      company: '한솔PNS 지류유통',
      period: '2021.01 ~ 2022.09',
      duration: '1년 9개월',
      role: '웹 ERP 개발 및 유지보수',
      tech: ['JavaScript', 'Java', 'jQuery', 'Oracle', 'Java 1.8', 'Tomcat 8', 'Oracle', 'AI Report', 'Docker', 'Nginx', 'Web', 'WAS', 'Git'],
      description: '한솔PNS 지류유통의 핵심 웹 ERP 시스템. 생산, 재고, 출하, 영업 등 전반적인 업무 프로세스를 지원하는 시스템으로, 현업 요구사항 분석 및 신규 기능 개발을 수행했습니다.',
      features: [
        '한국제지 자재 매핑 및 재고 연계 기능 개발',
        '도착지(납품처) 정보 관리 기능 개발',
        '직송/직출고 오더 로직 개발',
        '입고처리 및 재고 조회 기능 개발',
        '판매오더 품목범주 추가 및 기준정보 관리',
      ],
    },
    {
      id: 2,
      name: 'SalesPortal (웹)',
      company: '한솔PNS 지류유통',
      period: '2020.10 ~ 2022.09',
      duration: '2년',
      role: '화면 개발 및 유지보수 (Nexacro/XUP)',
      tech: ['Nexacro14', 'XUP', 'Java 1.8', 'Tomcat 8.5', 'Repia', 'Linux', 'Web', 'WAS', 'Git'],
      description: '영업 포털 시스템. Nexacro14 기반 개발을 담당했으며, 평가 프로세스 변경 및 주요 화면 개발을 수행했습니다.',
      features: [
        '평가 프로세스 변경 및 주요 화면 개선',
        '메일링 서비스 신규 개발',
        '웹에디터 적용 및 인쇄 기능 개발',
        '사용자 인터페이스 개선 작업 상시 수행',
      ],
    },
    {
      id: 3,
      name: 'KMS (웹)',
      company: '한솔제지',
      period: '2019.05 ~ 2022.09',
      duration: '3년 5개월',
      role: '웹 개발 및 유지보수',
      tech: ['JSP', 'Repia', 'Java 8.5', 'Tomcat 8', 'Oracle', 'Windows NT', 'WAS', 'SVN'],
      description: '사내 지식 공유 및 문서 관리용 KMS(Knowledge Management System) 운영 프로젝트. 사용자 요청사항을 반영한 기능 개선과 레거시 로직 유지보수를 수행했으며, 안정적인 시스템 운영을 위한 오류 분석 및 기능 개선 업무를 담당했습니다.',
      features: [
        '사용자 요구사항 분석 및 업무 프로세스 반영',
        'JSP 기반 웹 화면 개발 및 백엔드 로직 수정',
        'SVN 기반 형상관리 및 배포 지원',
        '레거시 소스 분석 및 유지보수',
        '사용자 문의 대응 및 운영 이슈 처리',
      ],
    },
    {
      id: 4,
      name: '주간업무시스템 (웹)',
      company: '한솔제지',
      period: '2020.10 ~ 2022.09',
      duration: '2년',
      role: '웹 개발 및 유지보수',
      tech: ['ExtJS', 'Java 1.8', 'Tomcat 7', 'Oracle', 'RD', 'Linux', 'WAS', 'SVN'],
      description: '주간 단위 업무 보고 및 관리 시스템. ExtJS 기반 웹 프론트엔드와 Java 백엔드로 구성된 시스템의 개발 및 유지보수를 담당했습니다.',
      features: [
        '주간 업무 현황 관리 화면 개발 및 유지보수',
        '현업 부서 요청사항 반영 및 기능 개선',
        '데이터 조회 및 리포트 기능 개발',
      ],
    },
    {
      id: 5,
      name: 'HSP (웹)',
      company: '한솔홈데코',
      period: '2019.05 ~ 2020.12',
      duration: '1년 8개월',
      role: '웹 개발 및 유지보수',
      tech: ['JSP', 'jQuery', 'MyBatis', 'Java 1.8', 'Tomcat 7', 'Oracle', 'RD', 'Linux', 'WAS', 'SVN'],
      description: '한솔홈데코 ERP 시스템 운영 중 바코드 기반 부재료 재고관리와 PDA 연동 개발을 진행했습니다.',
      features: [
        '부재료 재고관리 시스템 개발: 입고, 현장 위치 관리, 롤 재고 현황, 생산 투입 등록',
        '기자재 관리 기능 개발 및 HSP 연계 조회 화면 지원',
      ],
    },
  ];

  const stats = [
    { label: '운영 기간', value: '3년 5개월', sub: '한솔PNS' },
    { label: '운영 시스템 수', value: '5+', sub: '제조업 ERP' },
    { label: '담당 도메인', value: '생산·재고·출하·영업', sub: '종이 제조업' },
    { label: '개발 환경', value: 'Oracle / Linux / Java', sub: '주요 기술 스택' },
  ];

  return (
    <section id="erp-ops" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-500 bg-sky-500/10 px-3 py-1 rounded-full">
            ERP Operations — 한솔PNS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl mt-3">
            ERP 운영 경험
          </h2>
          <div className="h-1 w-12 bg-sky-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            한솔PNS에서 3년 5개월간 제조업 계열사의 ERP 시스템을 운영·유지보수하며
            생산·재고·출하·영업 업무 프로세스를 깊이 이해했습니다.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 reveal-fade">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-2xl p-4 text-center shadow-sm">
              <div className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">{stat.label}</div>
              <div className="text-2xs text-slate-400 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Project Experience */}
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-2xl p-8 sm:p-10 mb-10 shadow-sm reveal-fade">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">ERP 프로젝트 경험</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                한솔PNS 및 한솔홈데코 현장에서 수행한 주요 ERP 프로젝트를 핵심 내용 중심으로 정리했습니다.
              </p>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2 mt-2">
            {projects.map((project) => (
              <div key={project.id} className="border border-slate-200 dark:border-slate-850 rounded-2xl p-6 sm:p-7 bg-slate-50 dark:bg-slate-900">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{project.title}</h4>
                    <p className="text-2xs text-slate-400 mt-1">{project.company} · {project.period}</p>
                  </div>
                  <span className="text-2xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded-full">
                    {project.duration}
                  </span>
                </div>
                <div className="mt-4 text-xs text-slate-600 dark:text-slate-300">
                  <p className="font-semibold">역할: <span className="font-normal">{project.role}</span></p>
                  <p className="font-semibold mt-1">개발 인원: <span className="font-normal">{project.team}</span></p>
                  <p className="font-semibold mt-1">설명: <span className="font-normal">{project.description}</span></p>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-sky-400">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-slate-200 dark:border-slate-850">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-2xs text-slate-500 dark:text-slate-400 rounded font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Knowledge */}
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm reveal-fade">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-sky-500" />
            ERP 도메인 운영 경험 영역
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: '생산 관리', desc: '생산 지시, 공정 관리, 실적 처리', color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20' },
              { label: '재고 관리', desc: '원자재·제품 수불, 재고 현황 조회', color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20' },
              { label: '출하 관리', desc: '출하 처리, 대장 관리, 납품처 관리', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
              { label: '영업·데이터', desc: '영업 포털, SQL 데이터 분석 및 정합성', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' },
            ].map((domain, idx) => (
              <div key={idx} className={`border rounded-xl p-3 ${domain.color}`}>
                <div className="text-xs font-bold mb-1">{domain.label}</div>
                <div className="text-2xs opacity-80 leading-relaxed">{domain.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Systems Accordion */}
        <div className="space-y-4 reveal-fade delay-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">운영 시스템 상세</h3>
          {systems.map((system) => {
            const isOpen = openIds.includes(system.id);
            return (
              <div
                key={system.id}
                className={`bg-white dark:bg-slate-950 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-slate-300 dark:border-slate-700 shadow-md'
                    : 'border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-800'
                }`}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left group"
                  onClick={() =>
                    setOpenIds((prevOpenIds) =>
                      prevOpenIds.includes(system.id)
                        ? prevOpenIds.filter((id) => id !== system.id)
                        : [...prevOpenIds, system.id]
                    )
                  }
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20">
                      <Monitor className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {system.name}
                        </h4>
                        <span className="text-2xs px-2 py-0.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-slate-500 dark:text-slate-400">
                          {system.duration}
                        </span>
                      </div>
                      <div className="text-2xs text-slate-400 mt-0.5">{system.company} · {system.period}</div>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 border-t border-slate-100 dark:border-slate-850">
                    <div className="mt-4 space-y-4">
                      <div>
                        <div className="text-2xs text-slate-400 font-semibold uppercase mb-1">역할</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{system.role}</p>
                      </div>
                      <div>
                        <div className="text-2xs text-slate-400 font-semibold uppercase mb-1">설명</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{system.description}</p>
                      </div>
                      <div>
                        <div className="text-2xs text-slate-400 font-semibold uppercase mb-2">주요 업무</div>
                        <ul className="space-y-1.5">
                          {system.features.map((f, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <span className="text-sky-400 mt-0.5 shrink-0">•</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-900">
                        {system.tech.map((t, tIdx) => (
                          <span key={tIdx} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-2xs text-slate-500 dark:text-slate-400 rounded font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

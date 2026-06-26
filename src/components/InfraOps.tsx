import React from 'react';
import { Server, Database, HardDrive, Terminal, Shield, RefreshCw } from 'lucide-react';

export default function InfraOps() {
  const infraItems = [
    {
      icon: <Terminal className="w-5 h-5 text-indigo-400" />,
      title: 'Linux 서버 운영',
      color: 'border-indigo-500/20 bg-indigo-500/5',
      iconBg: 'bg-indigo-500/10',
      items: [
        'Linux 환경 웹 시스템 유지보수 경험 (한솔PNS 3년 5개월)',
        '현재 좋은상자 Linux 서버 단독 구축 및 운영',
        '포트 포워딩, 방화벽 설정 및 보안 관리',
        'Nginx 웹 서버 설정 및 리버스 프록시 구성',
        '서비스 모니터링 및 운영 이슈 대응',
      ],
    },
    {
      icon: <Server className="w-5 h-5 text-sky-400" />,
      title: 'Docker 기반 배포',
      color: 'border-sky-500/20 bg-sky-500/5',
      iconBg: 'bg-sky-500/10',
      items: [
        'Docker Compose를 활용한 Spring Boot 서비스 운영',
        '컨테이너 기반 배포 및 버전 업데이트 수행',
        '운영 환경 설정 및 로그 관리',
        '로컬·운영 환경 간 실행 환경 일관성 확보',
        '서비스 배포 및 운영 자동화 경험',
      ],
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: 'MariaDB / Oracle 운영',
      color: 'border-emerald-500/20 bg-emerald-500/5',
      iconBg: 'bg-emerald-500/10',
      items: [
        'MariaDB 기반 ERP 데이터베이스 설계 및 운영',
        'Oracle 기반 ERP 데이터 관리 및 유지보수',
        'SQL을 활용한 데이터 조회·분석 및 정합성 검증',
        '업무 프로세스 기반 테이블 설계 및 데이터 모델링',
        'ERP 운영 데이터 이슈 분석 및 데이터 관리',
      ],
    },
    {
      icon: <HardDrive className="w-5 h-5 text-amber-400" />,
      title: '업무 프로세스 분석',
      color: 'border-amber-500/20 bg-amber-500/5',
      iconBg: 'bg-amber-500/10',
      items: [
        '현업 부서 인터뷰 및 요구사항 수집',
        '엑셀·수기 업무 프로세스 분석',
        '제조업 업무 흐름 기반 시스템 설계',
        '반복 업무 자동화를 통한 업무 효율 개선',
        '사용자 피드백 반영 및 프로세스 개선',
      ],
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-purple-400" />,
      title: '서비스 배포 및 유지보수',
      color: 'border-purple-500/20 bg-purple-500/5',
      iconBg: 'bg-purple-500/10',
      items: [
        '1인 개발로 설계부터 배포까지 전 과정 담당',
        '배포 스크립트 작성으로 릴리즈 절차 표준화',
        '운영 중 발생하는 사용자 요청사항 분석 및 신속 대응',
        '서비스 운영 중 오류 분석 및 장애 대응 경험',
        'ERP 운영 유지보수 3년 5개월 한솔PNS 경험 보유',
      ],
    },
    {
      icon: <Shield className="w-5 h-5 text-rose-400" />,
      title: '운영 환경 모니터링',
      color: 'border-rose-500/20 bg-rose-500/5',
      iconBg: 'bg-rose-500/10',
      items: [
        '운영 환경 모니터링 및 유지보수 수행',
        'ERP 시스템 장애 원인 분석 및 신속 복구 대응',
        '데이터 정합성 검증 및 이상 데이터 추적',
        'HTTP 405 오류 등 운영 이슈 직접 해결 경험',
        '현업 부서 요청사항 반영을 통한 업무 효율화 지원',
      ],
    },
  ];

  return (
    <section id="infra" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
            Operations & Infrastructure
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl mt-3">
            운영 및 인프라 경험
          </h2>
          <div className="h-1 w-12 bg-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            개발뿐 아니라 운영도 중요합니다.<br /> Linux, Docker, DB 운영부터 백업·모니터링까지
            서비스 운영 전반에 대한 경험을 보유하고 있습니다.
          </p>
        </div>

        {/* Infra Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-fade delay-2">
          {infraItems.map((item, idx) => (
            <div
              key={idx}
              className={`border ${item.color} rounded-2xl p-6 hover:shadow-md transition-all`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h3>
              </div>
              <ul className="space-y-2">
                {item.items.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="text-indigo-400 mt-0.5 select-none shrink-0">•</span>
                    <span>{detail}</span>
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

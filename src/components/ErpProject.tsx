import React, { useState } from 'react';
import {
  Package, Calendar, Settings, Barcode, Tag, ShieldCheck,
  ChevronDown, ChevronUp, CheckCircle, Clock, Users, Server
} from 'lucide-react';

// 실제 이미지 경로 (public/images/ 폴더에 위치)
// 이미지1: 원자재 입고 예정 관리 화면
const img1 = `${import.meta.env.BASE_URL}images/erp-01-receive-schedule.png`;
// 이미지2: 인쇄 공정 자동 스케줄링 화면 (모바일 전체, PC 텍스트 아래/우측 분리)
const img2 = `${import.meta.env.BASE_URL}images/erp-02-print-schedule.png`;
const img2a = `${import.meta.env.BASE_URL}images/erp-02-print-schedule-01.png`;
const img2b = `${import.meta.env.BASE_URL}images/erp-02-print-schedule-02.png`;
// 보조 이미지: 인쇄 비용/계산 화면
const img2calc = `${import.meta.env.BASE_URL}images/erp-02-print-calc.png`;
// 이미지3: 바코드 기반 입고 처리 화면
const img3 = `${import.meta.env.BASE_URL}images/erp-03-barcode-receive.png`;
// 이미지4: 바코드 라벨 생성 및 출력 화면
const img4 = `${import.meta.env.BASE_URL}images/erp-04-barcode-label.png`;
// 이미지5: ERP 관리자 화면
const img5 = `${import.meta.env.BASE_URL}images/erp-05-admin.png`;

interface FeatureCard {
  id: number;
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  details: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function ErpProject() {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const background = [
    { label: '엑셀 관리', icon: '📊', desc: '협력사별 원자재 입고 예정일을 엑셀로 관리' },
    { label: '수동 일정 확인', icon: '📞', desc: '원자재 출고 및 입고 일정을 전화, 카카오톡 등으로 반복 확인' },
    { label: '수기 재고 기록', icon: '✏️', desc: '재고 현황을 종이 대장에 수기 기록' },
    { label: '실시간 파악 불가', icon: '❓', desc: '실시간 재고 현황 파악 불가' },
    { label: '설비 자동 배정 부재', icon: '⚙️', desc: '인쇄 설비별 작업 조건을 고려한 자동 호기 배정이 없어 계획 업무가 과중' },
    { label: '비용 계산 비효율', icon: '💰', desc: '인쇄비·코팅비·감리비를 수작업으로 계산하여 비용 관리가 번거로움' },
    { label: '수작업 생산 계획', icon: '⏱️', desc: '생산 일정 수립에 반복적인 수작업 소요' },
  ];

  const features: FeatureCard[] = [
    {
      id: 1,
      icon: <Package className="w-5 h-5" />,
      badge: '원자재 관리',
      badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      title: '원자재 입고 예정 관리 시스템',
      description: '협력사별 오더에 대한 입고 예정일을 등록·관리하고, 실시간 입고 현황을 조회할 수 있는 시스템. 생산 일정 수립을 위한 원자재 수급 가시성을 확보합니다.',
      details: [
        '협력사별 오더에 대한 입고 예정일 등록 및 관리 기능 개발',
        '실시간 입고 현황 조회 기능 구현 (오더 상태별 필터링)',
        '생산 일정 수립을 위한 원자재 수급 가시성 확보',
        '입고 완료/미입고/지연 상태 관리 및 현황 대시보드',
      ],
      imageSrc: img1,
      imageAlt: '원자재 입고 예정 관리 화면',
    },
    {
      id: 2,
      icon: <Settings className="w-5 h-5" />,
      badge: '생산 자동화',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      title: '인쇄 공정 자동 스케줄링 시스템',
      description: '오더 정보를 기반으로 인쇄 기계를 자동 배정하는 규칙 기반 로직. 단순 일정 관리가 아닌, 인쇄 설비별 작업 조건을 분석하여 최적 호기를 자동으로 배정하고 생산 계획을 자동으로 수립합니다.',
      details: [
        '인쇄 설비(호기)별 작업 조건 분석 로직 개발',
        '오더 정보 기반 자동 호기 배정 규칙 기반 로직 구현',
        '수작업 생산 계획 업무를 시스템 자동화로 전환',
        '생산 운영 효율성 향상 및 계획 수립 시간 단축',
      ],
      imageSrc: img2,
      imageAlt: '인쇄 공정 자동 스케줄링 화면',
    },
    {
      id: 3,
      icon: <Barcode className="w-5 h-5" />,
      badge: '재고 관리',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      title: '바코드 기반 입고 처리 시스템',
      description: '모바일 환경에서 바코드 스캔을 활용하여 원자재 입고 처리를 자동화. 입고 이력 관리 및 실시간 재고 반영으로 재고 정확성을 향상합니다.',
      details: [
        '모바일 환경 카메라 바코드 스캔 기능 구현',
        '바코드 스캔을 활용한 입고/출고 처리 기능 구현',
        '스캔 즉시 실시간 재고 반영 처리',
        '입고 이력 관리 및 취소 기능 개발',
      ],
      imageSrc: img3,
      imageAlt: '바코드 기반 입고 처리 화면',
    },
    {
      id: 4,
      icon: <Tag className="w-5 h-5" />,
      badge: '라벨 출력',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      title: '바코드 라벨 생성 및 출력',
      description: '오더별 바코드 라벨을 자동 생성하고 인쇄 출력하는 기능. 원자재 재고 추적성을 확보하고 수기 라벨 작성 업무를 자동화합니다.',
      details: [
        '오더 정보 기반 바코드 라벨 자동 생성',
        '납품처, 제품명, 지종, 규격, 수량, 입고처, 입고일 정보 포함',
        '프린터 직접 출력 기능 구현',
        '오더별 재고 추적성 확보',
      ],
      imageSrc: img4,
      imageAlt: '바코드 라벨 생성 및 출력 화면',
    },
    {
      id: 5,
      icon: <ShieldCheck className="w-5 h-5" />,
      badge: '시스템 관리',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      title: '관리자 기능',
      description: '역할·메뉴·권한·코드 마스터를 관리하는 관리자 시스템. 사용자별 접근 권한을 세밀하게 제어하고 시스템 운영을 지원합니다.',
      details: [
        '역할(Role) 기반 메뉴 접근 권한 관리',
        '사용자 관리 및 권한 설정 기능',
        '코드 마스터 및 기준정보 관리',
        '필드 권한 관리 기능 개발',
      ],
      imageSrc: img5,
      imageAlt: 'ERP 관리자 화면',
    },
  ];

  const projectInfo = [
    { label: '역할', value: '1인 개발 (기획·설계·개발·배포·운영)', icon: <Users className="w-4 h-4 text-indigo-400" /> },
    { label: '기간', value: '2026.03 ~ 2026.06', icon: <Clock className="w-4 h-4 text-sky-400" /> },
    { label: '기술 스택', value: 'Spring Boot · Java · MariaDB · Docker', icon: <Server className="w-4 h-4 text-emerald-400" /> },
    { label: '배포 환경', value: 'Linux · Docker · Nginx', icon: <Settings className="w-4 h-4 text-amber-400" /> },
  ];

  const processSteps = [
    {
      title: '요구사항 분석',
      highlights: ['현업 담당자 인터뷰', '업무 프로세스 파악', '기존 엑셀 및 수기 업무 분석'],
    },
    {
      title: 'ERD 설계',
      highlights: ['업무 프로세스 기반 데이터 모델링', '테이블 및 관계 설계'],
    },
    {
      title: 'Spring Boot API 개발',
      highlights: ['REST API 설계 및 구현', '비즈니스 로직 개발'],
    },
    {
      title: 'React 화면 개발',
      highlights: ['사용자 화면 구현', '상태 관리 및 API 연동'],
    },
    {
      title: 'Docker 배포',
      highlights: ['컨테이너 기반 운영 환경 구성', '배포 자동화 환경 구축'],
    },
    {
      title: '운영 및 유지보수',
      highlights: ['기능 개선', '장애 대응', '운영 지원'],
    },
  ];

  const achievements = [
    '엑셀 기반 업무를 웹 ERP로 전환',
    '입고 / 출고 / 재고 프로세스 통합',
    '생산 설비 자동 배정 시스템 구축',
    '인쇄비·코팅비·감리비 자동 계산 로직 구현',
    '수작업 생산 계획 업무 자동화',
    '바코드 기반 입고 기능 구축',
    '라벨 출력 자동화 구현',
    '실시간 재고 조회 기능 제공',
  ];

  const responsibilities = [
    '요구사항 분석',
    'DB 설계',
    'Spring Boot API 개발',
    'React 프론트엔드 개발',
    'Docker 배포',
    'MariaDB 운영',
    '장애 대응 및 유지보수',
  ];

  return (
    <section id="erp-project" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
            Key Project — 좋은상자
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl mt-3">
            생산관리 및 재고관리 ERP 신규 구축
          </h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            엑셀·수기 기반 업무를 웹 ERP 시스템으로 전환한 1인 구축 프로젝트.<br />
            요구사항 분석부터 설계, 개발, 배포, 운영까지 전 과정을 담당.
          </p>
        </div>

        {/* Project Background */}
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-2xl p-6 sm:p-8 shadow-sm mb-10 reveal-fade">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            프로젝트 배경 — 도입 전 문제점
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {background.map((bg, idx) => (
              <div key={idx} className="p-4 bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-950/20 rounded-xl text-center">
                <div className="text-2xl mb-2">{bg.icon}</div>
                <div className="text-xs font-bold text-rose-600 dark:text-rose-400 mb-1">{bg.label}</div>
                <div className="text-2xs text-slate-500 dark:text-slate-400 leading-relaxed">{bg.desc}</div>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center my-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-6 bg-slate-300 dark:bg-slate-700" />
              <div className="text-xs font-semibold text-indigo-500 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full">
                웹 기반 ERP 시스템으로 전환
              </div>
              <div className="w-px h-6 bg-slate-300 dark:bg-slate-700" />
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {projectInfo.map((info, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-start gap-2">
                <div className="mt-0.5">{info.icon}</div>
                <div>
                  <div className="text-2xs text-slate-400 font-semibold uppercase">{info.label}</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 leading-tight">{info.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 프로젝트 진행 과정 */}
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-8 shadow-sm mb-10 reveal-fade delay-2">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
              프로젝트 진행 과정
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-5">
              ERP 구축 프로젝트를 진행하며 수행한 전체 개발 프로세스
            </h3>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              요구사항 분석부터 운영까지 이어지는 단계별 개발 흐름을 타임라인으로 정리했습니다.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {processSteps.map((step, idx) => (
              <div key={step.title} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-3xl p-5 sm:p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h4>
                </div>
                <ul className="grid gap-2 text-sm text-slate-600 dark:text-slate-300">
                  {step.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ERP 구축 성과 */}
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-8 shadow-sm mb-10 reveal-fade delay-3">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
              ERP 구축 성과
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-5">
              생산 계획 자동화 및 재고 관리 통합 ERP 시스템 구축
            </h3>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              생산·재고·원가 관리 기능과 생산 설비 자동 배정과 인쇄비·코팅비·감리비 자동 계산을 포함한 ERP를 1인 개발로 완성하고 실무 운영까지 이어갔습니다.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="px-3 py-2 rounded-full bg-indigo-500 text-white text-xs font-semibold">1인 개발</span>
            <span className="px-3 py-2 rounded-full bg-slate-900 text-slate-100 text-xs font-semibold">기여도 100%</span>
            <span className="px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-800">
              운영 중
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            요구사항 분석부터 설계, 개발, 배포, 운영까지 전 과정 수행
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {achievements.map((achievement) => (
              <div key={achievement} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-3xl p-5">
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 담당 역할 */}
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-3xl p-6 sm:p-8 shadow-sm reveal-fade delay-4">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
              담당 역할
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-5">
              ERP 시스템 구축 전 과정 직접 수행
            </h3>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl bg-slate-900 text-slate-100 p-6 shadow-sm border border-slate-800">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white">
                기여도 100%
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                요구사항 분석부터 설계, 개발, 배포, 운영까지 모두 직접 수행하며 실제 운영 ERP 시스템을 완성했습니다.
              </p>
              <div className="mt-6 space-y-3">
                {responsibilities.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {responsibilities.map((item) => (
                <div key={item} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-3xl p-4">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Accordion */}
        <div className="space-y-4 reveal-fade delay-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-6">주요 기능</h3>

          {features.map((feature) => {
            const isOpen = openIds.includes(feature.id);
            return (
              <div
                key={feature.id}
                className={`bg-white dark:bg-slate-950 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-slate-300 dark:border-slate-700 shadow-lg'
                    : 'border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-800'
                }`}
              >
                {/* Header */}
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  onClick={() => {
                    if (isOpen) {
                      setOpenIds(openIds.filter((id) => id !== feature.id));
                    } else {
                      setOpenIds([...openIds, feature.id]);
                    }
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl border ${feature.badgeColor}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <span className={`text-2xs font-semibold px-2 py-0.5 border rounded-md ${feature.badgeColor}`}>
                        {feature.badge}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {feature.title}
                      </h4>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expandable Body */}
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-slate-100 dark:border-slate-850">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
                      {/* Left: Description + Details */}
                      <div className="space-y-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="space-y-2">
                          {feature.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                              <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* 보조 이미지: 인쇄 비용/계산 화면 (텍스트 하단) */}
                        {feature.id === 2 && (
                          <div className="mt-10 bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                            <img
                              src={img2calc}
                              alt="인쇄 계산 화면"
                              className="w-full h-auto object-contain rounded-xl max-h-[300px]"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<div class="flex flex-col items-center justify-center h-40 text-slate-400 gap-2"><span class="text-3xl">🖼️</span><span class="text-xs">인쇄 계산 화면</span></div>`;
                                }
                              }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Right: Image */}
                      {feature.id === 2 ? (
                        <div className="flex items-center justify-center">
                          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 w-full">
                            <img
                              src={img2}
                              alt="인쇄 공정 자동 스케줄링 화면"
                              className="w-full h-auto object-contain rounded-xl max-h-[640px]"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<div class="flex flex-col items-center justify-center h-64 text-slate-400 gap-2"><span class="text-3xl">🖼️</span><span class="text-xs">인쇄 공정 자동 스케줄링 화면</span></div>`;
                                }
                              }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex items-center justify-center min-h-48">
                          <img
                            src={feature.imageSrc}
                            alt={feature.imageAlt}
                            className={feature.id === 3 ? 'max-h-[340px] w-full h-auto object-contain rounded-xl' : 'w-full h-full object-contain rounded-xl'}
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="flex flex-col items-center justify-center h-48 text-slate-400 gap-2"><span class="text-3xl">🖼️</span><span class="text-xs">${feature.imageAlt}</span></div>`;
                              }
                            }}
                          />
                        </div>
                      )}
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

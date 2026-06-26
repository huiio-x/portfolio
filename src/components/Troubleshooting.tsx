import React, { useState } from 'react';
import { Bug, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Search, Database, Terminal, Server } from 'lucide-react';

interface TroubleCase {
  id: number;
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  title: string;
  symptom: string;
  cause: string;
  solution: string;
  tags: string[];
}

export default function Troubleshooting() {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const cases: TroubleCase[] = [
    {
      id: 1,
      icon: <Database className="w-5 h-5 text-sky-400" />,
      badge: '운영 / 모니터링',
      badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      title: 'NAS 일일 점검 및 운영 모니터링 자동화',
      symptom: `ERP, MariaDB, Docker 컨테이너를 NAS 환경에서 운영하고 있었으나 서버 상태를 수시로 확인할 수 있는 체계가 없음. 디스크 용량 부족, 컨테이너 비정상 종료, 서비스 장애 등이 발생해도 관리자가 직접 접속하여 확인해야 했으며, 장애를 늦게 인지할 위험이 존재.`,
      cause: `NAS 서버에서 웹 서비스, Docker 컨테이너, MariaDB를 함께 운영하고 있었지만 운영 상태를 통합적으로 점검하는 시스템이 없었습니다. 디스크 사용량, 컨테이너 상태, 서비스 응답 여부, DB 상태 등을 개별적으로 확인해야 했기 때문에 운영 관리 효율이 낮고 장애 대응이 지연될 수 있었습니다.`,
      solution: `Shell Script 기반의 자동 점검 시스템을 구축하여 NAS 상태를 주기적으로 수집하도록 구현했습니다. 디스크 사용량, 메모리 사용량, Docker 컨테이너 상태, 컨테이너 재시작 횟수, 웹 서비스 HTTP 응답, MariaDB 연결 상태, 로그 에러 현황 등을 자동 점검하도록 구성했습니다. 점검 결과를 OK / WARN / FAIL 단계로 분류하여 이메일로 자동 발송함으로써 서버에 직접 접속하지 않아도 운영 상태를 즉시 확인할 수 있는 모니터링 체계를 구축했습니다.`,
      tags: ['Linux', 'Docker', 'MariaDB', 'Shell Script', 'NAS', 'SMTP'],
    },
    {
      id: 2,
      icon: <Bug className="w-5 h-5 text-purple-400" />,
      badge: 'API / HTTP',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      title: 'HTTP 405 Method Not Allowed 오류 해결',
      symptom: `그룹 주문의 입고예정일 수정 시 일부 요청에서 HTTP 405 Method Not Allowed 오류가 간헐적으로 발생. 단일 주문 수정은 정상 동작했으나, 그룹 주문 수정 시 동일한 API를 동시에 호출하는 환경에서 일부 요청만 실패하는 현상이 운영 서버에서만 재현됨.`,
      cause: `그룹 주문 수정 로직의 Promise.all 기반 병렬 요청 구조를 순차 요청 방식으로 변경했습니다. 이후 동일 기능에 대한 반복 테스트를 수행하여 오류가 재현되지 않음을 확인했으며, 관련 화면 및 기능 전반에 동일한 개선 사항을 적용하여 안정성을 확보했습니다.`,
      solution: `Spring Security 설정에서 OPTIONS 메서드를 허용하도록 구성. CorsConfigurationSource 빈을 등록하여 CORS 설정을 전역으로 적용. 각 컨트롤러의 Request Mapping 메서드 타입을 재검토하여 올바르게 수정. 이후 CORS 관련 이슈 재발 없이 안정적으로 운영 중.`,
      tags: ['Spring Boot', 'React', 'TypeScript', 'Nginx', 'Docker', 'HTTP 405', '운영 장애 분석'],
    },
    {
      id: 3,
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      badge: 'Excel / Upload',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      title: '엑셀 업로드 처리 개선',
      symptom: `협력사 오더 정보를 엑셀 파일로 일괄 업로드하는 기능에서 대용량 파일 처리 시 응답이 느리거나 오류가 발생하는 문제. 사용자가 업로드 후 결과를 오랫동안 기다려야 하는 상황.`,
      cause: `엑셀 파일 전체를 메모리에 한 번에 로드하는 방식으로 처리하여 대용량 파일 시 메모리 사용량이 급증. 또한 유효성 검증 없이 DB에 일괄 insert를 시도하다 중간에 오류 발생 시 전체 롤백이 되지 않는 문제도 있었습니다.`,
      solution: `Apache POI의 스트리밍 처리 방식을 적용하여 대용량 엑셀 데이터를 행 단위로 처리함으로써 메모리 사용량을 개선했습니다. 각 행에 대한 유효성 검증 및 오류 피드백 기능을 추가하여 데이터 품질을 높였으며, 트랜잭션 처리를 통해 오류 발생 시 롤백을 보장하도록 구현했습니다. 또한 업로드 결과를 요약하여 사용자에게 즉시 제공할 수 있도록 개선했습니다.`,
      tags: ['Apache POI', 'Excel Upload', 'Spring Boot', 'Transaction', 'Stream Processing'],
    },
  ];

  return (
    <section id="troubleshooting" className="py-20 bg-slate-900 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full">
            Problem Solving
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-3">
            주요 문제 해결 사례
          </h2>
          <div className="h-1 w-12 bg-rose-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            ERP 구축 및 운영 과정에서 직접 해결한 실제 문제 사례입니다. 현상 → 원인 → 해결의 과정을 기술합니다.
          </p>
        </div>

        {/* Accordion Cases */}
        <div className="space-y-4 max-w-5xl mx-auto reveal-fade delay-2">
          {cases.map((c) => {
            const isOpen = openIds.includes(c.id);
            return (
              <div
                key={c.id}
                className={`bg-slate-950/60 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-slate-700 shadow-lg shadow-slate-950/50'
                    : 'border-slate-850 hover:border-slate-800'
                }`}
              >
                {/* Header */}
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  onClick={() =>
                    setOpenIds((prevOpenIds) =>
                      prevOpenIds.includes(c.id)
                        ? prevOpenIds.filter((id) => id !== c.id)
                        : [...prevOpenIds, c.id]
                    )
                  }
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {c.icon}
                    </div>
                    <div>
                      <span className={`text-2xs font-semibold px-2 py-0.5 border rounded-md ${c.badgeColor}`}>
                        {c.badge}
                      </span>
                      <h4 className="text-base font-bold text-slate-100 mt-1 group-hover:text-white transition-colors">
                        {c.title}
                      </h4>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0 text-slate-500">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expandable Body */}
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-slate-850">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
                      {/* Symptom */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          문제 상황
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">{c.symptom}</p>
                      </div>

                      {/* Root Cause */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                          <Search className="w-3.5 h-3.5" />
                          원인 분석
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">{c.cause}</p>
                      </div>

                      {/* Solution */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          해결 방법
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">{c.solution}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-850">
                      {c.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 bg-slate-900 border border-slate-850 text-2xs text-slate-300 rounded font-mono">
                          {tag}
                        </span>
                      ))}
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

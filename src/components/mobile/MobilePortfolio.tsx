import React, { useMemo, useState } from 'react';
import {
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Bug,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  HardDrive,
  Languages,
  Layers,
  Mail,
  Map,
  Monitor,
  Moon,
  Package,
  RefreshCw,
  ScanLine,
  Server,
  Settings,
  ShieldCheck,
  Shield,
  Sparkles,
  SunMedium,
  Terminal,
  Trophy,
  Users,
} from 'lucide-react';

interface MobilePortfolioProps {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  onContactClick?: () => void;
}

export default function MobilePortfolio(props: MobilePortfolioProps) {
  const { onContactClick } = props;
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    about: false,
    career: false,
    erp: false,
    troubleshooting: false,
    ops: false,
    architecture: false,
    erpOps: false,
    otherProjects: false,
    education: false,
    awards: false,
    contact: false,
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('복사되었습니다!');
    }).catch(() => {
      alert('복사에 실패했습니다.');
    });
  };

  const [selectedDetail, setSelectedDetail] = useState<{
    title: string;
    body: string;
    bullets: string[];
    sections?: { label: string; content: string }[];
    tags?: string[];
  } | null>(null);
  const [erpGalleryOpen, setErpGalleryOpen] = useState(false);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isDark = true;

  const sectionToggleMap: Record<string, keyof typeof openSections> = {
    about: 'about',
    career: 'career',
    erp: 'erp',
    architecture: 'architecture',
    ops: 'ops',
    troubleshooting: 'troubleshooting',
    'erp-ops': 'erpOps',
    'other-projects': 'otherProjects',
    education: 'education',
    awards: 'awards',
    contact: 'contact',
  };

  const handleHeaderNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const nodes = Array.from(document.querySelectorAll(`#${id}`)) as HTMLElement[];
    const visible = nodes.find((n) => {
      if (!n) return false;
      const style = window.getComputedStyle(n);
      return style.display !== 'none' && style.visibility !== 'hidden' && n.offsetParent !== null;
    });
    const target = visible || nodes[0];

    if (target) {
      const topOffset = 110;
      const elementTop = target.getBoundingClientRect().top + window.scrollY - topOffset;
      window.scrollTo({ top: elementTop, behavior: 'smooth' });
    }

    const toggleKey = sectionToggleMap[id];
    if (toggleKey) {
      setTimeout(() => {
        setOpenSections((prev) => ({ ...prev, [toggleKey]: true }));
      }, 300);
    }
  };

  const headerNavItems = useMemo(
    () => [
      { id: 'home', label: '홈' },
      { id: 'about', label: '소개' },
      { id: 'career', label: '경력' },
      { id: 'erp', label: 'ERP' },
      { id: 'architecture', label: '아키텍처' },
      { id: 'ops', label: '운영' },
      { id: 'troubleshooting', label: '문제 해결' },
      { id: 'erp-ops', label: 'ERP 운영' },
      { id: 'other-projects', label: '기타 프로젝트' },
      { id: 'education', label: '학력' },
      { id: 'awards', label: '수상' },
      { id: 'contact', label: '연락' },
    ],
    []
  );

  const profileDetails = useMemo(
    () => [
      { label: '이름', value: '최희정 (Huijeong Choi)' },
      { label: '경력', value: '총 3년 11개월' },
      { label: '이메일', value: 'hjeong0309@gmail.com' },
      { label: '거주지', value: '대한민국 서울' },
    ],
    []
  );

  const values = useMemo(
    () => [
      {
        title: 'ERP 업무를 이해하는 개발자',
        description:
          '한솔PNS에서 약 3년 5개월 동안 제조업 계열사의 ERP와 업무 시스템 개발과 유지보수를 담당했습니다. 생산·재고·출하·영업 흐름을 실제 업무와 연결해 이해하는 경험을 쌓았습니다.',
      },
      {
        title: '운영과 구축을 모두 경험한 개발자',
        description:
          '제조업 ERP 신규 구축 프로젝트를 1인 개발자로 진행했습니다. 요구사항 분석부터 설계, 개발, 배포, 운영까지 전 과정을 직접 담당하고 있습니다.',
      },
      {
        title: '문제 해결을 위한 개발을 지향합니다',
        description:
          '반복 업무를 줄이는 자동 배정 로직과 바코드 기반 재고 운영 등 실제 현장에서 효과를 만드는 개발을 중시합니다.',
      },
    ],
    []
  );

  const techStacks = useMemo(
    () => [
      { category: 'Backend', skills: ['Java', 'JSP', 'MyBatis'] },
      { category: 'Database', skills: ['Oracle', 'MariaDB'] },
      { category: 'Frontend', skills: ['JavaScript', 'jQuery', 'ExtJS', 'Nexacro'] },
      { category: 'DevOps', skills: ['Linux', 'Docker', 'Tomcat'] },
      { category: 'VCS', skills: ['Git', 'SVN'] },
    ],
    []
  );

  const careerItems = useMemo(
    () => [
      {
        period: '2026.03 ~ 2026.06',
        company: '(주)좋은상자',
        role: '개발부 · 대리',
        description:
          '제조업 ERP 신규 구축 프로젝트를 1인 개발자로 수행했습니다.\n엑셀·수기 기반 업무를 웹 기반 ERP 시스템으로 전환하며 분석, 설계, 개발, 배포, 운영까지 전 과정을 담당했습니다.',
        highlights: [
          '원자재 입고 예정 관리 시스템 구축',
          '바코드 기반 원자재 입출고 및 재고 관리',
          '오더별 바코드 라벨 생성 및 출력',
          '생산 설비 자동 배정 로직 개발',
          'Linux 서버 및 Docker 기반 운영 환경 구성',
        ],
        skills: ['Spring Boot', 'Java', 'MariaDB', 'Docker', 'Linux', 'React', 'Tailwind CSS', 'Nginx'],
      },
      {
        period: '2019.05 ~ 2022.09',
        company: '한솔PNS 아이티서비스부문',
        role: '인프라운영팀 · IT서비스2팀 · 선임',
        description:
          '종이 제조업 ERP 운영과 유지보수를 담당하며 생산·재고·출하·영업 업무 프로세스를 깊이 이해했습니다.',
        highlights: [
          '생산·재고·출하 관련 ERP 기능 개선',
          '사용자 요구사항 분석 및 업무 프로세스 개선 지원',
          'SQL 기반 데이터 조회·분석 및 운영 이슈 대응',
          '시스템 오류 분석 및 장애 대응',
        ],
        skills: ['JSP', 'Java', 'Oracle', 'Nexacro14', 'ExtJS', 'JavaScript', 'jQuery', 'Docker', 'Linux', 'SVN', 'Git'],
      },
    ],
    []
  );

  const baseUrl = import.meta.env.BASE_URL || '/';
  const getErpImageUrl = (fileName: string) => `${baseUrl}images/${fileName}`;

  const erpHighlights = useMemo(
    () => [
      {
        title: '프로젝트 배경',
        description:
          '엑셀 관리와 수기 재고 기록, 수동 일정 확인, 실시간 파악 불가 등 기존 업무의 비효율을 개선하는 프로젝트였습니다.',
      },
      {
        title: '핵심 기능',
        description:
          '원자재 입고 예정 관리, 인쇄 공정 자동 스케줄링, 바코드 기반 입고 처리, 라벨 출력, 관리자 기능까지 포함합니다.',
      },
      {
        title: '프로젝트 진행 과정',
        description:
          '요구사항 분석, ERD 설계, Spring Boot API 개발, React 화면 개발, Docker 배포, 운영 및 유지보수까지 한 번에 담당했습니다.',
      },
      {
        title: '성과',
        description:
          '엑셀 기반 업무를 웹 ERP로 전환했고, 입고·출고·재고 프로세스 통합과 생산 설비 자동 배정, 비용 자동 계산을 구현했습니다.',
      },
    ],
    []
  );

  const erpGalleryItems = useMemo(
    () => [
      {
        title: '원자재 입고 예정 관리',
        imageSrc: getErpImageUrl('erp-01-receive-schedule.png'),
        comment: '협력사별 입고 일정을 한눈에 보고 생산 계획에 반영할 수 있도록 구성했습니다.',
      },
      {
        title: '인쇄 공정 자동 스케줄링',
        imageSrc: getErpImageUrl('erp-02-print-schedule.png'),
        comment: '설비 조건에 맞춰 자동 배정과 계획 수립 흐름이 보이도록 정리했습니다.',
      },
      {
        title: '바코드 기반 입고 처리',
        imageSrc: getErpImageUrl('erp-03-barcode-receive.png'),
        comment: '바코드 스캔으로 입고 처리를 빠르게 진행할 수 있는 화면입니다.',
      },
      {
        title: 'ERP 관리자 화면',
        imageSrc: getErpImageUrl('erp-05-admin.png'),
        comment: '사용자 권한과 코드 마스터를 관리하는 운영 중심 기능입니다.',
      },
    ],
    []
  );

  const infraItems = useMemo(
    () => [
      {
        icon: <Terminal className="h-5 w-5 text-indigo-400" />,
        title: 'Linux 서버 운영',
        items: [
          'Linux 환경 웹 시스템 유지보수 경험 (한솔PNS 3년 5개월)',
          '현재 좋은상자 Linux 서버 단독 구축 및 운영',
          '포트 포워딩, 방화벽 설정 및 보안 관리',
          'Nginx 웹 서버 설정 및 리버스 프록시 구성',
          '서비스 모니터링 및 운영 이슈 대응',
        ],
      },
      {
        icon: <Server className="h-5 w-5 text-sky-400" />,
        title: 'Docker 기반 배포',
        items: [
          'Docker Compose를 활용한 Spring Boot 서비스 운영',
          '컨테이너 기반 배포 및 버전 업데이트 수행',
          '운영 환경 설정 및 로그 관리',
          '로컬·운영 환경 간 실행 환경 일관성 확보',
          '서비스 배포 및 운영 자동화 경험',
        ],
      },
      {
        icon: <Database className="h-5 w-5 text-emerald-400" />,
        title: 'MariaDB / Oracle 운영',
        items: [
          'MariaDB 기반 ERP 데이터베이스 설계 및 운영',
          'Oracle 기반 ERP 데이터 관리 및 유지보수',
          'SQL을 활용한 데이터 조회·분석 및 정합성 검증',
          '업무 프로세스 기반 테이블 설계 및 데이터 모델링',
          'ERP 운영 데이터 이슈 분석 및 데이터 관리',
        ],
      },
      {
        icon: <HardDrive className="h-5 w-5 text-amber-400" />,
        title: '업무 프로세스 분석',
        items: [
          '현업 부서 인터뷰 및 요구사항 수집',
          '엑셀·수기 업무 프로세스 분석',
          '제조업 업무 흐름 기반 시스템 설계',
          '반복 업무 자동화를 통한 업무 효율 개선',
          '사용자 피드백 반영 및 프로세스 개선',
        ],
      },
      {
        icon: <RefreshCw className="h-5 w-5 text-purple-400" />,
        title: '서비스 배포 및 유지보수',
        items: [
          '1인 개발로 설계부터 배포까지 전 과정 담당',
          '배포 스크립트 작성으로 릴리즈 절차 표준화',
          '운영 중 발생하는 사용자 요청사항 분석 및 신속 대응',
          '서비스 운영 중 오류 분석 및 장애 대응 경험',
          'ERP 운영 유지보수 3년 5개월 한솔PNS 경험 보유',
        ],
      },
      {
        icon: <Shield className="h-5 w-5 text-rose-400" />,
        title: '운영 환경 모니터링',
        items: [
          '운영 환경 모니터링 및 유지보수 수행',
          'ERP 시스템 장애 원인 분석 및 신속 복구 대응',
          '데이터 정합성 검증 및 이상 데이터 추적',
          'HTTP 405 오류 등 운영 이슈 직접 해결 경험',
          '현업 부서 요청사항 반영을 통한 업무 효율화 지원',
        ],
      },
    ],
    []
  );

  const troubleshootingCases = useMemo(
    () => [
      {
        title: 'NAS 일일 점검 및 운영 모니터링 자동화',
        badge: '운영 / 모니터링',
        badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
        symptom: `ERP, MariaDB, Docker 컨테이너를 NAS 환경에서 운영하고 있었으나 서버 상태를 수시로 확인할 수 있는 체계가 없음. 디스크 용량 부족, 컨테이너 비정상 종료, 서비스 장애 등이 발생해도 관리자가 직접 접속하여 확인해야 했으며, 장애를 늦게 인지할 위험이 존재.`,
        cause: `NAS 서버에서 웹 서비스, Docker 컨테이너, MariaDB를 함께 운영하고 있었지만 운영 상태를 통합적으로 점검하는 시스템이 없었습니다. 디스크 사용량, 컨테이너 상태, 서비스 응답 여부, DB 상태 등을 개별적으로 확인해야 했기 때문에 운영 관리 효율이 낮고 장애 대응이 지연될 수 있었습니다.`,
        solution: `Shell Script 기반의 자동 점검 시스템을 구축하여 NAS 상태를 주기적으로 수집하도록 구현했습니다. 디스크 사용량, 메모리 사용량, Docker 컨테이너 상태, 컨테이너 재시작 횟수, 웹 서비스 HTTP 응답, MariaDB 연결 상태, 로그 에러 현황 등을 자동 점검하도록 구성했습니다. 점검 결과를 OK / WARN / FAIL 단계로 분류하여 이메일로 자동 발송함으로써 서버에 직접 접속하지 않아도 운영 상태를 즉시 확인할 수 있는 모니터링 체계를 구축했습니다.`,
        tags: ['Linux', 'Docker', 'MariaDB', 'Shell Script', 'NAS', 'SMTP'],
      },
      {
        title: 'HTTP 405 Method Not Allowed 오류 해결',
        badge: 'API / HTTP',
        badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        symptom: `그룹 주문의 입고예정일 수정 시 일부 요청에서 HTTP 405 Method Not Allowed 오류가 간헐적으로 발생. 단일 주문 수정은 정상 동작했으나, 그룹 주문 수정 시 동일한 API를 동시에 호출하는 환경에서 일부 요청만 실패하는 현상이 운영 서버에서만 재현됨.`,
        cause: `그룹 주문 수정 로직의 Promise.all 기반 병렬 요청 구조를 순차 요청 방식으로 변경했습니다. 이후 동일 기능에 대한 반복 테스트를 수행하여 오류가 재현되지 않음을 확인했으며, 관련 화면 및 기능 전반에 동일한 개선 사항을 적용하여 안정성을 확보했습니다.`,
        solution: `Spring Security 설정에서 OPTIONS 메서드를 허용하도록 구성. CorsConfigurationSource 빈을 등록하여 CORS 설정을 전역으로 적용. 각 컨트롤러의 Request Mapping 메서드 타입을 재검토하여 올바르게 수정. 이후 CORS 관련 이슈 재발 없이 안정적으로 운영 중.`,
        tags: ['Spring Boot', 'React', 'TypeScript', 'Nginx', 'Docker', 'HTTP 405', '운영 장애 분석'],
      },
      {
        title: '엑셀 업로드 처리 개선',
        badge: 'Excel / Upload',
        badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        symptom: `협력사 오더 정보를 엑셀 파일로 일괄 업로드하는 기능에서 대용량 파일 처리 시 응답이 느리거나 오류가 발생하는 문제. 사용자가 업로드 후 결과를 오랫동안 기다려야 하는 상황.`,
        cause: `엑셀 파일 전체를 메모리에 한 번에 로드하는 방식으로 처리하여 대용량 파일 시 메모리 사용량이 급증. 또한 유효성 검증 없이 DB에 일괄 insert를 시도하다 중간에 오류 발생 시 전체 롤백이 되지 않는 문제도 있었습니다.`,
        solution: `Apache POI의 스트리밍 처리 방식을 적용하여 대용량 엑셀 데이터를 행 단위로 처리함으로써 메모리 사용량을 개선했습니다. 각 행에 대한 유효성 검증 및 오류 피드백 기능을 추가하여 데이터 품질을 높였으며, 트랜잭션 처리를 통해 오류 발생 시 롤백을 보장하도록 구현했습니다. 또한 업로드 결과를 요약하여 사용자에게 즉시 제공할 수 있도록 개선했습니다.`,
        tags: ['Apache POI', 'Excel Upload', 'Spring Boot', 'Transaction', 'Stream Processing'],
      },
    ],
    []
  );

  const erpOpsProjects = useMemo(
    () => [
      {
        title: '바코드 프로젝트',
        company: '한솔홈데코',
        description:
          '부재료 재고관리와 PDA 인터페이스를 개발해 현장 재고 처리와 출고 프로세스를 자동화했습니다.',
        details: ['부재료 재고관리', 'PDA 인터페이스', '기자재 관리'],
      },
      {
        title: '한국제지 연계',
        company: '한솔PNS 지류유통',
        description:
          '한국제지 연계 모듈을 통해 자재 매핑, 재고 조회, 오더 로직, 기준 정보 확장을 구현했습니다.',
        details: ['자재 매핑 및 도착지 정보 관리', '재고 조회 및 입고 처리', '직송/직출고 오더 로직'],
      },
      {
        title: 'SalesPortal 개선',
        company: '한솔PNS 지류유통',
        description:
          'Nexacro 기반 화면 개선과 신규 기능 개발로 평가 프로세스와 출력 환경을 업그레이드했습니다.',
        details: ['평가 프로세스 변경', '메일링 서비스 신규 개발', '웹에디터 및 인쇄 기능 개발'],
      },
      {
        title: '인증관리 프로젝트',
        company: '한솔제지',
        description:
          '인증관리 신규 화면을 설계·개발하며 인증 프로세스의 UI와 운영 안정성을 개선했습니다.',
        details: ['신규 화면 설계', '데이터 조회/입력 화면 구현', '기존 흐름 UI 개선'],
      },
    ],
    []
  );

  const otherProjectDetails = useMemo(
    () => [
      'AI로 주변 가맹점 정보를 안내하고, 지도 기반으로 가맹점을 시각적으로 조회할 수 있습니다.',
      '지역화폐 활성화와 사용 편의성을 목적으로 설계된 졸업 프로젝트입니다.',
      'Frontend는 Angular/TypeScript, Backend는 Node.js/TypeScript, AI API는 OpenAI와 Naver Map API를 활용했습니다.',
    ],
    []
  );

  const educationItems = useMemo(
    () => [
      {
        school: '홍익대학교(세종캠퍼스)',
        major: '소프트웨어융합학과',
        period: '2024.03 ~ 2026.02',
        detail: '2025 한국스마트미디어학회 추계학술대회 우수논문상 수상, 메타버스 융합SW 아카데미 4기 이수, 2025-2 다정한 책읽기 서평대회 우수상',
      },
      {
        school: '서일대학교',
        major: '인터넷정보과',
        period: '2016.03 ~ 2019.02',
        detail: '전공 동아리 WIS 회장, 캡스톤 디자인, 개인 홈페이지 제작 프로젝트, 아두이노 심화 작품 전시 참여',
      },
    ],
    []
  );

  const awards = useMemo(
    () => [
      { title: '정보처리기사', subtitle: '한국산업인력공단 · 2025.12' },
      { title: 'TOEIC 815점', subtitle: '한국 TOEIC 위원회 · 2022.12' },
      { title: '우수논문상', subtitle: '한국스마트미디어학회 · 2025.11' },
      { title: '메타버스 융합SW 아카데미 4기', subtitle: '홍익대학교 세종캠퍼스 · 2025.01 ~ 2025.06' },
    ],
    []
  );

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <header className={`sticky top-0 z-30 border-b backdrop-blur ${isDark ? 'border-slate-800 bg-slate-950/90' : 'border-slate-200 bg-white/90'}`}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 shadow-sm">
              <img src={`${baseUrl}favicon.png?v=2`} alt="portfolio logo" className="h-6 w-6 rounded-lg object-cover" />
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-indigo-500">Portfolio</p>
              <p className="text-sm font-semibold leading-none">최희정</p>
            </div>
          </div>
        </div>
        <nav className="mx-auto flex max-w-5xl gap-1.5 overflow-x-auto px-4 pb-3">
          {headerNavItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleHeaderNavClick(e, id)}
              className={`shrink-0 rounded-full px-2.5 py-1.5 text-[11px] font-semibold whitespace-nowrap transition-colors ${isDark ? 'bg-slate-900/80 text-slate-300 hover:bg-slate-800' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 pb-24">
        <section id="home" className={`rounded-3xl border p-5 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" />
            ERP Backend Developer
          </div>
          <h1 className="mt-4 text-2xl font-black leading-tight">
            운영 경험 위에 구축 경험을 더한<br />실무 중심 ERP 개발자
          </h1>
          <p className={`mt-3 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            한솔PNS에서 ERP 운영·유지보수 3년 5개월을 쌓았고,<br />좋은상자에서 ERP 신규 구축을 1인으로 진행했습니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#erp"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('erp');
                if (target) {
                  const topOffset = 110;
                  const elementTop = target.getBoundingClientRect().top + window.scrollY - topOffset;
                  window.scrollTo({ top: elementTop, behavior: 'smooth' });
                }
                setTimeout(() => {
                  setOpenSections((prev) => ({ ...prev, erp: true }));
                }, 300);
              }}
              className="rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white"
            >
              ERP 구축 프로젝트 보기
            </a>
            {onContactClick ? (
              <button onClick={onContactClick} className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${isDark ? 'border-slate-700 bg-slate-950 text-slate-200' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                연락하기
              </button>
            ) : (
              <a href="#contact" className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${isDark ? 'border-slate-700 bg-slate-950 text-slate-200' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                연락하기
              </a>
            )}
            <button
              type="button"
              onClick={() => setSelectedDetail({ title: '프로필 요약', body: '한솔PNS에서 ERP 운영과 유지보수 3년 5개월을 경험했고, 좋은상자에서 신규 구축 프로젝트를 1인으로 진행한 경험이 있습니다. 제조업 업무 흐름과 시스템 운영을 모두 이해하는 실무 중심 개발자입니다.', bullets: ['ERP 운영·유지보수 3년 5개월', '제조업 ERP 업무 프로세스 이해', '신규 구축부터 운영까지 전 과정 경험'] })}
              className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${isDark ? 'border-slate-700 bg-slate-900 text-slate-100' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
            >
              자세히 보기
            </button>
          </div>
          <div className={`mt-5 grid grid-cols-2 gap-3 rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
            {[
              { label: 'ERP 운영 경력', value: '3년 5개월' },
              { label: '진행 중', value: '신규 구축' },
              { label: '담당 도메인', value: '제조업 ERP' },
              { label: '개발 범위', value: 'Full Cycle' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className={`rounded-3xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button type="button" onClick={() => toggleSection('about')} className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-indigo-400">About Me</p>
              <h2 className="text-xl font-bold">소개와 철학</h2>
            </div>
            {openSections.about ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {openSections.about && (
            <div className="mt-4 space-y-4">
              <div className={`rounded-3xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <img
                      src={`${import.meta.env.BASE_URL}images/Profile.png`}
                      alt="프로필"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">최희정</p>
                    <p className="text-sm text-indigo-400">ERP Backend Developer</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  {profileDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start justify-between rounded-2xl border border-slate-200/60 px-3 py-2 dark:border-slate-800">
                      <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{detail.label}</span>
                      <span className="ml-3 text-right text-sm font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {values.map((item) => (
                  <div key={item.title} className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-white'}`}>
                    <div className="flex items-center gap-2 text-indigo-400">
                      <Award className="h-4 w-4" />
                      <p className="text-sm font-semibold">{item.title}</p>
                    </div>
                    <p className={`mt-2 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</p>
                  </div>
                ))}
              </div>

              <div className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                <div className="flex items-center gap-2 text-indigo-400">
                  <Code2 className="h-4 w-4" />
                  <p className="text-sm font-semibold">주요 기술</p>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {techStacks.map((stack) => (
                    <div key={stack.category} className={`rounded-2xl border p-3 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
                      <p className="text-sm font-semibold">{stack.category}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {stack.skills.map((skill) => (
                          <span key={skill} className={`rounded-full px-2 py-1 text-[11px] ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        <section id="career" className={`rounded-3xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button type="button" onClick={() => toggleSection('career')} className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-indigo-400">Career</p>
              <h2 className="text-xl font-bold">경력 히스토리</h2>
            </div>
            {openSections.career ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {openSections.career && (
            <div className="mt-4 space-y-3">
              {careerItems.map((item) => (
                <div key={item.company} className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{item.company}</p>
                      <p className="text-xs text-indigo-400">{item.role}</p>
                    </div>
                    <div className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2 py-1 text-[10px] font-semibold text-indigo-400">{item.period}</div>
                  </div>
                  <p className={`mt-3 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</p>
                  <ul className="mt-3 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-slate-700/60">
                    {item.skills.map((skill) => (
                      <span key={skill} className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="erp" className={`rounded-3xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button type="button" onClick={() => toggleSection('erp')} className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-indigo-400">ERP Project</p>
              <h2 className="text-xl font-bold">좋은상자 ERP 신규 구축</h2>
            </div>
            {openSections.erp ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {openSections.erp && (
            <div className="mt-4 space-y-3">
              <div className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                <p className="text-sm font-semibold">엑셀·수기 기반 업무를 웹 ERP로 전환한 1인 구축 프로젝트입니다.</p>
                <p className={`mt-2 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>요구사항 분석부터 설계, 개발, 배포, 운영까지 전 과정을 직접 담당했습니다.</p>
              </div>
              {erpHighlights.map((item) => (
                <div key={item.title} className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-white'}`}>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className={`mt-2 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</p>
                </div>
              ))}
              <div className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                <p className="text-sm font-semibold">담당 역할</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['요구사항 분석', 'DB 설계', 'Spring Boot API 개발', 'React 화면 개발', 'Docker 배포', 'MariaDB 운영', '장애 대응 및 유지보수'].map((role) => (
                    <span key={role} className={`rounded-full px-2.5 py-1 text-[11px] ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>{role}</span>
                  ))}
                </div>
              </div>

              <div className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                <button
                  type="button"
                  onClick={() => setErpGalleryOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <div>
                    <p className="text-sm font-semibold">프로젝트 화면 미리보기</p>
                    <p className={`mt-1 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>주요 화면을 확인해보세요. 자세한 화면 및 설명은 PC에서 확인 가능합니다.</p>
                  </div>
                  {erpGalleryOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>

                {erpGalleryOpen && (
                  <div className="mt-3 space-y-3">
                    {erpGalleryItems.map((item) => (
                      <div key={item.title} className={`overflow-hidden rounded-2xl border ${isDark ? 'border-slate-700 bg-slate-900/70' : 'border-slate-200 bg-white'}`}>
                        <div className="bg-slate-950/60 p-5">
                          <img src={item.imageSrc} alt={item.title} className="h-44 w-full rounded-xl object-cover object-top" loading="lazy" />
                        </div>
                        <div className="p-3">
                          <p className="text-sm font-semibold">{item.title}</p>
                          <p className={`mt-1 text-xs leading-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        <section id="architecture" className={`rounded-3xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button type="button" onClick={() => toggleSection('architecture')} className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-400">Architecture</p>
              <h2 className="text-xl font-bold">시스템 아키텍처</h2>
            </div>
            {openSections.architecture ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {openSections.architecture && (
            <div className="mt-4 space-y-3">
              <div className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                <div className="flex items-center gap-2 text-sky-400">
                  <Monitor className="h-4 w-4" />
                  <p className="text-sm font-semibold">React + Tailwind CSS</p>
                </div>
                <p className={`mt-2 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>PC/모바일 웹 브라우저에서 접속 가능한 프론트엔드 구조와 함께, Spring Boot와 MariaDB, Docker, Linux 서버로 운영되는 전체 시스템을 구성했습니다.</p>
              </div>
              <div className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Server className="h-4 w-4" />
                  <p className="text-sm font-semibold">운영 특징</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />Spring Boot WAS와 Nginx 리버스 프록시 구성</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />NAS에 MariaDB를 직접 설치해 운영</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />Docker 기반 배포와 Linux 서버 운영</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        <section id="ops" className={`rounded-3xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button type="button" onClick={() => toggleSection('ops')} className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-400">Operations & Infra</p>
              <h2 className="text-xl font-bold">운영 및 인프라 경험</h2>
            </div>
            {openSections.ops ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {openSections.ops && (
            <div className="mt-4 space-y-3">
              {infraItems.map((item) => (
                <div key={item.title} className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0 flex items-center gap-2">
                      {item.icon}
                      <p className="text-sm font-semibold break-words">{item.title}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedDetail({ title: item.title, body: '', bullets: item.items })}
                      className="flex-shrink-0 whitespace-nowrap rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-400"
                    >
                      운영 포인트 보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="troubleshooting" className={`rounded-3xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button type="button" onClick={() => toggleSection('troubleshooting')} className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-400">Problem Solving</p>
              <h2 className="text-xl font-bold">주요 문제 해결 사례</h2>
            </div>
            {openSections.troubleshooting ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {openSections.troubleshooting && (
            <div className="mt-4 space-y-3">
              {troubleshootingCases.map((item) => (
                <div key={item.title} className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className={`inline-flex rounded-full border px-2 py-1 text-[11px] font-semibold ${item.badgeColor}`}>
                        {item.badge}
                      </div>
                      <p className="mt-3 text-sm font-semibold text-slate-100 dark:text-slate-100 break-words">{item.title}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedDetail({
                          title: item.title,
                          body: '',
                          bullets: [],
                          sections: [
                            { label: '문제 상황', content: item.symptom },
                            { label: '원인 분석', content: item.cause },
                            { label: '해결 방법', content: item.solution },
                          ],
                          tags: item.tags,
                        })
                      }
                      className="flex-shrink-0 whitespace-nowrap rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1.5 text-[11px] font-semibold text-rose-400"
                    >
                      해결 과정 보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="erp-ops" className={`rounded-3xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button type="button" onClick={() => toggleSection('erpOps')} className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-400">ERP Operations</p>
              <h2 className="text-xl font-bold">ERP 운영 경험</h2>
            </div>
            {openSections.erpOps ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {openSections.erpOps && (
            <div className="mt-4 space-y-3">
              {erpOpsProjects.map((project) => (
                <div key={project.title} className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{project.title}</p>
                      <p className="text-xs text-slate-400">{project.company}</p>
                    </div>
                    <div className="rounded-full border border-slate-700/60 px-2 py-1 text-[10px] text-slate-400">운영 경험</div>
                  </div>
                  <p className={`mt-2 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.details.map((detail) => (
                      <span key={detail} className={`rounded-full px-2.5 py-1 text-[11px] ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>{detail}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="other-projects" className={`rounded-3xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button type="button" onClick={() => toggleSection('otherProjects')} className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-purple-400">Other Projects</p>
              <h2 className="text-xl font-bold">AI 지역화폐 플랫폼 여민동행</h2>
            </div>
            {openSections.otherProjects ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {openSections.otherProjects && (
            <div className={`mt-4 rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
              {/* Project Image */}
              <div className="mb-4 flex justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}images/project-yeomindong.png`}
                  alt="AI 지역화폐 플랫폼 여민동행"
                  className="h-auto w-32 rounded-xl shadow-md"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>

              <div className="flex items-center gap-2 text-purple-400">
                <Map className="h-4 w-4" />
                <p className="text-sm font-semibold">졸업 프로젝트</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {otherProjectDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* GitHub Links - Side by Side */}
              <div className="mt-4 flex gap-2 border-t border-slate-700 pt-4">
                <a
                  href="https://github.com/3405000/team201-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold transition-colors ${
                    isDark
                      ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20'
                      : 'bg-red-100 text-red-600 hover:bg-red-200'
                  }`}
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Frontend</span>
                </a>
                <a
                  href="https://github.com/3405000/team201-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold transition-colors ${
                    isDark
                      ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'
                      : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                  }`}
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Backend</span>
                </a>
              </div>
            </div>
          )}
        </section>

        <section id="education" className={`rounded-3xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button type="button" onClick={() => toggleSection('education')} className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-indigo-400">Education</p>
              <h2 className="text-xl font-bold">학력과 활동</h2>
            </div>
            {openSections.education ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {openSections.education && (
            <div className="mt-4 space-y-3">
              {educationItems.map((education) => (
                <div key={education.school} className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-center gap-2 text-indigo-400">
                    <GraduationCap className="h-4 w-4" />
                    <p className="text-sm font-semibold">{education.school}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedDetail({ title: education.school, body: education.detail, bullets: [education.major, education.period] })}
                    className="mt-3 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold text-indigo-400"
                  >
                    학력 상세 보기
                  </button>
                  <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{education.major}</p>
                  <p className={`mt-1 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{education.period}</p>
                  <p className={`mt-3 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{education.detail}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="awards" className={`rounded-3xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button type="button" onClick={() => toggleSection('awards')} className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-400">Awards & Certifications</p>
              <h2 className="text-xl font-bold">수상·자격증·교육 이수</h2>
            </div>
            {openSections.awards ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {openSections.awards && (
            <div className="mt-4 grid gap-3">
              {awards.map((award) => (
                <div key={award.title} className={`rounded-2xl border p-4 ${isDark ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-center gap-2 text-amber-400">
                    <Trophy className="h-4 w-4" />
                    <p className="text-sm font-semibold">{award.title}</p>
                  </div>
                  <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{award.subtitle}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="contact" className={`rounded-3xl border p-4 shadow-sm ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <button type="button" onClick={() => toggleSection('contact')} className="flex w-full items-center justify-between rounded-2xl px-1 py-2 text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-indigo-400">Contact</p>
              <h2 className="text-xl font-bold">경험을 바탕으로<br />함께 성장하며 가치를 만들고 싶습니다.</h2>
            </div>
            {openSections.contact ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {openSections.contact && (
            <div className="mt-4">
              <p className={`text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>제조업 ERP 운영과 신규 구축 경험을 바탕으로 빠르게 적응하고 실무 가치를 만들어내는 백엔드 개발자입니다.</p>
              <div className="mt-4 space-y-3">
                <button type="button" onClick={() => copyToClipboard('hjeong0309@gmail.com')} className={`flex w-full items-start justify-between rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950/70 hover:bg-slate-900' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'} transition-colors`}>
                  <div className="flex items-start gap-3 text-left">
                    <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-400" />
                    <div className="text-left">
                      <p className="text-sm font-semibold">이메일</p>
                      <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>hjeong0309@gmail.com</p>
                    </div>
                  </div>
                  <Copy className="mt-0.5 h-4 w-4 flex-shrink-0" />
                </button>
                <button type="button" onClick={() => copyToClipboard('https://huiio-x.github.io/portfolio/')} className={`flex w-full items-start justify-between rounded-2xl border px-4 py-3 ${isDark ? 'border-slate-800 bg-slate-950/70 hover:bg-slate-900' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'} transition-colors`}>
                  <div className="flex items-start gap-3 text-left">
                    <Code2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    <div className="text-left">
                      <p className="text-sm font-semibold">GitHub / Portfolio</p>
                      <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>https://huiio-x.github.io/portfolio/</p>
                    </div>
                  </div>
                  <Copy className="mt-0.5 h-4 w-4 flex-shrink-0" />
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      {selectedDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
          <div className={`w-full max-w-md rounded-3xl border p-5 shadow-2xl ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-indigo-400">자세히 보기</p>
                <h3 className="mt-1 text-lg font-semibold">{selectedDetail.title}</h3>
              </div>
              <button type="button" onClick={() => setSelectedDetail(null)} className="rounded-full border border-slate-700 px-2.5 py-1 text-sm text-slate-300">
                ✕
              </button>
            </div>
            {selectedDetail.body && (
              <p className={`mt-4 text-sm leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{selectedDetail.body}</p>
            )}
            {selectedDetail.sections && selectedDetail.sections.length > 0 && (
              <div className="mt-4 space-y-4">
                {selectedDetail.sections.map((section) => (
                  <div key={section.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{section.label}</p>
                    <p className={`mt-2 text-sm leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{section.content}</p>
                  </div>
                ))}
              </div>
            )}
            {selectedDetail.tags && selectedDetail.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedDetail.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700/60 bg-slate-950/80 px-3 py-1 text-[11px] text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {selectedDetail.bullets.length > 0 && (
              <ul className="mt-4 space-y-2">
                {selectedDetail.bullets.map((bullet) => (
                  <li key={bullet} className={`flex items-start gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

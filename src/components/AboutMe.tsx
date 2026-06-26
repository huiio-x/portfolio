import React from 'react';
import { User, Mail, Calendar, MapPin, Award, Cpu, Database, Code2, Settings2, GitBranch } from 'lucide-react';

export default function AboutMe() {
  const profileDetails = [
    { icon: <User className="w-4 h-4 text-indigo-500" />, label: '이름', value: '최희정 (Huijeong Choi)' },
    { icon: <Calendar className="w-4 h-4 text-indigo-500" />, label: '경력', value: '총 3년 11개월' },
    { icon: <Mail className="w-4 h-4 text-indigo-500" />, label: '이메일', value: 'hjeong0309@gmail.com' },
    { icon: <MapPin className="w-4 h-4 text-indigo-500" />, label: '거주지', value: '대한민국 서울' },
  ];

  const techStacks = [
    {
      category: 'Backend',
      icon: <Cpu className="w-5 h-5" />,
      skills: ['Java', 'JSP', 'MyBatis'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      category: 'Database',
      icon: <Database className="w-5 h-5" />,
      skills: ['Oracle', 'MariaDB'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Frontend',
      icon: <Code2 className="w-5 h-5" />,
      skills: ['JavaScript', 'jQuery', 'ExtJS', 'Nexacro'],
      color: 'from-cyan-500 to-teal-500'
    },
    {
      category: 'DevOps',
      icon: <Settings2 className="w-5 h-5" />,
      skills: ['Linux', 'Docker', 'Tomcat'],
      color: 'from-teal-500 to-green-500'
    },
    {
      category: 'VCS',
      icon: <GitBranch className="w-5 h-5" />,
      skills: ['Git', 'SVN'],
      color: 'from-green-500 to-emerald-500'
    },
  ];

  const values = [
    {
      title: 'ERP 업무를 이해하는 개발자',
      description:
        '한솔PNS에서 약 3년 5개월 동안 제조업 계열사의 ERP 및 업무 시스템 개발과 유지보수를 담당했습니다. 생산, 재고, 출하, 영업 등 실제 업무 프로세스와 밀접하게 연결된 시스템을 운영하며 단순 기능 개발을 넘어 업무 흐름 자체를 이해하는 경험을 쌓았습니다.',
    },
    {
      title: '운영뿐 아니라 구축 경험까지 갖춘 개발자',
      description:
        '현재는 제조업 ERP 시스템 신규 구축 프로젝트를 1인 개발자로 수행하고 있습니다. 엑셀과 수기로 관리되던 업무를 웹 기반 시스템으로 전환하는 프로젝트로, 요구사항 분석부터 설계, 개발, 배포, 운영까지 전 과정을 직접 담당하고 있습니다.',
    },
    {
      title: '문제 해결을 위한 개발을 지향합니다',
      description:
        '사용자가 겪고 있는 문제를 해결하는 것을 가장 중요하게 생각합니다. 생산 계획 수립의 반복적인 수작업을 줄이기 위한 자동 배정 로직, 수기 관리를 바코드 기반으로 전환한 재고 시스템 등 실제 업무 현장에서 효과를 만들어내는 개발을 합니다.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            제조업 ERP 업무 프로세스를 이해하고, 현업 요구사항을 시스템으로 구현하는 개발자입니다.
          </p>
        </div>

        {/* Profile Card & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Profile Summary Card */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-2xl p-6 pt-8 pb-6 shadow-sm reveal-fade h-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start text-center sm:text-left gap-4 pb-6 border-b border-slate-200 dark:border-slate-850">
              <div className="w-28 h-28 rounded-[24px] overflow-hidden border border-slate-200 dark:border-slate-850 shadow-sm flex-shrink-0">
                <img
                  src="/images/Profile.png"
                  alt="프로필"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">최희정</h3>
                <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium mt-1">ERP Backend Developer</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {profileDetails.map((detail, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900">
                    {detail.icon}
                  </div>
                  <div>
                    <div className="text-2xs text-slate-400 font-medium">{detail.label}</div>
                    <div className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">{detail.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech & ERP moved to bottom section */}
          </div>

          {/* Right Core Values Card */}
          <div className="lg:col-span-8 space-y-6 reveal-fade delay-2 h-full">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-500" />
              개발 철학
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden group pl-6"
                >
                  <div className="absolute top-3 left-3 w-2 h-[calc(100%-24px)] bg-indigo-500 dark:bg-sky-500 rounded-l-xl" />
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack & ERP Experience Section */}
        <div className="mt-12 space-y-10 reveal-fade">
          {/* Tech Stack Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-500" />
              주요 기술
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {techStacks.map((stack) => (
                <div
                  key={stack.category}
                  className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stack.color} text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    {stack.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    {stack.category}
                  </h4>
                  <div className="space-y-2">
                    {stack.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-xs font-medium text-slate-700 dark:text-slate-300 px-2 py-1 bg-slate-50 dark:bg-slate-900 rounded-md leading-relaxed"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

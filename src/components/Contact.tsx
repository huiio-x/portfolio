import React, { useState } from 'react';
import { Mail, Github, Copy, CheckCheck, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'hjeong0309@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-fade">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl mt-3">
            Contact
          </h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            꾸준히 성장하는 개발자 최희정입니다.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-3xl p-8 sm:p-12 shadow-sm reveal-fade delay-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Open to Work Message */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-500">Open to Work</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                경험을 바탕으로<br />
                <span className="text-indigo-600 dark:text-indigo-400">함께 성장하며 가치를 만들고 싶습니다.</span>
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                제조업 ERP 운영 3년 5개월 + 신규 구축 경험을 보유한 백엔드 개발자입니다.<br />
                업무 프로세스 이해를 바탕으로 빠른 온보딩과 실무 기여가 가능합니다.
              </p>

              {/* Preferred Role Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['ERP 개발자', 'Backend Developer', '제조업 도메인', 'Java / Spring Boot'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-2xs font-medium bg-indigo-500/10 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Contact Actions */}
            <div className="space-y-4">
              {/* Email Copy Button */}
              <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl p-4 group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10">
                    <Mail className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-2xs text-slate-400 font-medium">Email</div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-850 transition-colors"
                  aria-label="이메일 복사"
                >
                  {copied ? (
                    <CheckCheck className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              </div>

              {/* GitHub Link */}
              <a
                href="https://huiio-x.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl p-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 dark:bg-slate-850">
                    <Github className="w-4 h-4 text-slate-300 dark:text-slate-400" />
                  </div>
                  <div>
                    <div className="text-2xs text-slate-400 font-medium">GitHub</div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">https://huiio-x.github.io/portfolio/</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
              </a>

              {/* Primary CTA */}
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                이메일로 연락하기
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-850 text-center text-xs text-slate-400 reveal-fade">
        <p>© 2026 최희정 · WEB · ERP Developer Portfolio</p>
        <p className="mt-1 text-slate-450">Built with React + Vite + Tailwind CSS</p>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import Modal from './Modal';
import { Mail, Github, Copy, CheckCheck, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const email = 'hjeong0309@gmail.com';
  const github = 'https://huiio-x.github.io/portfolio/';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);

  const copy = async (text: string, setFlag: (v: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setFlag(true);
      setTimeout(() => setFlag(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">연락처</h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">방문해 주셔서 감사합니다.<br />아래 연락처로 편하게 연락 주세요.</p>

      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between rounded-xl border p-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-indigo-50 dark:bg-indigo-900">
              <Mail className="w-4 h-4 text-indigo-500" />
            </div>
            <div>
              <div className="text-2xs text-slate-400">Email</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{email}</div>
            </div>
          </div>
          <button onClick={() => copy(email, setCopiedEmail)} className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
            {copiedEmail ? <CheckCheck className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-600" />}
          </button>
        </div>

        <div className="flex items-center justify-between rounded-xl border p-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-slate-50 dark:bg-slate-850">
              <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
            </div>
            <div>
              <div className="text-2xs text-slate-400">GitHub</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{github}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
              <ExternalLink className="w-4 h-4 text-slate-600" />
            </a>
            <button onClick={() => copy(github, setCopiedGithub)} className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
              {copiedGithub ? <CheckCheck className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-600" />}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

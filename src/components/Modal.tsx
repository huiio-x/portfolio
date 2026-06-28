import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true">
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" onClick={onClose} />
      <div className="relative z-10 max-w-[90vw] w-full max-h-[90vh] overflow-y-auto p-6 rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-slate-50 shadow-[0_20px_60px_rgba(15,23,42,0.28)] sm:max-w-lg">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-sm text-slate-500 transition-colors hover:text-slate-700">닫기</button>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}

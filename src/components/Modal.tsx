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
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 max-w-lg w-full p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">닫기</button>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}

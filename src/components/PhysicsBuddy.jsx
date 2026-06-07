import { useState } from 'react';

export default function PhysicsBuddy({ onRequestHint }) {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState("Привет! Я Physics Buddy. Нажми «Подсказка», если нужна помощь.");

  const getHint = () => {
    if (onRequestHint) setHint(onRequestHint());
    else setHint("Проверь формулу: F = ma, и не забудь про силу трения.");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 w-72 bg-gray-900 border border-red-800 rounded-xl p-4 shadow-2xl mb-2">
          <p className="text-sm text-white">{hint}</p>
          <button onClick={() => setOpen(false)} className="mt-2 text-xs text-gray-400">Закрыть</button>
        </div>
      )}
      <button
        onClick={() => { setOpen(!open); if (!open) getHint(); }}
        className="bg-red-700 hover:bg-red-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <span className="material-symbols-outlined text-white">smart_toy</span>
      </button>
    </div>
  );
}
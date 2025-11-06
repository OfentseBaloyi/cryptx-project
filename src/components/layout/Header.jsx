import React from 'react';

export default function Header() {
  return (
    <header className="px-4 py-3 md:px-6 md:py-4 border-b border-[#0b1a2a] flex flex-col md:flex-row justify-between items-start md:items-center w-full">
      <div>
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="text-sm text-slate-400 mt-1 md:mt-0">Overview of your crypto portfolio</p>
      </div>
<div className="flex justify-end">
  <div className="flex items-center gap-4 mt-2 md:mt-0">
    <div className="text-sm text-slate-300">Notifications</div>
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-black font-medium">O</div>
  </div>
</div>

    </header>
  );
}

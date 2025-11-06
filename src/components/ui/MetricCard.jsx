// src/components/ui/MetricCard.jsx
import React from 'react';

export default function MetricCard({ title, value, subtitle }) {
  return (
    <div className="card-bg p-4 rounded-2xl shadow-md border border-[#0b1a2a]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-300">{title}</div>
          <div className="text-2xl font-semibold mt-1">{value}</div>
        </div>
        <div className="text-sm text-teal-400">{subtitle}</div>
      </div>
    </div>
  );
}

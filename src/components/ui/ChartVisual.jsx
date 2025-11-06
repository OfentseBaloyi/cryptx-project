import React from "react";
import { chartStaticData } from "../../data/chartStaticData.js";



// This component recreates a static BTC price line chart using SVG + Tailwind
export default function ChartVisual(){
// Normalize data into coordinates (simple manual mapping)
const max = Math.max(...chartStaticData)
const min = Math.min(...chartStaticData)
const points = chartStaticData.map((v, i) => {
const x = (i / (chartStaticData.length - 1)) * 100
const y = ((v - min) / (max - min)) * 60 // percent of height
return `${x},${60 - y}`
}).join(' ')


const filled = chartStaticData.map((v, i) => {
const x = (i / (chartStaticData.length - 1)) * 100
const y = ((v - min) / (max - min)) * 60
return `${x},${60 - y}`
}).join(' ')


return (
<div className="card-bg p-4 rounded-2xl shadow-md border border-[#0b1a2a]">
<div className="flex items-center justify-between mb-3">
<div>
<div className="text-sm text-slate-300">BTC Price</div>
<div className="text-lg font-semibold">$12,750 <span className="text-sm text-teal-400">+2.1%</span></div>
</div>
<div className="text-xs text-slate-400">7d</div>
</div>


<div className="w-full h-52 relative">
<svg viewBox="0 0 100 70" preserveAspectRatio="none" className="w-full h-full">
{/* grid lines */}
<g stroke="#0b1a2a" strokeWidth="0.5">
<line x1="0" y1="10" x2="100" y2="10" />
<line x1="0" y1="30" x2="100" y2="30" />
<line x1="0" y1="50" x2="100" y2="50" />
</g>


{/* filled area under the line */}
<polygon points={`0,60 ${filled} 100,60`} fill="rgba(16,185,129,0.08)" />


{/* line path */}
<polyline points={points} fill="none" stroke="#10b981" strokeWidth="0.9" strokeLinejoin="round" strokeLinecap="round" />


{/* points */}
{chartStaticData.map((v, i) => {
const x = (i / (chartStaticData.length - 1)) * 100
const y = ((v - min) / (max - min)) * 60
return <circle key={i} cx={`${x}`} cy={`${60 - y}`} r="0.9" fill="#10b981" />
})}
</svg>


{/* simple legend and labels */}
<div className="absolute left-3 bottom-2 text-xs text-slate-400">Min: ${min}</div>
<div className="absolute right-3 bottom-2 text-xs text-slate-400">Max: ${max}</div>
</div>
</div>
)
}
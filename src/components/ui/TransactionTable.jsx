import React from 'react'
import transactions from '../../data/TransactionData.js'


export default function TransactionTable(){
return (
<div className="card-bg p-4 rounded-2xl shadow-md border border-[#0b1a2a]">
<div className="flex items-center justify-between mb-3">
<div className="text-sm text-slate-300">Recent Transactions</div>
<div className="text-xs text-slate-400">Last 7 days</div>
</div>


<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="text-xs text-slate-400">
<tr>
<th className="pb-2">Item</th>
<th className="pb-2">Amount</th>
<th className="pb-2">Date</th>
<th className="pb-2">Status</th>
</tr>
</thead>
<tbody>
{transactions.map(t => (
<tr key={t.id} className="border-t border-[#0b1a2a] hover:bg-[#061229]">
<td className="py-3">{t.item}</td>
<td>{t.amount}</td>
<td>{t.date}</td>
<td>
<span className={`px-2 py-1 rounded-full text-xs ${t.status === 'Completed' ? 'bg-emerald-800 text-emerald-300' : t.status === 'Pending' ? 'bg-yellow-900 text-yellow-300' : 'bg-red-900 text-red-300'}`}>
{t.status}
</span>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
)
}
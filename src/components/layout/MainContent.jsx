import React from 'react';
import MetricCard from '../ui/MetricCard.jsx';
import ChartVisual from '../ui/ChartVisual.jsx';
import TransactionTable from '../ui/TransactionTable.jsx';

export default function MainContent() {
  return (
    <div className="space-y-6 flex flex-col">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard title="Total Profit" value="$12,345" subtitle="+8.2% (7d)" />
        <MetricCard title="Market Cap" value="$1.2T" subtitle="Top 5" />
        <MetricCard title="Active Users" value="128k" subtitle="24h change" />
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
        <div className="lg:col-span-2 flex flex-col">
          <ChartVisual />
        </div>
        <div className="flex flex-col"> 
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}

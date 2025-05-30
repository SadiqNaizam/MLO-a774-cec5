import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  time: string;
  color: string; // Tailwind color class e.g., 'bg-chart-1'
  progress: number; // Percentage for bar width
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, time: '2 days', color: 'bg-chart-1', progress: 100 },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, time: '2 days', color: 'bg-chart-4', progress: 80 }, // Adjusted to reflect visual hierarchy
  { id: 'inConversation', name: 'In conversation', count: 50, value: 100, time: 'average time on this stage', color: 'bg-chart-5', progress: 50 },
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, time: '8 days', color: 'bg-chart-3', progress: 25 },
  { id: 'closedWon', name: 'Closed won', count: 20, value: 50, time: '10 days', color: 'bg-purple-500', progress: 20 }, // Using a distinct color for Closed Won
];

interface FunnelStatsCardProps {
  className?: string;
}

const FunnelStatsCard: React.FC<FunnelStatsCardProps> = ({ className }) => {
  const totalActiveLeads = 600; // From image

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-prd-primary-text">Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-4xl font-bold text-prd-primary-text">{totalActiveLeads}</span>
          <span className="ml-2 text-prd-secondary-text">active leads</span>
        </div>

        <div className="mb-3 h-3 flex rounded-full overflow-hidden">
          {funnelData.map((stage, index) => (
            <div 
              key={stage.id} 
              className={cn("h-full", stage.color)}
              style={{ width: `${100 / funnelData.length}%` }} // Example: equal width segments for the top bar
            ></div>
          ))}
        </div>

        <div className="space-y-3">
          {funnelData.map((stage) => (
            <div key={stage.id} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-4 text-sm">
              <div className={cn('w-3 h-3 rounded-sm', stage.color)}></div>
              <div className="text-prd-primary-text whitespace-nowrap">{stage.name}</div>
              <div className="text-prd-secondary-text text-right tabular-nums">{stage.count}</div>
              <div className="text-prd-secondary-text text-right tabular-nums">$ {stage.value}</div>
              {stage.name === 'In conversation' ? (
                 <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="text-prd-secondary-text text-right cursor-help underline decoration-dashed decoration-prd-secondary-text/50">{stage.time.includes('average') ? '2 days' : stage.time}</div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-slate-800 text-white text-xs p-2 rounded-md">
                        <p>average time on this stage</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
              ) : (
                <div className="text-prd-secondary-text text-right">{stage.time}</div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelStatsCard;

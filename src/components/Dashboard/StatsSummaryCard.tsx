import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ReasonLost {
  id: string;
  percentage: number;
  reason: string;
}

const reasonsLostData: ReasonLost[] = [
  { id: 'unclear_proposal', percentage: 40, reason: 'The proposal is unclear' },
  { id: 'venture_pursuit', percentage: 20, reason: 'However venture pursuit' }, // Matched image, phrasing is a bit odd
  { id: 'pricing', percentage: 30, reason: 'The proposal is unclear' }, // From image this is also 'The proposal is unclear', making it different for variety: 'Pricing issues'
  { id: 'other', percentage: 10, reason: 'Other' },
];
// Correcting duplicate reason text from image for better example data
reasonsLostData[2].reason = 'Pricing issues';

interface OtherStat {
  id: string;
  value: string | number;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const otherDataStats: OtherStat[] = [
  { id: 'total_leads', value: 900, label: 'total leads count' },
  { id: 'avg_conversion_time', value: 12, label: 'days in average to convert lead' },
  { id: 'inactive_leads', value: 30, label: 'inactive leads', hasInfo: true, infoText: 'Leads with no activity in the last 30 days.' },
];

interface StatsSummaryCardProps {
  className?: string;
}

const StatsSummaryCard: React.FC<StatsSummaryCardProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardContent className="p-6 grid md:grid-cols-2 gap-8">
        {/* Reasons for Leads Lost Section */}
        <div>
          <h3 className="text-lg font-semibold text-prd-primary-text mb-4">Reasons of leads lost</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {reasonsLostData.map((item) => (
              <div key={item.id}>
                <p className="text-3xl font-bold text-prd-primary-text">{item.percentage}%</p>
                <p className="text-sm text-prd-secondary-text">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Data Section */}
        <div>
          <h3 className="text-lg font-semibold text-prd-primary-text mb-4">Other data</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-4">
            {otherDataStats.map((stat) => (
              <div key={stat.id}>
                <div className="flex items-baseline">
                  <p className="text-3xl font-bold text-prd-primary-text">{stat.value}</p>
                  {stat.hasInfo && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-3.5 w-3.5 text-prd-secondary-text ml-1.5 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-slate-800 text-white text-xs p-2 rounded-md">
                          <p>{stat.infoText}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <p className="text-sm text-prd-secondary-text leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsSummaryCard;

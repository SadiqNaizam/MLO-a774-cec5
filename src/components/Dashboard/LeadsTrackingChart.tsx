import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  AreaChart,
  Area,
} from 'recharts';
import { CalendarDays } from 'lucide-react';

interface LeadsTrackingDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const leadsTrackingData: LeadsTrackingDataPoint[] = [
  { month: 'March', closedWon: 65, closedLost: 80 },
  { month: 'April', closedWon: 52, closedLost: 40 },
  { month: 'May', closedWon: 88, closedLost: 45 },
  { month: 'June', closedWon: 70, closedLost: 10 },
  { month: 'July', closedWon: 80, closedLost: 42 },
  { month: 'August', closedWon: 105, closedLost: 30 },
];

interface LeadsTrackingChartProps {
  className?: string;
}

const LeadsTrackingChart: React.FC<LeadsTrackingChartProps> = ({ className }) => {
  const totalClosed = 680;
  const totalLost = 70;

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-lg font-semibold text-prd-primary-text">Leads tracking</CardTitle>
          <div className="mt-1">
            <span className="text-2xl font-bold text-prd-primary-text">{totalClosed}</span>
            <span className="ml-1 text-sm text-prd-secondary-text">total closed</span>
            <span className="text-2xl font-bold text-prd-primary-text ml-4">{totalLost}</span>
            <span className="ml-1 text-sm text-prd-secondary-text">total lost</span>
          </div>
        </div>
        <Select defaultValue="last-6-months">
          <SelectTrigger className="w-auto text-xs h-8 bg-transparent border-none shadow-none text-prd-secondary-text focus:ring-0 focus:ring-offset-0">
            <CalendarDays className="h-3.5 w-3.5 mr-1.5 text-prd-secondary-text" />
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-1-month">Last 1 month</SelectItem>
            <SelectItem value="last-3-months">Last 3 months</SelectItem>
            <SelectItem value="last-6-months">Last 6 months</SelectItem>
            <SelectItem value="last-12-months">Last 12 months</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={leadsTrackingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-3)" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="var(--chart-3)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} 
                tickFormatter={(value) => `${value}`}
                dx={-10}
              />
              <RechartsTooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '0.375rem', border: '1px solid hsl(var(--border))' }}
                labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold' }}
                itemStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Legend 
                verticalAlign="top" 
                align="right" 
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ top: -10, right: 0, fontSize: '12px', color: 'hsl(var(--muted-foreground))' }}
                formatter={(value, entry) => <span className="text-prd-secondary-text ml-1">{value}</span>}
              />
              <Area type="monotone" dataKey="closedWon" name="Closed won" strokeWidth={2} stroke="var(--chart-3)" fillOpacity={1} fill="url(#colorClosedWon)" dot={{ r: 4, strokeWidth: 2, fill: 'var(--chart-3)', stroke: 'white' }} activeDot={{ r: 6, strokeWidth: 2, fill: 'var(--chart-3)', stroke: 'white' }}/>
              <Area type="monotone" dataKey="closedLost" name="Closed lost" strokeWidth={2} stroke="var(--chart-1)" fillOpacity={1} fill="url(#colorClosedLost)" dot={{ r: 4, strokeWidth: 2, fill: 'var(--chart-1)', stroke: 'white' }} activeDot={{ r: 6, strokeWidth: 2, fill: 'var(--chart-1)', stroke: 'white' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;

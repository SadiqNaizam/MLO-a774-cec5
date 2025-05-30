import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartsTooltip } from 'recharts';
import { CalendarDays } from 'lucide-react';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  fill: string;
}

const donutChartData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, fill: 'var(--chart-1)' }, // red
  { name: 'Behance', value: 1000, percentage: 25, fill: 'var(--chart-4)' }, // yellow
  { name: 'Instagram', value: 1000, percentage: 15, fill: 'var(--chart-2)' }, // blue
  { name: 'Dribbble', value: 1000, percentage: 10, fill: 'var(--chart-3)' }, // green
];

// Ensure percentages sum to 100 for realistic data
const totalValue = donutChartData.reduce((sum, item) => sum + item.value, 0);
donutChartData.forEach(item => {
  item.percentage = parseFloat(((item.value / totalValue) * 100).toFixed(0));
});
// Adjust last item to ensure sum is 100 due to rounding
let currentPercentageSum = donutChartData.slice(0, -1).reduce((sum, item) => sum + item.percentage, 0);
donutChartData[donutChartData.length -1].percentage = 100 - currentPercentageSum;

interface DonutChartCardProps {
  className?: string;
}

const DonutChartCard: React.FC<DonutChartCardProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold text-prd-primary-text">Sources</CardTitle>
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
      <CardContent className="pb-2">
        <div className="h-[240px] w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <RechartsTooltip 
                contentStyle={{ backgroundColor: 'white', borderRadius: '0.375rem', border: '1px solid hsl(var(--border))' }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
                itemStyle={{ color: 'hsl(var(--foreground))' }}
                formatter={(value: number, name: string, props: {payload: SourceData}) => [`$${value}`, `${props.payload.name} (${props.payload.percentage}%)`]}
              />
              <Pie
                data={donutChartData}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {donutChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {donutChartData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: item.fill }}></span>
                <span className="text-prd-primary-text">{item.name}</span>
              </div>
              <div className="flex items-center">
                <span className="text-prd-secondary-text mr-2 tabular-nums">$ {item.value.toLocaleString()}</span>
                <span className="text-prd-primary-text font-medium tabular-nums w-8 text-right">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4 flex justify-center space-x-2">
        <Button variant="outline" size="sm" className="text-xs h-7 px-2 text-prd-secondary-text hover:bg-muted">
          Leads came
        </Button>
        <Button variant="default" size="sm" className="text-xs h-7 px-2 bg-muted text-primary hover:bg-muted/90 shadow-none">
          Leads Converted
        </Button>
        <Button variant="outline" size="sm" className="text-xs h-7 px-2 text-prd-secondary-text hover:bg-muted">
          Total deals size
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonutChartCard;

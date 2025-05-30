import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; // For styling consistency if needed
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface PageHeaderProps {
  title: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, className }) => {
  return (
    <div className={cn('flex items-center justify-between mb-6', className)}>
      <h1 className="text-3xl font-semibold text-prd-primary-text">{title}</h1>
      <Tabs defaultValue="leads" className="w-auto">
        <TabsList className="bg-muted p-1 rounded-lg">
          <TabsTrigger value="sales" className="px-4 py-1.5 text-sm data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md">
            Sales
          </TabsTrigger>
          <TabsTrigger value="leads" className="px-4 py-1.5 text-sm data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md">
            Leads
          </TabsTrigger>
        </TabsList>
        {/* TabsContent can be added here if needed, or handled by parent page component */}
      </Tabs>
    </div>
  );
};

export default PageHeader;

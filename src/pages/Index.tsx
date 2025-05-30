import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import FunnelStatsCard from '../components/Dashboard/FunnelStatsCard';
import DonutChartCard from '../components/Dashboard/DonutChartCard';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import StatsSummaryCard from '../components/Dashboard/StatsSummaryCard';

/**
 * LeadsDashboardPage displays detailed insights into lead funnel, tracking, and analysis widgets.
 * It uses the MainAppLayout for overall page structure and arranges various dashboard
 * components such as PageHeader, FunnelStatsCard, DonutChartCard, LeadsTrackingChart,
 * and StatsSummaryCard in a responsive grid layout.
 */
const LeadsDashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* PageHeader displays the main title and tab navigation */}
      <PageHeader title="Dashboard" />

      {/* Grid container for FunnelStatsCard and DonutChartCard */}
      {/* On large screens (lg), it's a 5-column grid with FunnelStats taking 3 columns and DonutChart taking 2. */}
      {/* On smaller screens, items stack vertically. `items-start` aligns cards to the top. */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        <FunnelStatsCard className="lg:col-span-3" />
        <DonutChartCard className="lg:col-span-2" />
      </div>

      {/* LeadsTrackingChart displays leads over time, takes full width available */}
      <LeadsTrackingChart />

      {/* StatsSummaryCard aggregates various stats, takes full width available */}
      <StatsSummaryCard />
    </MainAppLayout>
  );
};

export default LeadsDashboardPage;

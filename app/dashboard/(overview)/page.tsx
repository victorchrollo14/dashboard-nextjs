import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchCardData, fetchLatestInvoices } from '@/app/lib/data';
import { garamond } from '@/app/ui/fonts';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page() {
  const {
    numberOfInvoices,
    totalPendingInvoices,
    totalPaidInvoices,
    numberOfCustomers,
  } = await fetchCardData();
  const latestInvoices = await fetchLatestInvoices();

  console.log(latestInvoices);

  return (
    <main>
      <h1 className={`${garamond.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          {' '}
          <RevenueChart />
        </Suspense>

        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
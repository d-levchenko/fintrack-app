import { Metadata } from 'next';
import TransactionPage from '../transactions/page';
import DashboardText from '@/components/ui/DashboardText/DashboardText';
import Categories from '../categories/page';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Personal Finance Dashboard',

  openGraph: {
    title: 'Dashboard',
    description: 'Personal Finance Dashboard',

    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 600,
        alt: 'Dashboard',
      },
    ],

    siteName: 'Personal Finance Dashboard',
  },
};

const DashboardPage = () => {
  return (
    <>
      <DashboardText />

      {/* change on components later */}
      <Categories />

      <TransactionPage />
    </>
  );
};

export default DashboardPage;

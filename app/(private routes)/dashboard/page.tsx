import { Metadata } from 'next';
import TransactionPage from '../transactions/page';
import DashboardText from '@/components/ui/DashboardText/DashboardText';
import DashboardCategories from '@/components/ui/DashboardText/DashboardCategories/DashboardCategories';

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

      <DashboardCategories />

      <TransactionPage />
    </>
  );
};

export default DashboardPage;

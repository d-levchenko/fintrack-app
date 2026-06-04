import { Metadata } from 'next';
import CategoriesPage from '../categories/page';
import TransactionPage from '../transactions/page';

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
      <h1>Dashboard</h1>

      <CategoriesPage />

      <TransactionPage />
    </>
  );
};

export default DashboardPage;

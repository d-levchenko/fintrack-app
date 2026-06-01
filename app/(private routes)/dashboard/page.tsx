import { Metadata } from 'next';

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
  return <h1>Dashboard</h1>;
};

export default DashboardPage;

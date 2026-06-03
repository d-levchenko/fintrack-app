import '@/styles/globals.scss';
import { Elms_Sans } from 'next/font/google';

interface RootLayoutProps {
  children: React.ReactNode;
}

const elmsSans = Elms_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-elms-sans',
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={elmsSans.variable}>
      <head />
      <body>
        <div className="containerGlobal">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;

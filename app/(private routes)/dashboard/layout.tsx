interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default DashboardLayout;

import { redirect } from 'next/navigation';
import createClient from '@/lib/supabase/server';
import Header from '@/components/layout/Header/Header';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ProtectedLayout;

import { redirect } from 'next/navigation';
import createClient from '@/lib/supabase/server';

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return <>{children}</>;
};

export default ProtectedLayout;

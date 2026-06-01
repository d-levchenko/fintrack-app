import createClient from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/dashboard');
  }

  return <>{children}</>;
};

export default PublicLayout;

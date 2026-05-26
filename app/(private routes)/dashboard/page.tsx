import { createClient } from '@/lib/supabase/server';

const DashboardPage = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default DashboardPage;

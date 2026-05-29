'use client';

import { useRouter } from 'next/navigation';
import createClient from '@/lib/supabase/client';

import css from './LogoutButton.module.scss';

const LogoutButton = () => {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();

    router.refresh();
    router.push('/');
  };

  return (
    <button className={css.button} onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;

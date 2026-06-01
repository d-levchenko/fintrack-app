import LogoutButton from '@/components/ui/LogoutButton/LogoutButton';
import css from './Header.module.scss';

import Link from 'next/link';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.links}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/transactions">Transactions</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/budget">Budget</Link>
        <Link href="/analytics">Analytics</Link>
      </div>

      <LogoutButton />
    </header>
  );
};

export default Header;

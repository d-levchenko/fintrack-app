import Link from 'next/link';
import css from './Home.module.scss';

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Personal Finance Dashboard</h1>

      <h2 className={css.subtitle}>Get started by signing up or signing in</h2>

      <div className={css.links}>
        <Link className={css.button} href="/sign-up">
          Sign Up
        </Link>

        <Link className={css.button} href="/sign-in">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Home;

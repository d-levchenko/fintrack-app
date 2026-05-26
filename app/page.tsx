import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Personal Finance Dashboard</h1>

      <h2>Get started by signing up or signing in</h2>

      <Link href="/sign-up">Sign Up</Link>
      <Link href="/sign-in">Sign In</Link>
    </div>
  );
};

export default Home;

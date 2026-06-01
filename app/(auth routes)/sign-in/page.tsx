'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import createClient from '@/lib/supabase/client';
import { toast, ToastContainer } from 'react-toast';
import Link from 'next/link';

import css from './SignIn.module.scss';

const SignInPage = () => {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmitLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      toast.success('Login successful');
      router.refresh();
      router.push('/dashboard');
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Login failed, try again later.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPassword(e.target.value);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Sign In</h1>

      <form className={css.form} onSubmit={handleSubmitLogin}>
        <input
          className={css.input}
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailInputChange}
        />

        <input
          className={css.input}
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordInputChange}
        />

        <button className={css.button} type="submit" disabled={loading}>
          {loading ? 'Singing in...' : 'Sign In'}
        </button>
      </form>

      <p className={css.linkText}>
        Don&apos;t have an account?{' '}
        <Link className={css.link} href="/sign-up">
          Sign Up
        </Link>
      </p>

      <Link className={css.link} href="/">
        Main Page
      </Link>

      <ToastContainer />
    </div>
  );
};

export default SignInPage;

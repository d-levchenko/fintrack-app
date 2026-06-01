'use client';

import { useState } from 'react';
import createClient from '@/lib/supabase/client';
import { toast, ToastContainer } from 'react-toast';
import Link from 'next/link';

import css from './SignUp.module.scss';

const SignupPage = () => {
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      e.target.reset();

      toast.success('Sign up successful');
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Sign up failed, try again later.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Sign Up</h1>

      <form className={css.form} onSubmit={handleSignup}>
        <input
          className={css.input}
          placeholder="email"
          onChange={handleSetEmail}
        />

        <input
          className={css.input}
          type="password"
          placeholder="password"
          onChange={handleSetPassword}
        />

        <button className={css.button} type="submit" disabled={loading}>
          {loading ? 'Singing up...' : 'Sign Up'}
        </button>
      </form>

      <Link className={css.link} href="/">
        Main Page
      </Link>

      <ToastContainer />
    </div>
  );
};

export default SignupPage;

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import createClient from '@/lib/supabase/client';
import { toast, ToastContainer } from 'react-toast';
import Link from 'next/link';

import css from './SignIn.module.scss';

const SignInPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    const {
      data: { session },
    } = await supabase.auth.getSession();

    console.log(session);

    router.refresh();
    router.push('/dashboard');
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
          placeholder="email"
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

        <button className={css.button} type="submit">
          Login
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

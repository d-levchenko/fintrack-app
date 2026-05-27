'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import createClient from '@/lib/supabase/client';
import { toast, ToastContainer } from 'react-toast';
import Link from 'next/link';

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
    <>
      <h1>Sign In</h1>

      <form onSubmit={handleSubmitLogin}>
        <input
          placeholder="email"
          value={email}
          onChange={handleEmailInputChange}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordInputChange}
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don&apos;t have an account? <Link href="/sign-up">Sign Up</Link>
      </p>

      <ToastContainer />
    </>
  );
};

export default SignInPage;

'use client';

import { useState } from 'react';
import createClient from '@/lib/supabase/client';
import { toast, ToastContainer } from 'react-toast';

const SignupPage = () => {
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    }

    e.target.reset();
  };

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <input placeholder="email" onChange={handleSetEmail} />

        <input
          type="password"
          placeholder="password"
          onChange={handleSetPassword}
        />

        <button type="submit">Sign Up</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SignupPage;

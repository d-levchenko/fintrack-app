'use client';

import { useState } from 'react';
import createClient from '@/lib/supabase/client';
import { toast, ToastContainer } from 'react-toast';

const SignupPage = () => {
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    }
  };

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <input placeholder="email" onChange={handleSetEmail} />

      <input
        type="password"
        placeholder="password"
        onChange={handleSetPassword}
      />

      <button onClick={handleSignup}>Sign Up</button>

      <ToastContainer />
    </div>
  );
};

export default SignupPage;

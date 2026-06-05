'use client';

import { createBrowserClient } from '@supabase/ssr';

const createUserClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );

export default createUserClient;

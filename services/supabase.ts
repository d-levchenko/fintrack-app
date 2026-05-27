import createClient from '@/lib/supabase/server';

const supabase = await createClient();

export default supabase;

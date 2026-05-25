import { supabase } from '@/lib/supabase/supabase';

const getTransactions = async () => {
  const { data } = await supabase.from('transactions').select('*');

  return data;
};

export default getTransactions;

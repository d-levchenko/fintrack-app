import { supabase } from '@/lib/supabase/supabase';
import type { Transaction } from '@/types/transaction';

const getTransactions = async (): Promise<Transaction[]> => {
  const { data } = await supabase.from('transactions').select('*');

  return data ?? [];
};

export default getTransactions;

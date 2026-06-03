import createClient from '@/lib/supabase/server';
import type { CreateTransactionInput, Transaction } from '@/types/transaction';

const getTransactions = async (): Promise<Transaction[]> => {
  const supabase = await createClient();

  const { data } = await supabase.from('transactions').select('*');

  return data as Transaction[];
};

const createTransaction = async (
  transaction: CreateTransactionInput,
): Promise<Transaction> => {
  const supabase = await createClient();

  const { data } = await supabase
    .from('transactions')
    .insert(transaction)
    .select()
    .single();

  return data;
};

const deleteTransaction = async (id: Transaction['id']) => {
  const supabase = await createClient();

  await supabase.from('transactions').delete().eq('id', id);
};

const updateTransaction = async (transaction: Transaction) => {
  const supabase = await createClient();

  await supabase
    .from('transactions')
    .update(transaction)
    .eq('id', transaction.id);
};

const transactionService = {
  getTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction,
};

export default transactionService;

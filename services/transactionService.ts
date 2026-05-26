import supabase from '@/lib/supabase/supabase';
import type { CreateTransactionInput, Transaction } from '@/types/transaction';

const getTransactions = async (): Promise<Transaction[]> => {
  const { data } = await supabase.from('transactions').select('*');

  return data ?? [];
};

const createTransaction = async (
  transaction: CreateTransactionInput,
): Promise<Transaction> => {
  const { data } = await supabase
    .from('transactions')
    .insert(transaction)
    .select()
    .single();

  return data;
};

const deleteTransaction = async (id: string) => {
  await supabase.from('transactions').delete().eq('id', id);
};

const updateTransaction = async (transaction: Transaction) => {
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

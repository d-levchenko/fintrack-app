export type Transaction = {
  id: string;
  amount: number;
  type: 'income' | 'expense';
  description: string | null;
  created_at: string;
};

export type CreateTransactionInput = {
  amount: number;
  type: 'income' | 'expense';
  description: string;
};

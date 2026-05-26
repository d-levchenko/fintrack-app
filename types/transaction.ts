export type Transaction = {
  id: string;
  amount: number;
  type: 'income' | 'expense';
  description: string | null;
  created_at: string;
  user_id: string;
  category_id: string | null;
};

export type CreateTransactionInput = {
  amount: number;
  type: 'income' | 'expense';
  description: string;
  user_id: string;
  category_id: string | null;
};

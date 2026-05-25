export type Transaction = {
  id: string;
  amount: number;
  type: 'income' | 'expense';
  description: string | null;
  created_at: string;
};

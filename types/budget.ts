export type Budget = {
  id: string;
  user_id: string;
  category_id: string;
  limit_amount: number;
  month: string;
  created_at: string;
};

export type CreateBudgetInput = {
  category_id: string;
  limit_amount: number;
  month: string;
};

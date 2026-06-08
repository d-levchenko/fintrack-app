import { Budget, CreateBudgetInput } from '@/types/budget';
import createClient from '@/lib/supabase/server';

const getBudget = async (): Promise<Budget[]> => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data } = await supabase
    .from('budgets')
    .select('*')
    .eq('user_id', user.id);

  return (data ?? []) as Budget[];
};

const getBudgetById = async (id: Budget['id']): Promise<Budget> => {
  const supabase = await createClient();

  const { data } = await supabase
    .from('budgets')
    .select('*')
    .eq('id', id)
    .single();

  return data;
};

const createBudget = async (budget: CreateBudgetInput) => {
  const supabase = await createClient();

  await supabase.from('budgets').insert(budget);
};

const updateBudget = async (budget: Budget) => {
  const supabase = await createClient();

  await supabase
    .from('budgets')
    .update({
      category_id: budget.category_id,
      limit_amount: budget.limit_amount,
      month: budget.month,
    })
    .eq('id', budget.id);
};

const deleteBudget = async (id: Budget['id']) => {
  const supabase = await createClient();

  await supabase.from('budgets').delete().eq('id', id);
};

const budgetsService = {
  getBudget,
  getBudgetById,
  createBudget,
  updateBudget,
  deleteBudget,
};

export default budgetsService;

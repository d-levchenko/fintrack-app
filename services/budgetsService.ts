import { Budget, CreateBudgetInput } from '@/types/budget';
import supabase from '@/services/supabase';

const getBudget = async (): Promise<Budget[]> => {
  const { data } = await supabase.from('budgets').select('*');

  return data as Budget[];
};

const getBudgetById = async (id: Budget['id']): Promise<Budget> => {
  const { data } = await supabase
    .from('budgets')
    .select('*')
    .eq('id', id)
    .single();

  return data;
};

const createBudget = async (budget: CreateBudgetInput) => {
  await supabase.from('budgets').insert(budget);
};

const updateBudget = async (budget: Budget) => {
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

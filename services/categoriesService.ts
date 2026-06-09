import createClient from '@/lib/supabase/server';
import type { Category } from '@/types/categories';

const getCategories = async (): Promise<Category[]> => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data } = await supabase
    .from('categories')
    .select('*')
    .eq('user_id', user.id);

  return (data ?? []) as Category[];
};

const getCategoryById = async (id: string): Promise<Category | null> => {
  const supabase = await createClient();

  const { data } = await supabase
    .from('categories')
    .select('*')
    .eq('id', id)
    .single();

  return data as Category | null;
};

const categoriesService = {
  getCategories,
  getCategoryById,
};

export default categoriesService;

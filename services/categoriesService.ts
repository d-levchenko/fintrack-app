import createClient from '@/lib/supabase/server';
import type { Category } from '@/types/categories';

const getCategories = async () => {
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

const deleteCategory = async (id: Category['id']) => {
  const supabase = await createClient();

  await supabase.from('categories').delete().eq('id', id);
};

const updateCategory = async (category: Category) => {
  const supabase = await createClient();

  await supabase.from('categories').update(category).eq('id', category.id);
};

const categoriesService = {
  getCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
};

export default categoriesService;

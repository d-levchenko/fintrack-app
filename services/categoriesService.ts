import createClient from '@/lib/supabase/server';
import type { Category, CreateCategoryInput } from '@/types/categories';

const getCategories = async (): Promise<Category[]> => {
  const supabase = await createClient();

  const { data } = await supabase.from('categories').select('*');

  return (data ?? []) as Category[];
};

const getCategoryById = async (id: string): Promise<Category | null> => {
  const supabase = await createClient();

  const { data } = await supabase
    .from('categories')
    .select('*')
    .eq('id', id)
    .single();

  return data;
};

const createCategory = async (category: CreateCategoryInput) => {
  const supabase = await createClient();

  await supabase.from('categories').insert(category);
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
  createCategory,
  deleteCategory,
  updateCategory,
};

export default categoriesService;

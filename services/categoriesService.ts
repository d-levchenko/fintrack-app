import supabase from '@/services/supabase';
import type { Category } from '@/types/categories';

const getCategories = async (): Promise<Category[]> => {
  const { data } = await supabase.from('categories').select('*');

  return (data ?? []) as Category[];
};

const createCategory = async (category: Category) => {
  await supabase.from('categories').insert(category);
};

const deleteCategory = async (id: string) => {
  await supabase.from('categories').delete().eq('id', id);
};

const updateCategory = async (category: Category) => {
  await supabase.from('categories').update(category).eq('id', category.id);
};

const categoriesService = {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};

export default categoriesService;

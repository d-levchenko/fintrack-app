import supabase from '@/services/supabase';
import type { Category } from '@/types/categories';

const getCategories = async (): Promise<Category[]> => {
  const { data } = await supabase.from('categories').select('*');

  return (data ?? []) as Category[];
};

export default getCategories;

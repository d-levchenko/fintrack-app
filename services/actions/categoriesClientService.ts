'use server';

import createClient from '@/lib/supabase/server';
import { Category } from '@/types/categories';
import { revalidatePath } from 'next/cache';

export const createCategoryAction = async (formData: FormData) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error('Unauthorized');

  const { error } = await supabase.from('categories').insert({
    name: formData.get('name'),
    color: formData.get('color'),
    user_id: user.id,
  });

  if (error) {
    throw error;
  }

  revalidatePath('/categories');
  revalidatePath('/dashboard');
};

export const deleteCategoryAction = async (id: Category['id']) => {
  const supabase = await createClient();

  await supabase.from('categories').delete().eq('id', id);

  revalidatePath('/categories');
  revalidatePath('/dashboard');
};

export const updateCategoryAction = async (formData: FormData) => {
  const supabase = await createClient();

  const id = formData.get('id') as string;
  const name = formData.get('name') as string;
  const color = formData.get('color') as string;

  const { error } = await supabase
    .from('categories')
    .update({
      name,
      color,
    })
    .eq('id', id);

  if (error) {
    throw error;
  }

  revalidatePath('/categories');
  revalidatePath('/dashboard');
};

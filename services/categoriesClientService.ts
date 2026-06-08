'use server';

import createClient from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

const createCategoryAction = async (formData: FormData) => {
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

export default createCategoryAction;

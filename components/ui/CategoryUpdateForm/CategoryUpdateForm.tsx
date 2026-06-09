'use client';

import { updateCategoryAction } from '@/services/actions/categoriesClientService';
import { Category } from '@/types/categories';
import { useState } from 'react';

interface CategoryUpdateFormProps {
  category: Category;
  onSuccess: () => void;
}

const CategoryUpdateForm = ({
  onSuccess,
  category,
}: CategoryUpdateFormProps) => {
  const [name, setName] = useState(category.name);
  const [color, setColor] = useState(category.color);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleUpdateAction = async (formData: FormData) => {
    await updateCategoryAction(formData);

    onSuccess();
  };

  return (
    <form action={handleUpdateAction}>
      <input type="hidden" name="id" value={category.id} />

      <input
        name="name"
        type="text"
        placeholder="Category name"
        value={name}
        onChange={handleNameChange}
      />

      <input
        name="color"
        type="color"
        value={color}
        onChange={handleColorChange}
      />

      <button type="submit">Update</button>
    </form>
  );
};

export default CategoryUpdateForm;

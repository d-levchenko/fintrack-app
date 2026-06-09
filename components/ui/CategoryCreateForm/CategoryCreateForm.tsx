'use client';

import { useState } from 'react';

import { createCategoryAction } from '@/services/actions/categoriesClientService';

interface CategoryFormProps {
  onSuccess: () => void;
}

const CategoryCreateForm = ({ onSuccess }: CategoryFormProps) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000000');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleAction = async (formData: FormData) => {
    await createCategoryAction(formData);

    onSuccess();
  };

  return (
    <form action={handleAction}>
      <input
        name="name"
        type="text"
        placeholder="Category name"
        value={name}
        onChange={handleChangeName}
      />

      <input
        name="color"
        type="color"
        value={color}
        onChange={handleChangeColor}
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default CategoryCreateForm;

'use client';

import { Category } from '@/types/categories';
import css from './CategoryItem.module.scss';
import { deleteCategoryAction } from '@/services/actions/categoriesClientService';

import Button from '@/components/layout/Button/Button';
import { useState } from 'react';
import CategoryUpdateForm from '@/components/ui/CategoryUpdateForm/CategoryUpdateForm';
import ModalWindow from '@/components/ui/ModalWindow/ModalWindow';

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({
  category: { id, name, color, user_id },
}: CategoryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteCategory = async () => {
    await deleteCategoryAction(id);
  };

  const handleEditCategory = async () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <li className={css.item} key={id}>
      <p className={css.name}>
        <span className={css.colorDot} style={{ backgroundColor: color }} />{' '}
        {name}
      </p>

      {isOpen && (
        <ModalWindow isOpen={isOpen} onClose={handleModalClose}>
          <CategoryUpdateForm
            category={{ id, name, color, user_id }}
            onSuccess={handleModalClose}
          />
        </ModalWindow>
      )}

      <Button text="Edit" style={css.button} onClick={handleEditCategory} />

      <Button onClick={handleDeleteCategory} text="Delete" style={css.button} />
    </li>
  );
};

export default CategoryItem;

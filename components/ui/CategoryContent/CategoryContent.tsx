'use client';

import Button from '@/components/layout/Button/Button';
import ModalWindow from '@/components/ui/ModalWindow/ModalWindow';
import CategoryForm from '../CategoryForm/CategoryForm';

import css from './CategoryContent.module.scss';

import { useState } from 'react';

const CategoryContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModalWindow = () => {
    setIsOpen(true);
  };

  const handleCloseModalWindow = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={css.categoryHeader}>
        <h2>Categories</h2>

        <Button text="Add Category" onClick={handleOpenModalWindow} />

        <ModalWindow isOpen={isOpen} onClose={handleCloseModalWindow}>
          <CategoryForm onSuccess={handleCloseModalWindow} />
        </ModalWindow>
      </div>
    </>
  );
};

export default CategoryContent;

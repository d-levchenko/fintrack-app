'use client';

import Button from '@/components/layout/Button/Button';
import css from './CategoryContent.module.scss';

const CategoryContent = () => {
  const handleClick = () => {};

  return (
    <>
      <div className={css.categoryHeader}>
        <h2>Categories</h2>

        <Button text="Add Category" onClick={handleClick} />
      </div>
    </>
  );
};

export default CategoryContent;

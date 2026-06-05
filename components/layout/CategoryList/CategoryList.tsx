import categoriesService from '@/services/categoriesService';
import CategoryItem from './CategoryItem/CategoryItem';

import css from './CategoryList.module.scss';

const CategoryList = async () => {
  const categories = await categoriesService.getCategories();

  return (
    <ul className={css.list}>
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default CategoryList;

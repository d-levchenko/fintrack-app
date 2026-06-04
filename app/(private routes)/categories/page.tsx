import categoriesService from '@/services/categoriesService';
import Link from 'next/link';

import css from './Categories.module.scss';

const CategoriesPage = async () => {
  const categories = await categoriesService.getCategories();

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1>Categories</h1>

        <ul className={css.list}>
          {categories.map(category => (
            <li key={category.id}>
              <Link href={`/categories/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoriesPage;

import categoriesService from '@/services/categoriesService';
import Link from 'next/link';

import css from './DashboardCategories.module.scss';

const DashboardCategories = async () => {
  const categories = await categoriesService.getCategories();

  return (
    <>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.title}>Categories</h2>

          <ul className={css.list}>
            {categories.slice(0, 5).map(category => (
              <li key={category.id}>
                <Link href={`/categories/${category.id}`}>
                  <span
                    className={css.colorDot}
                    style={{ backgroundColor: category.color }}
                  />{' '}
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/categories">View All Categories</Link>
        </div>
      </section>
    </>
  );
};

export default DashboardCategories;

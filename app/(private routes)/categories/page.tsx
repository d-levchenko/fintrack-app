import CategoryList from '@/components/layout/CategoryList/CategoryList';
import CategoryPage from '@/components/ui/CategoryContent/CategoryContent';

import css from './Categories.module.scss';

const Categories = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <CategoryPage />

        <CategoryList />
      </div>
    </section>
  );
};

export default Categories;

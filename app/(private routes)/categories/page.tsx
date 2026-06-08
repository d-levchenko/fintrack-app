import CategoryList from '@/components/layout/CategoryList/CategoryList';
import CategoryContent from '@/components/ui/CategoryContent/CategoryContent';

import css from './Categories.module.scss';

const Categories = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <CategoryContent />

        <CategoryList />
      </div>
    </section>
  );
};

export default Categories;

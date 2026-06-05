import Link from 'next/link';

import { Category } from '@/types/categories';

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <li key={category.id}>
      <Link href={`/categories/${category.id}`}>{category.name}</Link>
    </li>
  );
};

export default CategoryItem;

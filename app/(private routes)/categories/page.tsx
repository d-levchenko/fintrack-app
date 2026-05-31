import categoriesService from '@/services/categoriesService';
// import Link from 'next/link';

const CategoriesPage = async () => {
  const categories = await categoriesService.getCategories();

  return (
    <div>
      <h1>Categories</h1>

      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {/* <Link href={`/categories/${category.id}`}>{category.name}</Link> */}
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;

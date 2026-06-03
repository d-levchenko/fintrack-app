import categoriesService from '@/services/categoriesService';

interface CategoryIdProps {
  params: Promise<{ id: string }>;
}

const CategoryId = async ({ params }: CategoryIdProps) => {
  const { id } = await params;

  const categoryName = await categoriesService.getCategoryById(id);

  return (
    <div>
      <h1>{categoryName?.name} Category</h1>
    </div>
  );
};

export default CategoryId;

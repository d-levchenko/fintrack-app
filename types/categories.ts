export type Category = {
  id: string;
  name: string;
  color: string;
};

export type CreateCategoryInput = Omit<Category, 'id'>;

export type Category = {
  id: string;
  user_id: string;
  name: string;
  color: string;
};

export type CreateCategoryInput = {
  name: string;
  color: string;
};

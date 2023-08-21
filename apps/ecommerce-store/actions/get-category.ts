import { Category } from '@/lib/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
};

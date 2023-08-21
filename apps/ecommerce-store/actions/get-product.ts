import { Product } from '@/lib/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
};

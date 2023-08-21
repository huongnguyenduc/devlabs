import { Product } from '@/lib/types';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  isFeatured?: boolean;
  colorId?: string;
  sizeId?: string;
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
      colorId: query.colorId,
      sizeId: query.sizeId,
    },
  });

  const response = await fetch(url);

  return response.json();
};

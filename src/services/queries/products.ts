import {useQuery} from '@tanstack/react-query';
import {getProducts, getCategories} from '../clients/products';

export const useFetchProducts = () => {
  const queryKey = ['product'];
  return useQuery({
    queryKey,
    queryFn: () => getProducts(),
  });
};
export const useFetchCategories = () => {
  const queryKey = ['category'];
  return useQuery({
    queryKey,
    queryFn: () => getCategories(),
  });
};

import apiHandler from '../api-handler';
import ApiRoute from '../routes/api.routes';

export const getProducts = async () => {
  const response = await apiHandler.get(ApiRoute.product);

  return response.data;
};

export const getCategories = async () => {
  const response = await apiHandler.get(ApiRoute.category);
  return response.data;
};

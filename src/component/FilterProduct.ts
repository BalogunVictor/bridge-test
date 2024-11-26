type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};

export const filterProducts = (search: string, products: Product[]) => {
  if (!search.trim()) {
    return [];
  }

  const lowerCaseSearch = search.toLowerCase();

  return products.filter(
    product =>
      product.title.toLowerCase().includes(lowerCaseSearch) ||
      product.category.toLowerCase().includes(lowerCaseSearch),
  );
};

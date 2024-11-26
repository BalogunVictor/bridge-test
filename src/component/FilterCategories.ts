export const filterCategories = (
  search: string,
  categories: string[],
): string[] => {
  if (!search.trim()) {
    return [];
  }

  const lowerCaseSearch = search.toLowerCase();

  // Filter categories based on the search string
  return categories.filter(category =>
    category.toLowerCase().includes(lowerCaseSearch),
  );
};

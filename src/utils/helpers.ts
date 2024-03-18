export function generateSlug(string: string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function generateTagData(categories: string[]) {
  let categoryData: { title: string; slug: string }[] = [];
  categories.forEach(category => {
    categoryData.push({
      title: category,
      slug: `${generateSlug(category)}`,
    });
  });
  return categoryData;
}

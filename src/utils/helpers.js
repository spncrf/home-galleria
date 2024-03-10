export function generateSlug(string) {
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

export function generateTagData(categories) {
  let categoryData = [];
  categories.forEach(category => {
    categoryData.push({
      title: category,
      slug: `${generateSlug(category)}`,
    });
  });
  return categoryData;
}
/**
 * Workaround for auth redirect not working
 * 
 * See: https://answers.netlify.com/t/common-issue-netlify-cms-git-gateway-email-not-confirmed/10690/26
 */
export function authRedirector() {
  window.onload(() => {
    if (window.location.hash.includes('_token=')) {
      window.location.replace('/admin/' + window.location.hash);
    }
  })
}
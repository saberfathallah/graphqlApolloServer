import fetch from 'node-fetch';

async function deleteCategoryMS(categoryId, userId) {
  const url = `${process.env.MS_USERS_URL_URI}categories/${categoryId}`;
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
    },
  });
}

async function deleteCategoryService(categoryId, userId) {
  const response = await deleteCategoryMS(categoryId, userId);
  const category = await response.json();
  return category;
}

export default deleteCategoryService;

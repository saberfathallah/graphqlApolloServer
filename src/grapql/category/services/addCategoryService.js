import fetch from 'node-fetch';

async function addCategoryMS({ name, level, parentId }, userId) {
  const url = `${process.env.MS_USERS_URL_URI}categories`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ name, level, parentId }),
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
  },
  });
}

async function addCategoryService(categoryInput, userId) {
  const response = await addCategoryMS(categoryInput, userId);
  const category = await response.json();
  return category;
}

export default addCategoryService;

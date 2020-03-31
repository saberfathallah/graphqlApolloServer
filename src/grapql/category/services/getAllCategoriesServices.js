import fetch from 'node-fetch';

async function getAllCategoriesFromMS(userId) {
  const url = `${process.env.MS_USERS_URL_URI}categories`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
    },
  });
}

async function getAllCategories(userId) {
  const result = await getAllCategoriesFromMS(userId);
  const categories = await result.json();
  return categories;
}

export default getAllCategories;

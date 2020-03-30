import fetch from 'node-fetch';

async function getAllCategoriesFromMS() {
  const url = `${process.env.MS_USERS_URL_URI}categories`;

    return fetch(url, {
    method: 'GET',
  });
}

async function getAllCategories() {
  const result = await getAllCategoriesFromMS();
  const categories = await result.json();
  return categories;
}

export default getAllCategories;

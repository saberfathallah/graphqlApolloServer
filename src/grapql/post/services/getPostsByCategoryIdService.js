import fetch from 'node-fetch';

async function getPostsByCategoryIdMS(categoryId, userId) {
  const url = `${process.env.MS_USERS_URL_URI}posts/categories/${categoryId}`;

    return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
    },
  });
}

async function getPostsByCategoryIdService(categoryId, userId) {
  const result = await getPostsByCategoryIdMS(categoryId, userId);
  const posts = await result.json();

  return posts;
}

export default getPostsByCategoryIdService;

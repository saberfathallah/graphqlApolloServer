import fetch from 'node-fetch';

async function getPostsByUserIdMS(userId) {
  const url = `${process.env.MS_USERS_URL_URI}posts`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
    },
  });
}

async function getPostsByUserIdService(userId) {
  const result = await getPostsByUserIdMS(userId);
  const posts = await result.json();

  return posts;
}

export default getPostsByUserIdService;

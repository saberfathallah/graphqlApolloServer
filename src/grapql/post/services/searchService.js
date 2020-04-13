import fetch from 'node-fetch';

async function searchMS(query, userId) {
  const url = `${process.env.MS_USERS_URL_URI}posts/${query}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
    },
  });
}

async function searchService(query, userId) {
  const result = await searchMS(query, userId);
  const posts = await result.json();

  return posts;
}

export default searchService;

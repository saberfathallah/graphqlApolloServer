import fetch from 'node-fetch';

async function getAllPostsFromMS(userId, from, limit) {
  const url = `${process.env.MS_USERS_URL_URI}posts/all/${from}/${limit}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
    },
  });
}

async function getAllPostsService(userId, from, limit) {
  const result = await getAllPostsFromMS(userId, from, limit);
  const posts = await result.json();
  return posts;
}

export default getAllPostsService;

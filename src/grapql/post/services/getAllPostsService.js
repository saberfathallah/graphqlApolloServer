import fetch from 'node-fetch';

async function getAllPostsFromMS(userId) {
  const url = `${process.env.MS_USERS_URL_URI}posts/all`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
    },
  });
}

async function getAllPostsService(userId) {
  const result = await getAllPostsFromMS(userId);
  const posts = await result.json();
  return posts;
}

export default getAllPostsService;

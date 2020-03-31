import fetch from 'node-fetch';

async function getAllPostsFromMS() {
  const url = `${process.env.MS_USERS_URL_URI}posts/all`;

    return fetch(url, {
    method: 'GET',
  });
}

async function getAllPostsService() {
  const result = await getAllPostsFromMS();
  const posts = await result.json();
  return posts;
}

export default getAllPostsService;

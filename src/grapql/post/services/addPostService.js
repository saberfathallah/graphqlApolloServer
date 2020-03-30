import fetch from 'node-fetch';

async function addPostMS({ description, categoryId }, userId) {
  const url = `${process.env.MS_USERS_URL_URI}posts`;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ description, categoryId }),
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
  },
  });
}

async function addPostService(postInput, userId) {
  const response = await addPostMS(postInput, userId);
  const post = await response.json();

  return post;
}

export default addPostService;

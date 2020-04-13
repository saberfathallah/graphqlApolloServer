import fetch from 'node-fetch';

async function addLikeMS(postId, userId) {
  const url = `${process.env.MS_USERS_URL_URI}likes/${postId}`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
    },
  });
}

async function addLikeervice(postId, userId) {
  const response = await addLikeMS(postId, userId);
  const LikeReponse = await response.json();

  return LikeReponse;
}

export default addLikeervice;

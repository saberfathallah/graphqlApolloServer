import fetch from 'node-fetch';

async function dislikeMS(postId, userId) {
  const url = `${process.env.MS_USERS_URL_URI}likes/${postId}`;

  return fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ postId }),
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
    },
  });
}

async function dislikeService(postId, userId) {
  const response = await dislikeMS(postId, userId);
  const likeResponse = await response.json();

  return likeResponse;
}

export default dislikeService;

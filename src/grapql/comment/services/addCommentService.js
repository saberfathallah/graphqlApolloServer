import fetch from 'node-fetch';

async function addCommentMS({ description, categoryId, postId }, userId) {
  const url = `${process.env.MS_USERS_URL_URI}comments/${postId}`;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ description, categoryId }),
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
  },
  });
}

async function addCommentService(commentInput, userId) {
  const response = await addCommentMS(commentInput, userId);
  const comment = await response.json();

  return comment;
}

export default addCommentService;

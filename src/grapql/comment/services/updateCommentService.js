import fetch from 'node-fetch';

async function updateCommentMS(commentId, description, userId) {
  const url = `${process.env.MS_USERS_URL_URI}comments/${commentId}`;

  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify({ description }),
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
    },
  });
}

async function updateCommentService({ commentId, description }, userId) {
  const response = await updateCommentMS(commentId, description, userId);
  const comment = await response.json();

  return comment;
}

export default updateCommentService;

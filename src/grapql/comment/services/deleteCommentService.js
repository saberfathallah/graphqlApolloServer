import fetch from 'node-fetch';

async function deleteCommentMS(postId, commentId, userId) {
  const url = `${process.env.MS_USERS_URL_URI}comments/${commentId}`;

  return fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ postId }),
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
    },
  });
}

async function deleteCommentService({ postId, commentId }, userId) {
  const response = await deleteCommentMS(postId, commentId, userId);
  const comment = await response.json();

  return comment;
}

export default deleteCommentService;

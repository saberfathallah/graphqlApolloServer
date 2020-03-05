import fetch from 'node-fetch';

async function deleteUserMS(email) {
  const url = process.env.MS_USERS_URL_URI;
  return fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
  },
  });
}

async function deleteUserService(email) {
  const response = await deleteUserMS(email);
  const user = await response.json();
  return user;
}

export default deleteUserService;

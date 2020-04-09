import fetch from 'node-fetch';

async function createUserMS({ email, name, password }) {
  const url = `${process.env.MS_USERS_URL_URI}users`;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ email, name, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function createUserService(userInput) {
  const response = await createUserMS(userInput);
  const user = await response.json();

  return user;
}

export default createUserService;

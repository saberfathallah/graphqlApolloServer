import fetch from 'node-fetch';

async function loginMS({ email, password }) {
  const url = `${process.env.MS_USERS_URL_URI}users/login`;
  console.log("url", url)
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
  },
  });
}

async function loginService(loginInput) {
  const response = await loginMS(loginInput);
  const userResponse = await response.json();

  return userResponse;
}

export default loginService;
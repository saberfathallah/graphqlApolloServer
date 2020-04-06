import fetch from 'node-fetch';

async function getUserDetailMS(userId) {
  const url = `${process.env.MS_USERS_URL_URI}users/details`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      userid: userId,
  },
  });
}

async function getUserDetailsService(userId) {
  const response = await getUserDetailMS(userId);
  const user = await response.json();

  return user;
}

export default getUserDetailsService;

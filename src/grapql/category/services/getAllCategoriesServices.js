import fetch from 'node-fetch';

async function getAllUSersFromMS() {
  const url = `${process.env.MS_USERS_URL_URI}categories`;
    return fetch(url, {
    method: 'GET',
  });
}

async function getAllUsers() {
  const result = await getAllUSersFromMS();
  const users = await result.json();
  return users;
}

export default getAllUsers;

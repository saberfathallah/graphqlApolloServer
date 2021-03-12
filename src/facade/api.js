import fetch from 'node-fetch';

const getHeadears = (userid) => ({
  headers: userid
    ? {
        'Content-Type': 'application/json',
        userid,
      }
    : { 'Content-Type': 'application/json' },
});

const get = async (url, userid) => {
  const data = await fetch(
    url,
    Object.assign({ method: 'GET' }, getHeadears(userid))
  );

  const result = await data.json();
  return result;
};

const fetchFunction = async (url, userid, method, body) => {
  const data = await fetch(
    url,
    Object.assign({ method }, getHeadears(userid), {
      body: JSON.stringify(body),
    })
  );

  const result = await data.json();
  return result;
};

const remove = async (url, userid, body = {}) => {
  const result = await fetchFunction(url, userid, body, 'DELETE');
  return result;
};

const post = async (url, userid, body = {}) => {
  const result = await fetchFunction(url, userid, body, 'POST');
  return result;
};

const put = async (url, userid, body = {}) => {
  const result = await fetchFunction(url, userid, body, 'PUT');
  return result;
};

export { get, remove, post, put };

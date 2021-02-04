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

const remove = async (url, userid, body = {}) => {
  const data = await fetch(
    url,
    Object.assign({ method: 'DELETE' }, getHeadears(userid), {
      body: JSON.stringify(body),
    })
  );

  const result = await data.json();
  return result;
};

const post = async (url, userid, body = {}) => {
  const data = await fetch(
    url,
    Object.assign({ method: 'POST' }, getHeadears(userid), {
      body: JSON.stringify(body),
    })
  );

  const result = await data.json();
  return result;
};

const put = async (url, userid, body = {}) => {
  const data = await fetch(
    url,
    Object.assign({ method: 'PUT' }, getHeadears(userid), {
      body: JSON.stringify(body),
    })
  );

  const result = await data.json();
  return result;
};

export { get, remove, post, put };

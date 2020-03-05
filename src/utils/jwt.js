import jwt from 'jsonwebtoken';

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, 'jwt_secret');
    return decoded.id;
  } catch (error) {
  return null;
  }
}

export default verifyToken;

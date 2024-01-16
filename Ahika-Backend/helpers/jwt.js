const expressJwt = require('express-jwt');
require('dotenv').config();

const authJwt = () => {
  const { SECRET, API_URL } = process.env;

  if (!SECRET || !API_URL) {
    console.error('SECRET or API_URL not set:', SECRET, API_URL);
    throw new Error('Secret and API_URL should be set');
  }

  return expressJwt({
    secret: SECRET,
    algorithms: ['HS256'],
    isRevoked,
  }).unless({
    path: [
      { url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS'] },
      { url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS'] },
      { url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS'] },
      { url: /\/api\/v1\/orders(.*)/, methods: ['GET', 'OPTIONS', 'POST'] },
      `${API_URL}/users/login`,
      `${API_URL}/users/register`,
      `${API_URL}/users/send-otp`,
      `${API_URL}/users/verify-otp`
    ],
  });
}
const isRevoked = (req, payload, done) => {
  if (!payload.isAdmin) {
    done(null, true);
  }

  done();
};

module.exports = authJwt;

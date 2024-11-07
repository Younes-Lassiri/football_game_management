const db = require('../db');

const createUser = (userData) => {
  const { googleId, email, name } = userData;
  const query = `INSERT INTO users (googleId, email, name) VALUES (?, ?, ?)`;

  return new Promise((resolve, reject) => {
    db.query(query, [googleId, email, name], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = { createUser };

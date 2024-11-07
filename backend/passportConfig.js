const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./db');
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await db.query('SELECT * FROM users WHERE google_id = ?', [profile.id]);
        if (existingUser.length > 0) {
          return done(null, existingUser[0]);
        } else {
          const newUser = {
            google_id: profile.id,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            email: profile.emails[0].value,
          };

          const result = await db.query('INSERT INTO users (google_id, first_name, last_name, email) VALUES (?, ?, ?, ?)', [
            newUser.google_id,
            newUser.first_name,
            newUser.last_name,
            newUser.email,
          ]);
          newUser.id = result.insertId;
          return done(null, newUser);
        }
      } catch (error) {
        console.error(error);
        return done(error, false);
      }
    }
  )
);

// Serialize the user ID for session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize the user ID from session
passport.deserializeUser((id, done) => {
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      return done(err, false);
    }
    return done(null, results[0]);
  });
});

module.exports = passport;

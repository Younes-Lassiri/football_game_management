const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const passport = require('../passportConfig');
const { signup, verifyEmail } = require('../controllers/authController');
const User = require('../models/User'); // Assuming you have a User model for DB interactions

// Initialize Google OAuth client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Handle Google Sign-Up
router.post('/google', async (req, res) => {
  const { token } = req.body;

  try {
    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID, // Ensure this matches your Google Client ID
    });

    const payload = ticket.getPayload(); // Get the payload from the Google token

    // Check if the user already exists in the database by Google ID
    const existingUser = await User.findOne({ where: { googleId: payload.sub } });

    if (existingUser) {
      // User exists, log them in
      return res.status(200).json({ message: 'User already exists', user: existingUser });
    }

    // If user doesn't exist, create a new user
    const newUser = await User.create({
      googleId: payload.sub,
      email: payload.email,
      name: payload.name,
      // Add other user details like profile picture if needed
    });

    // Send a response with user info
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(400).json({ message: 'Invalid Google token' });
  }
});

// Other routes
router.post('/signup', signup);
router.get('/verify/:username', verifyEmail);

// Google OAuth callback
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', {
  successRedirect: 'http://localhost:3000/dashboard',
  failureRedirect: 'http://localhost:3000/login',
}));

module.exports = router;

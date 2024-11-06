const bcrypt = require('bcryptjs');
const db = require('../db');
const nodemailer = require('nodemailer');

const signup = (req, res) => {
  const { username, first_name, last_name, email, password } = req.body;
  if (!username || !first_name || !last_name || !email || !password) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    if (results.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ message: 'Error hashing password' });
      }
      db.query(
        'INSERT INTO users (username, first_name, last_name, email, password, verified) VALUES (?, ?, ?, ?, ?, ?)',
        [username, first_name, last_name, email, hash, false],
        (err, result) => {
          if (err) {
            return res.status(500).json({ message: 'Database error' });
          }
          sendVerificationEmail(username, email);
          res.status(201).json({ message: 'User registered successfully, please check your email for verification.' });
        }
      );
    });
  });
};
const sendVerificationEmail = (username, email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Confirm your NodeTkasser account',
    html: `
  <div style="width: 100%; font-family: Arial, sans-serif;text-align: left;">
  <div style="display: grid; grid-template-columns: 0.3fr 1fr;align-self: center;">
    <img src="https://fonts.gstatic.com/s/e/notoemoji/15.1/1f389/32.png" alt="celebration emoji" style="width: 35px;height: 35px;"/>
    <h5 style="color: #333; font-size: 28px; font-weight: 700;">Welcome to NodeTkasser!</h5>
  </div>

  <!-- Email message wrapped in a div -->
  <div>
  <h4>We have created a new account under your email:</h4><br></br>
    <span style="color: #1155cc; text-decoration: underline;">${email}</span>
  </div>

  <p>But before you join any game, we need to confirm that you're a real person.</p>
  
  <a href="http://localhost:4000/auth/verify/${username}" style="text-decoration: none;">
    <button style="background-color: #2031ab; color: #fff; border-radius: 6px; font-weight: 500; padding: 13px 20px; border: none; cursor: pointer;">
      Yes, I am a real person
    </button>
  </a>
</div>

  
    `,
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Error sending verification email:', error);
    }
    console.log('Verification email sent:', info.response);
  });
};

const verifyEmail = (req, res) => {
  const { username } = req.params;

  db.query('UPDATE users SET verified = true WHERE username = ?', [username], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Email verified successfully!' });
  });
};

module.exports = { signup, verifyEmail };

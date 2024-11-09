import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { sendEmail } from '../mailer.js'; 
import crypto from 'crypto'; 
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';


dotenv.config();

const prisma = new PrismaClient();

// Helper function to generate a verification token
const generateVerificationToken = () => {
  return crypto.randomBytes(20).toString('hex');
};

// Helper function to generate password reset token
const generatePasswordResetToken = () => {
  return crypto.randomBytes(20).toString('hex');
};

// Register User
export const signup = async (req, res) => {
  const { email, password, username, first_name, last_name } = req.body;

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Generate a verification token
  const verificationToken = generateVerificationToken();

  try {
    // Create new user in the database
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
        first_name,
        last_name,
        verificationToken,  // Store token in database
        tokenExpiry: new Date(Date.now() + 3600000), // Token expires in 1 hour
      },
    });
    // Send verification email
    const verificationLink = `${process.env.BACKEND_URL}/api/auth/verify-email?token=${verificationToken}&email=${email}`;
    const subject = 'Verify Your Email Address';
    const text = `Click on the following link to verify your email address: ${verificationLink}`;
    const html = `<p>Click on the following link to verify your email address:</p><a href="${verificationLink}">${verificationLink}</a>`;

    await sendEmail(email, subject, text, html);
    return res.status(201).json({ message: 'User created, verification email sent' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error creating user' });
  }
};


// Verify Email
export const verifyEmail = async (req, res) => {
  const { token, email } = req.query;

  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(400).send('User not found');
  }

  // Check token matches and is not expired
  if (user.verificationToken !== token) {
    return res.status(400).send('Invalid token');
  }

  if (user.tokenExpiry < new Date()) {
    return res.status(400).send('Token expired');
  }

  try {
    // Change user status to verified
    await prisma.user.update({
      where: { email },
      data: {
        isVerified: true,
        verificationToken: null,
        tokenExpiry: null,
      },
    });

    // Redirect the user to the frontend login page
    return res.redirect(`${process.env.FRONTEND_URL}/users/login`);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error verifying email');
  }
};

// Forgot Password
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(400).json({ error: 'User not found' });
  }

  // Generate password reset token
  const resetToken = generatePasswordResetToken();

  try {
    // Store the reset token and expiry date (1 hour)
    await prisma.user.update({
      where: { email },
      data: {
        verificationToken: resetToken,  // Reuse verificationToken for reset
        tokenExpiry: new Date(Date.now() + 3600000),  // 1 hour expiry
      },
    });

    // Send password reset email
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}&email=${email}`;
    const subject = 'Password Reset Request';
    const text = `Click on the following link to reset your password: ${resetLink}`;
    const html = `<p>Click on the following link to reset your password:</p><a href="${resetLink}">${resetLink}</a>`;

    await sendEmail(email, subject, text, html);

    return res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error sending password reset email' });
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  const { token, email, newPassword } = req.body;

  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(400).json({ error: 'User not found' });
  }

  // Check if the token matches and is not expired
  if (user.verificationToken !== token) {
    return res.status(400).json({ error: 'Invalid token' });
  }

  if (user.tokenExpiry < new Date()) {
    return res.status(400).json({ error: 'Token expired' });
  }

  // Hash new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  try {
    // Update password and remove reset token
    await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
        verificationToken: null,  // Remove reset token after use
        tokenExpiry: null,  // Clear token expiry
      },
    });

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error resetting password' });
  }
};

// Login hjnl
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Check if password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Logout functionality
export const logout = (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
};

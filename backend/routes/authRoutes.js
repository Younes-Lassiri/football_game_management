const express = require('express');
const router = express.Router();
const { signup, verifyEmail } = require('../controllers/authController'); // Ensure this path is correct

router.post('/signup', signup); // Ensure signup is defined in the controller
router.get('/verify/:username', verifyEmail); // Ensure verifyEmail is defined in the controller

module.exports = router; // Export the router

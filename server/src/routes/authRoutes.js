const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Authentication routes
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/verify-token', authController.verifyToken);
router.post('/logout', authController.logout);

module.exports = router; 
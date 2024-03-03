const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route pour créer un nouveau compte utilisateur
router.post('/signup', authController.signup);

// Route pour connecter un utilisateur
router.post('/login', authController.login);

// Route pour déconnecter un utilisateur
router.get('/logout', authController.logout);

module.exports = router;

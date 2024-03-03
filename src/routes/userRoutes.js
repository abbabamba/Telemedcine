const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route pour créer un nouvel utilisateur
router.post('/users', userController.createUser);

// Route pour récupérer tous les utilisateurs
router.get('/users', userController.getUsers);

// Route pour récupérer un utilisateur par son ID
router.get('/users/:id', userController.getUserById);

// Route pour mettre à jour un utilisateur par son ID
router.put('/users/:id', userController.updateUser);

// Route pour supprimer un utilisateur par son ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Route pour créer un nouveau médecin
router.post('/', doctorController.createDoctor);

// Route pour récupérer tous les médecins
router.get('/', doctorController.getDoctors);

// Route pour récupérer un médecin par son ID
router.get('/:id', doctorController.getDoctorById);

// Route pour mettre à jour un médecin par son ID
router.put('/:id', doctorController.updateDoctor);

// Route pour supprimer un médecin par son ID
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;

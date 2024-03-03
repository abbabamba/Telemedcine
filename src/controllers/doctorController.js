// Importer le modèle Doctor
const Doctor = require('../models/doctor');

// Fonction pour créer un nouveau médecin
exports.createDoctor = async (req, res) => {
    try {
        // Extraire les données du corps de la requête
        const { nom_complet, numero_inscription, specialite, photo_profil, disponibilite, tarifs_consultation, notes_avis } = req.body;

        // Créer un nouveau médecin dans la base de données
        const nouveauDoctor = await Doctor.create({
            nom_complet,
            numero_inscription,
            specialite,
            photo_profil,
            disponibilite,
            tarifs_consultation,
            notes_avis
        });

        // Envoyer une réponse avec le nouveau médecin créé
        res.status(201).json({ doctor: nouveauDoctor });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création du médecin." });
    }
};

// Fonction pour récupérer tous les médecins
exports.getDoctors = async (req, res) => {
    try {
        // Récupérer tous les médecins de la base de données
        const medecins = await Doctor.findAll();

        // Envoyer une réponse avec la liste des médecins
        res.status(200).json({ doctors: medecins });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des médecins." });
    }
};

// Fonction pour récupérer un médecin par son ID
exports.getDoctorById = async (req, res) => {
    try {
        // Récupérer l'ID du médecin à partir des paramètres de la requête
        const doctorId = req.params.id;

        // Récupérer le médecin de la base de données par son ID
        const medecin = await Doctor.findByPk(doctorId);

        // Vérifier si le médecin existe
        if (!medecin) {
            return res.status(404).json({ message: "Le médecin n'a pas été trouvé." });
        }

        // Envoyer une réponse avec le médecin récupéré
        res.status(200).json({ doctor: medecin });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du médecin." });
    }
};

// Fonction pour mettre à jour un médecin
exports.updateDoctor = async (req, res) => {
    try {
        // Récupérer l'ID du médecin à partir des paramètres de la requête
        const doctorId = req.params.id;

        // Extraire les données du corps de la requête
        const { nom_complet, numero_inscription, specialite, photo_profil, disponibilite, tarifs_consultation, notes_avis } = req.body;

        // Récupérer le médecin de la base de données par son ID
        const medecin = await Doctor.findByPk(doctorId);

        // Vérifier si le médecin existe
        if (!medecin) {
            return res.status(404).json({ message: "Le médecin n'a pas été trouvé." });
        }

        // Mettre à jour les données du médecin
        medecin.nom_complet = nom_complet;
        medecin.numero_inscription = numero_inscription;
        medecin.specialite = specialite;
        medecin.photo_profil = photo_profil;
        medecin.disponibilite = disponibilite;
        medecin.tarifs_consultation = tarifs_consultation;
        medecin.notes_avis = notes_avis;

        // Sauvegarder les modifications dans la base de données
        await medecin.save();

        // Envoyer une réponse avec le médecin mis à jour
        res.status(200).json({ doctor: medecin });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour du médecin." });
    }
};

// Fonction pour supprimer un médecin
exports.deleteDoctor = async (req, res) => {
    try {
        // Récupérer l'ID du médecin à partir des paramètres de la requête
        const doctorId = req.params.id;

        // Supprimer le médecin de la base de données par son ID
        await Doctor.destroy({ where: { id: doctorId } });

        // Envoyer une réponse de succès
        res.status(200).json({ message: "Le médecin a été supprimé avec succès." });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression du médecin." });
    }
};

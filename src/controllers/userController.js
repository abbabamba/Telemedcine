// userController.js

// Importer le modèle User
const User = require('../models/user');

// Fonction pour créer un nouvel utilisateur
exports.createUser = async (req, res) => {
    try {
        // Extraire les données du corps de la requête
        const { nom_complet, date_naissance, sexe, telephone, email, adresse_postale, photo_profil, historique_medical } = req.body;

        // Créer un nouvel utilisateur dans la base de données
        const nouvelUtilisateur = await User.create({
            nom_complet,
            date_naissance,
            sexe,
            telephone,
            email,
            adresse_postale,
            photo_profil,
            historique_medical
        });

        // Envoyer une réponse avec le nouvel utilisateur créé
        res.status(201).json({ user: nouvelUtilisateur });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'utilisateur." });
    }
};

// Fonction pour récupérer tous les utilisateurs
exports.getUsers = async (req, res) => {
    try {
        // Récupérer tous les utilisateurs de la base de données
        const utilisateurs = await User.findAll();

        // Envoyer une réponse avec la liste des utilisateurs
        res.status(200).json({ users: utilisateurs });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des utilisateurs." });
    }
};

// Fonction pour récupérer un utilisateur par son ID
exports.getUserById = async (req, res) => {
    try {
        // Récupérer l'ID de l'utilisateur à partir des paramètres de la requête
        const userId = req.params.id;

        // Récupérer l'utilisateur de la base de données par son ID
        const utilisateur = await User.findByPk(userId);

        // Vérifier si l'utilisateur existe
        if (!utilisateur) {
            return res.status(404).json({ message: "L'utilisateur n'a pas été trouvé." });
        }

        // Envoyer une réponse avec l'utilisateur récupéré
        res.status(200).json({ user: utilisateur });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'utilisateur." });
    }
};

// Fonction pour mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
    try {
        // Récupérer l'ID de l'utilisateur à partir des paramètres de la requête
        const userId = req.params.id;

        // Extraire les données du corps de la requête
        const { nom_complet, date_naissance, sexe, telephone, email, adresse_postale, photo_profil, historique_medical } = req.body;

        // Récupérer l'utilisateur de la base de données par son ID
        const utilisateur = await User.findByPk(userId);

        // Vérifier si l'utilisateur existe
        if (!utilisateur) {
            return res.status(404).json({ message: "L'utilisateur n'a pas été trouvé." });
        }

        // Mettre à jour les données de l'utilisateur
        utilisateur.nom_complet = nom_complet;
        utilisateur.date_naissance = date_naissance;
        utilisateur.sexe = sexe;
        utilisateur.telephone = telephone;
        utilisateur.email = email;
        utilisateur.adresse_postale = adresse_postale;
        utilisateur.photo_profil = photo_profil;
        utilisateur.historique_medical = historique_medical;

        // Sauvegarder les modifications dans la base de données
        await utilisateur.save();

        // Envoyer une réponse avec l'utilisateur mis à jour
        res.status(200).json({ user: utilisateur });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'utilisateur." });
    }
};

// Fonction pour supprimer un utilisateur
exports.deleteUser = async (req, res) => {
    try {
        // Récupérer l'ID de l'utilisateur à partir des paramètres de la requête
        const userId = req.params.id;

        // Supprimer l'utilisateur de la base de données par son ID
        await User.destroy({ where: { id: userId } });

        // Envoyer une réponse de succès
        res.status(200).json({ message: "L'utilisateur a été supprimé avec succès." });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'utilisateur." });
    }
};

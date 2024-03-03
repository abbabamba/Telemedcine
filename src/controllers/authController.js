// Importer le modèle d'authentification
const Auth = require('../models/auth');

// Fonction pour créer un nouveau compte utilisateur
exports.signup = async (req, res) => {
    try {
        // Extraire les données du corps de la requête
        const { email, mot_de_passe, type_compte } = req.body;

        // Créer un nouveau compte utilisateur dans la base de données
        const nouveauCompte = await Auth.create({
            email,
            mot_de_passe,
            type_compte
        });

        // Envoyer une réponse avec le nouveau compte créé
        res.status(201).json({ compte: nouveauCompte });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création du compte utilisateur." });
    }
};

// Fonction pour connecter un utilisateur
exports.login = async (req, res) => {
    try {
        // Extraire les données du corps de la requête
        const { email, mot_de_passe } = req.body;

        // Vérifier si l'utilisateur existe dans la base de données
        const utilisateur = await Auth.findOne({ where: { email } });

        if (!utilisateur) {
            return res.status(401).json({ message: "L'email ou le mot de passe est incorrect." });
        }

        // Vérifier si le mot de passe est correct
        const motDePasseCorrect = (mot_de_passe === utilisateur.mot_de_passe);

        if (!motDePasseCorrect) {
            return res.status(401).json({ message: "L'email ou le mot de passe est incorrect." });
        }

        // Si l'authentification réussit, créer un jeton d'authentification (JWT) et l'envoyer dans la réponse
        const jeton = "JWT"; // Exemple de jeton, vous devriez générer un jeton sécurisé avec une bibliothèque appropriée

        res.status(200).json({ jeton });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la connexion." });
    }
};

// Fonction pour déconnecter un utilisateur
exports.logout = async (req, res) => {
    try {
        // Implémentez la déconnexion de l'utilisateur ici, si nécessaire

        // Envoyer une réponse de succès
        res.status(200).json({ message: "Vous avez été déconnecté avec succès." });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la déconnexion." });
    }
};

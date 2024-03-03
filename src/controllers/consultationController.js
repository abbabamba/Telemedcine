// Importer le modèle de consultation médicale
const Consultation = require('../models/consultation');

// Fonction pour créer une nouvelle consultation médicale
exports.createConsultation = async (req, res) => {
    try {
        // Extraire les données de la requête HTTP
        const { date_heure, motif_consultation, compte_rendu, prescription, statut, patient_id, medecin_id } = req.body;

        // Créer une nouvelle consultation médicale dans la base de données
        const nouvelleConsultation = await Consultation.create({
            date_heure,
            motif_consultation,
            compte_rendu,
            prescription,
            statut,
            patient_id,
            medecin_id
        });

        // Envoyer une réponse avec la nouvelle consultation médicale créée
        res.status(201).json({ consultation: nouvelleConsultation });
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de la consultation médicale." });
    }
};

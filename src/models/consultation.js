// consultation.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Consultation = sequelize.define('Consultation', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    date_heure: {
        type: DataTypes.DATE,
        allowNull: false
    },
    motif_consultation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    compte_rendu: {
        type: DataTypes.TEXT
    },
    prescription: {
        type: DataTypes.JSON
    },
    statut: {
        type: DataTypes.ENUM('en cours', 'terminée', 'annulée'),
        allowNull: false
    }
});

module.exports = Consultation;

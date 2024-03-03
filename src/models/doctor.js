// doctor.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Doctor = sequelize.define('Doctor', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nom_complet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_inscription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    specialite: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo_profil: {
        type: DataTypes.STRING
    },
    disponibilite: {
        type: DataTypes.JSON
    },
    tarifs_consultation: {
        type: DataTypes.JSON
    },
    notes_avis: {
        type: DataTypes.JSON
    }
});

module.exports = Doctor;

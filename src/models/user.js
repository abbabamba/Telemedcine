// user.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nom_complet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_naissance: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sexe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    adresse_postale: {
        type: DataTypes.STRING
    },
    photo_profil: {
        type: DataTypes.STRING
    },
    historique_medical: {
        type: DataTypes.JSON
    }
});

module.exports = User;

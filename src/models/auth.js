// auth.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Auth = sequelize.define('Auth', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    mot_de_passe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type_compte: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jeton_authentification: {
        type: DataTypes.STRING
    }
});

module.exports = Auth;

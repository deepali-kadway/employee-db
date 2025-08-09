import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config.js';

const Department = sequelize.define(
    'Department',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        department_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
);

export default Department; // Export the Department model
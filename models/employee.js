import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config.js';

const Employee = sequelize.define(
    'Employee',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        employee_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // departmentID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'department',
        //         key: 'id'
        //     }
        // }
    }
);

export default Employee; // Export the Employee model
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config.js';
import Department from './department.js';

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

// Define Associations (Relationships)
// One Department has many Employees
Department.hasMany(Employee, {
    foreignKey: 'departmentId', // departmentId references id(department table) as Foreign key in Employee table
    onDelete: 'CASCADE'         // Delete employees when department is deleted
});

export default Employee; // Export the Employee model
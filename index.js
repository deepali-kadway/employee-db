import express from 'express';
import sequelize from './config.js';
import Employee from './models/employee.js';
import Department from './models/department.js';

const app = express();

//Test the database connection
sequelize.authenticate().then(() => {
    console.log('Database connection established successfully.');
}).catch((error) => {
    console.log('Unable to connect to the database:', error.message);
});

// Define Associations (Relationships)
// One Department has many Employees
Department.hasMany(Employee, {
    foreignKey: 'departmentId', // departmentId references id(department table) as Foreign key in Employee table
    onDelete: 'CASCADE'         // Delete employees when department is deleted
});


// Sync Models to Database and create tables if they don't exist
sequelize.sync() 
    .then(() => {
        console.log('Database tables created successfully!');
    })
    .catch((error) => {
        console.log('Error creating database tables:', error.message);
    });

// Listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

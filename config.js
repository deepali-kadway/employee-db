import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// initialiting Sequelize constructor
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
   // defining Options object
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

export default sequelize; // exporting the sequelize connection object
import { Sequelize } from "sequelize";

const db = new Sequelize('alquimj8_oky','alquimj8_oky','2025Oky@',{
    host: 'alquimistappbackend.com',
    dialect: 'mysql',
});

export default db;


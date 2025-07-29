"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('alquimj8_oky', 'alquimj8_oky', '2025Oky@', {
    host: 'alquimistappbackend.com',
    dialect: 'mysql',
});
exports.default = db;
//# sourceMappingURL=connection.js.map
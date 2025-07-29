"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Producto = connection_1.default.define('Producto', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    img: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1
    },
    usuarioId: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'productos'
});
exports.default = Producto;
//# sourceMappingURL=producto.js.map
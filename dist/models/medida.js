"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Medida = connection_1.default.define('Medida', {
    titulo: {
        type: sequelize_1.DataTypes.STRING
    },
    multiplicador: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'medida'
});
exports.default = Medida;
//# sourceMappingURL=medida.js.map
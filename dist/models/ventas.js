"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Ventas = connection_1.default.define('Ventas', {
    id_cliente: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_sucursal: {
        type: sequelize_1.DataTypes.INTEGER
    },
    total: {
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
    tableName: 'ventas'
});
exports.default = Ventas;
//# sourceMappingURL=ventas.js.map
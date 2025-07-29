"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ProductoCombo = connection_1.default.define('ProductoCombo', {
    id_combo: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_producto: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_medida: {
        type: sequelize_1.DataTypes.INTEGER
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER
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
    tableName: 'producto_combo'
});
exports.default = ProductoCombo;
//# sourceMappingURL=productocombo.js.map
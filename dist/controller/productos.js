"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.puttProducto = exports.postProducto = exports.getProducto = exports.getProductos = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const sequelize_1 = require("sequelize");
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield producto_1.default.findAll({
        where: {
            estado: {
                [sequelize_1.Op.ne]: 0 // Excluye los productos con estado 0
            },
        }
    });
    res.json({ productos });
});
exports.getProductos = getProductos;
const getProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const productoid = yield ((_a = producto_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query('select * from productos where id = :id ', {
        replacements: {
            id: `${id}`,
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (productoid != undefined) {
        if (productoid.length > 0) {
            res.json({ productoid });
        }
        else {
            res.json({
                msg: 'PRODUCTO NO ENCONTRADO ',
            });
        }
    }
});
exports.getProducto = getProducto;
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const producto = producto_1.default.build(body);
        yield producto.save();
        res.json({
            producto
        });
    }
    catch (error) {
        res.json({
            msg: 'ERRO AL INCERTAR ',
            body
        });
    }
});
exports.postProducto = postProducto;
const puttProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const producto = yield producto_1.default.findByPk(id);
        if (producto) {
            yield producto.update(body);
            res.json({
                producto
            });
        }
        else {
            res.json({
                msg: 'ERRO AL MODIFICAR ',
                body
            });
        }
    }
    catch (error) {
        res.json({
            msg: 'ERRO AL INCERTAR ',
            body
        });
    }
});
exports.puttProducto = puttProducto;
//# sourceMappingURL=productos.js.map
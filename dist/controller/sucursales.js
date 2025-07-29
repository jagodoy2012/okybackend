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
exports.puttSucursal = exports.puttusuarioSucursal = exports.postSucursal = exports.postusuarioSucursal = exports.getSucursal = exports.getusuarioSucursal = exports.getSucursales = exports.getusuarioSucursales = void 0;
const sucursal_1 = __importDefault(require("../models/sucursal"));
const sequelize_1 = require("sequelize");
const usuariosucursal_1 = __importDefault(require("../models/usuariosucursal"));
const getusuarioSucursales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioSucursales = yield usuariosucursal_1.default.findAll();
    res.json({ usuarioSucursales });
});
exports.getusuarioSucursales = getusuarioSucursales;
const getSucursales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sucursales = yield sucursal_1.default.findAll();
    res.json({ sucursales });
});
exports.getSucursales = getSucursales;
const getusuarioSucursal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const usuariosucursal = yield ((_a = usuariosucursal_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query('select * from usuario_sucursal where id = :id ', {
        replacements: {
            id: `${id}`,
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (usuariosucursal != undefined) {
        if (usuariosucursal.length > 0) {
            res.json({ usuariosucursal });
        }
        else {
            res.json({
                msg: 'SUCURSAL NO ENCONTRADO ',
            });
        }
    }
});
exports.getusuarioSucursal = getusuarioSucursal;
const getSucursal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { id } = req.params;
    const sucursalid = yield ((_b = sucursal_1.default.sequelize) === null || _b === void 0 ? void 0 : _b.query('select * from sucursales where id = :id ', {
        replacements: {
            id: `${id}`,
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (sucursalid != undefined) {
        if (sucursalid.length > 0) {
            res.json({ sucursalid });
        }
        else {
            res.json({
                msg: 'SUCURSAL NO ENCONTRADO ',
            });
        }
    }
});
exports.getSucursal = getSucursal;
const postusuarioSucursal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log("body_" + JSON.stringify(body));
    try {
        const usuariosucursal = usuariosucursal_1.default.build(body);
        yield usuariosucursal.save();
        res.json({
            usuariosucursal
        });
    }
    catch (error) {
        res.json({
            msg: 'ERRO AL SUCURSAL ',
            body
        });
    }
});
exports.postusuarioSucursal = postusuarioSucursal;
const postSucursal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const sucursal = sucursal_1.default.build(body);
        yield sucursal.save();
        res.json({
            sucursal
        });
    }
    catch (error) {
        res.json({
            msg: 'ERRO AL SUCURSAL ',
            body
        });
    }
});
exports.postSucursal = postSucursal;
const puttusuarioSucursal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuariosucursal = yield usuariosucursal_1.default.findByPk(id);
        if (usuariosucursal) {
            yield usuariosucursal.update(body);
            res.json({
                usuariosucursal
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
            msg: 'ERRO AL MODIFICAR ',
            body
        });
    }
});
exports.puttusuarioSucursal = puttusuarioSucursal;
const puttSucursal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const sucursal = yield sucursal_1.default.findByPk(id);
        if (sucursal) {
            yield sucursal.update(body);
            res.json({
                sucursal
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
            msg: 'ERRO AL MODIFICAR ',
            body
        });
    }
});
exports.puttSucursal = puttSucursal;
//# sourceMappingURL=sucursales.js.map
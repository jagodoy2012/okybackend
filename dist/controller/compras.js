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
exports.puttMedida = exports.puttComprasTipo = exports.puttCompras = exports.postMedida = exports.postCompraTipo = exports.postCompra = exports.getMedida = exports.getCompraTipo = exports.getCompra = exports.getMedidas = exports.getComprasTipo = exports.getCompras = void 0;
const sequelize_1 = require("sequelize");
const compras_1 = __importDefault(require("../models/compras"));
const comprastipo_1 = __importDefault(require("../models/comprastipo"));
const medida_1 = __importDefault(require("../models/medida"));
const getCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const compras = yield compras_1.default.findAll();
    res.json({ compras });
});
exports.getCompras = getCompras;
const getComprasTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const compras = yield comprastipo_1.default.findAll();
    res.json({ compras });
});
exports.getComprasTipo = getComprasTipo;
const getMedidas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const medida = yield medida_1.default.findAll();
    res.json({ medida });
});
exports.getMedidas = getMedidas;
///////////////////////////
const getCompra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const compraid = yield ((_a = compras_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query('select * from productos_bitacora where id = :id ', {
        replacements: {
            id: `${id}`,
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (compraid != undefined) {
        if (compraid.length > 0) {
            res.json({ compraid });
        }
        else {
            res.json({
                msg: 'USUARIO NO ENCONTRADO ',
            });
        }
    }
});
exports.getCompra = getCompra;
const getCompraTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { id } = req.params;
    const compraid = yield ((_b = comprastipo_1.default.sequelize) === null || _b === void 0 ? void 0 : _b.query('select * from compras_tipo where id = :id ', {
        replacements: {
            id: `${id}`,
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (compraid != undefined) {
        if (compraid.length > 0) {
            res.json({ compraid });
        }
        else {
            res.json({
                msg: 'USUARIO NO ENCONTRADO ',
            });
        }
    }
});
exports.getCompraTipo = getCompraTipo;
const getMedida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const { id } = req.params;
    const medidaid = yield ((_c = medida_1.default.sequelize) === null || _c === void 0 ? void 0 : _c.query('select * from medida where id = :id ', {
        replacements: {
            id: `${id}`,
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (medidaid != undefined) {
        if (medidaid.length > 0) {
            res.json({ medidaid });
        }
        else {
            res.json({
                msg: 'USUARIO NO ENCONTRADO ',
            });
        }
    }
});
exports.getMedida = getMedida;
//////////////////////////////
const postCompra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const compras = compras_1.default.build(body);
        yield compras.save();
        res.json({
            compras
        });
    }
    catch (error) {
        res.json({
            msg: 'ERRO AL INCERTAR ',
            body
        });
    }
});
exports.postCompra = postCompra;
const postCompraTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const compras = comprastipo_1.default.build(body);
        yield compras.save();
        res.json({
            compras
        });
    }
    catch (error) {
        res.json({
            msg: 'ERRO AL INCERTAR ',
            body
        });
    }
});
exports.postCompraTipo = postCompraTipo;
const postMedida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const medida = medida_1.default.build(body);
        yield medida.save();
        res.json({
            medida
        });
    }
    catch (error) {
        res.json({
            msg: 'ERRO AL INCERTAR ',
            body
        });
    }
});
exports.postMedida = postMedida;
//////////////////////////////////
const puttCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const compras = yield compras_1.default.findByPk(id);
        if (compras) {
            yield compras.update(body);
            res.json({
                compras
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
exports.puttCompras = puttCompras;
const puttComprasTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const compras = yield comprastipo_1.default.findByPk(id);
        if (compras) {
            yield compras.update(body);
            res.json({
                compras
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
exports.puttComprasTipo = puttComprasTipo;
const puttMedida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const medida = yield medida_1.default.findByPk(id);
        if (medida) {
            yield medida.update(body);
            res.json({
                medida
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
exports.puttMedida = puttMedida;
//# sourceMappingURL=compras.js.map
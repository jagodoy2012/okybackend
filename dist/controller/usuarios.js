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
exports.puttUsurio = exports.postUsurio = exports.getUsurio = exports.getClientes = exports.getUsurios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const sequelize_1 = require("sequelize");
const clientes_1 = __importDefault(require("../models/clientes"));
const getUsurios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
});
exports.getUsurios = getUsurios;
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientes = yield clientes_1.default.findAll();
    res.json({ clientes });
});
exports.getClientes = getClientes;
////////////////////////
const getUsurio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const usuariosid = yield ((_a = usuario_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query('select * from usuarios where id = :id ', {
        replacements: {
            id: `${id}`,
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (usuariosid != undefined) {
        if (usuariosid.length > 0) {
            res.json({ usuariosid });
        }
        else {
            res.json({
                msg: 'USUARIO NO ENCONTRADO ',
            });
        }
    }
});
exports.getUsurio = getUsurio;
const postUsurio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const usuario = usuario_1.default.build(body);
        yield usuario.save();
        res.json({
            usuario
        });
    }
    catch (error) {
        res.json({
            msg: 'ERRO AL INCERTAR ',
            body
        });
    }
});
exports.postUsurio = postUsurio;
const puttUsurio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (usuario) {
            yield usuario.update(body);
            res.json({
                usuario
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
exports.puttUsurio = puttUsurio;
//# sourceMappingURL=usuarios.js.map
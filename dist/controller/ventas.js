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
exports.puttVentaDetalle = exports.puttVenta = exports.postVentaDetalle = exports.postVenta = exports.getVentaDetalles = exports.getVentaDetalle = exports.getVenta = exports.getVentaFecha = exports.getVentaTipo = exports.getVentasDetalle = exports.getVentas = void 0;
const ventas_1 = __importDefault(require("../models/ventas"));
const sequelize_1 = require("sequelize");
const ventasdetalle_1 = __importDefault(require("../models/ventasdetalle"));
const getVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const ventaid = yield ((_a = ventasdetalle_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query('select v.id, c.nombre, u.nombres, v.total, v.fecha from ventas as v INNER JOIN clientes as c ON c.id = v.id_cliente INNER JOIN usuarios as u ON	 u.id = v.id_usuario where v.estado = 1', {
        replacements: {},
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (ventaid != undefined) {
        if (ventaid.length > 0) {
            res.json({ ventaid });
        }
        else {
            res.json([]);
        }
    }
});
exports.getVentas = getVentas;
const getVentasDetalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ventas = yield ventasdetalle_1.default.findAll();
    res.json({ ventas });
});
exports.getVentasDetalle = getVentasDetalle;
///////////////////// tipo de ventas /////
const getVentaTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { id } = req.params;
    const ventaid = yield ((_b = ventasdetalle_1.default.sequelize) === null || _b === void 0 ? void 0 : _b.query('select vd.id_ventas as id, p.titulo, vd.cantidad, vd.valor from venta_detalle AS vd INNER JOIN productos AS p ON vd.id_producto = p.id  where p.id_medida =:id ', {
        replacements: {
            id: `${id}`,
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (ventaid != undefined) {
        if (ventaid.length > 0) {
            res.json({ ventaid });
        }
        else {
            res.json([]);
        }
    }
});
exports.getVentaTipo = getVentaTipo;
//////////////////// ventas por rango de fecha //////////////////////
const getVentaFecha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const { fech1, fech2 } = req.params;
    const ventaid = yield ((_c = ventasdetalle_1.default.sequelize) === null || _c === void 0 ? void 0 : _c.query('SELECT V.id, V.fecha, VD.cantidad, VD.valor, VD.id_medida,P.titulo,C.nombre FROM ventas AS V INNER JOIN venta_detalle AS VD ON VD.id_ventas = V.id INNER JOIN productos AS P ON P.id = VD.id_producto INNER JOIN clientes AS C ON V.id_cliente = C.id WHERE V.fecha BETWEEN :fech1 AND :fech2', {
        replacements: {
            fech1: `${fech1}`,
            fech2: `${fech2}`
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (ventaid != undefined) {
        if (ventaid.length > 0) {
            res.json({ ventaid });
        }
        else {
            res.json({
                msg: 'USUARIO NO ENCONTRADO ',
            });
        }
    }
});
exports.getVentaFecha = getVentaFecha;
////////////////////
const getVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const { id } = req.params;
    const ventaid = yield ((_d = ventas_1.default.sequelize) === null || _d === void 0 ? void 0 : _d.query('select * from ventas where id = :id ', {
        replacements: {
            id: `${id}`,
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (ventaid != undefined) {
        if (ventaid.length > 0) {
            res.json({ ventaid });
        }
        else {
            res.json({
                msg: 'USUARIO NO ENCONTRADO ',
            });
        }
    }
});
exports.getVenta = getVenta;
const getVentaDetalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    const { id } = req.params;
    const ventaid = yield ((_e = ventasdetalle_1.default.sequelize) === null || _e === void 0 ? void 0 : _e.query('select * from venta_detalle where id = :id ', {
        replacements: {
            id: `${id}`,
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (ventaid != undefined) {
        if (ventaid.length > 0) {
            res.json({ ventaid });
        }
        else {
            res.json({
                msg: 'USUARIO NO ENCONTRADO ',
            });
        }
    }
});
exports.getVentaDetalle = getVentaDetalle;
const getVentaDetalles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    const { id } = req.params;
    const ventaid = yield ((_f = ventasdetalle_1.default.sequelize) === null || _f === void 0 ? void 0 : _f.query('select vd.id, p.titulo, vd.valor, vd.cantidad from venta_detalle as vd INNER JOIN productos as p ON vd.id_producto = p.id where vd.id_ventas = :id  and vd.estado = 1', {
        replacements: {
            id: `${id}`,
        },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (ventaid != undefined) {
        if (ventaid.length > 0) {
            res.json({ ventaid });
        }
        else {
            res.json({
                msg: 'USUARIO NO ENCONTRADO ',
            });
        }
    }
});
exports.getVentaDetalles = getVentaDetalles;
///////////////////////
const postVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const venta = ventas_1.default.build(body);
        yield venta.save();
        res.json({
            venta
        });
    }
    catch (error) {
        res.json({
            msg: 'ERRO AL INCERTAR ',
            body
        });
    }
});
exports.postVenta = postVenta;
const postVentaDetalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const venta = ventasdetalle_1.default.build(body);
        yield venta.save();
        res.json({
            venta
        });
    }
    catch (error) {
        res.json({
            msg: 'ERRO AL INCERTAR ',
            body
        });
    }
});
exports.postVentaDetalle = postVentaDetalle;
////////////////////
const puttVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const ventas = yield ventas_1.default.findByPk(id);
        if (ventas) {
            yield ventas.update(body);
            res.json({
                ventas
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
exports.puttVenta = puttVenta;
const puttVentaDetalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const ventas = yield ventasdetalle_1.default.findByPk(id);
        if (ventas) {
            yield ventas.update(body);
            res.json({
                ventas
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
exports.puttVentaDetalle = puttVentaDetalle;
//# sourceMappingURL=ventas.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventas_1 = require("../controller/ventas");
const router = (0, express_1.Router)();
router.get('/', ventas_1.getVentas);
router.get('/detalle', ventas_1.getVentasDetalle);
router.get('/fecha/:fech1/:fech2', ventas_1.getVentaFecha);
router.get('/detalle/:id', ventas_1.getVentaDetalle);
router.get('/detalles/:id', ventas_1.getVentaDetalles);
router.get('/tipo/:id', ventas_1.getVentaTipo);
router.get('/:id', ventas_1.getVenta);
router.post('/detalle', ventas_1.postVentaDetalle);
router.post('/', ventas_1.postVenta);
router.put('/detalle/:id', ventas_1.puttVentaDetalle);
router.put('/:id', ventas_1.puttVenta);
exports.default = router;
//# sourceMappingURL=ventas.js.map
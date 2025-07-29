"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sucursales_1 = require("../controller/sucursales");
const router = (0, express_1.Router)();
router.get('/', sucursales_1.getSucursales);
router.get('/usuarioSucursal', sucursales_1.getusuarioSucursales);
router.get('/usuarioSucursal/:id', sucursales_1.getusuarioSucursales);
router.get('/:id', sucursales_1.getSucursal);
router.post('/', sucursales_1.postSucursal);
router.post('/usuarioSucursal', sucursales_1.postusuarioSucursal);
router.put('/usuarioSucursal/:id', sucursales_1.puttusuarioSucursal);
router.put('/:id', sucursales_1.puttSucursal);
exports.default = router;
//# sourceMappingURL=sucursales.js.map
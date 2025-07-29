"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compras_1 = require("../controller/compras");
const router = (0, express_1.Router)();
router.get('/', compras_1.getCompras);
router.get('/tipo', compras_1.getComprasTipo);
router.get('/medida', compras_1.getMedidas);
router.get('/tipo/:id', compras_1.getCompraTipo);
router.get('/medida/:id', compras_1.getMedida);
router.get('/:id', compras_1.getCompra);
router.post('/', compras_1.postCompra);
router.post('/tipo', compras_1.postCompraTipo);
router.post('/medida', compras_1.postMedida);
router.put('/tipo/:id', compras_1.puttComprasTipo);
router.put('/medida/:id', compras_1.puttMedida);
router.put('/:id', compras_1.puttCompras);
exports.default = router;
//# sourceMappingURL=compras.js.map
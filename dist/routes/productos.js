"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controller/productos");
const router = (0, express_1.Router)();
router.get('/', productos_1.getProductos);
router.get('/:id', productos_1.getProducto);
router.post('/', productos_1.postProducto);
router.put('/:id', productos_1.puttProducto);
exports.default = router;
//# sourceMappingURL=productos.js.map
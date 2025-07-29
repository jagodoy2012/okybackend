"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controller/usuarios");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsurios);
router.get('/clientes', usuarios_1.getClientes);
router.get('/:id', usuarios_1.getUsurio);
router.post('/', usuarios_1.postUsurio);
router.put('/:id', usuarios_1.puttUsurio);
exports.default = router;
//# sourceMappingURL=usuario.js.map
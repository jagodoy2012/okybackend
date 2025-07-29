import { Router } from "express";
import { getProducto, getProductos, postProducto, puttProducto } from "../controller/productos";


const router = Router();

router.get('/',getProductos);
router.get('/:id',getProducto);

router.post('/',postProducto);

router.put('/:id',puttProducto);

export default   router;
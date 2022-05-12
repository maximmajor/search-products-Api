import { Router } from 'express';
const router = Router();
import { getAllProducts, getProductBySpecifications, orderPriceInDesc, orderPriceInAsc } from "../controller/products"


router.get('/', getAllProducts)
router.get('/spec', getProductBySpecifications)
router.get('/price/desc', orderPriceInDesc)
router.get('/price/asc', orderPriceInAsc)

export default router;
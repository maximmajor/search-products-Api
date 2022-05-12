"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const products_1 = require("../controller/products");
router.get('/', products_1.getAllProducts);
router.get('/spec', products_1.getProductBySpecifications);
router.get('/price/desc', products_1.orderPriceInDesc);
router.get('/price/asc', products_1.orderPriceInAsc);
exports.default = router;
//# sourceMappingURL=products.js.map
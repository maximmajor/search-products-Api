"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderPriceInDesc = exports.orderPriceInAsc = exports.getProductBySpecifications = exports.getAllProducts = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
const products_1 = __importDefault(require("../models/products"));
const getAllProducts = async (req, res, next) => {
    try {
        const Allproducts = (0, products_1.default)();
        if (Allproducts.length < 1) {
            res.status(400).json("No Products");
            return;
        }
        res.status(200).json(Allproducts);
    }
    catch (err) {
        res.status(500).json("server error");
    }
};
exports.getAllProducts = getAllProducts;
async function getProductBySpecifications(req, res) {
    const specifications = req.query.specifications;
    const Allproducts = (0, products_1.default)();
    try {
        if (typeof specifications === 'string') {
            const productSpecification = Allproducts.filter((user) => user.specifications.includes(specifications));
            if (productSpecification.length < 1) {
                res.status(400).json('there is not product with such specifications');
                return;
            }
            res.status(200).json(productSpecification);
            return;
        }
        const productSpecification = Allproducts.filter((user) => user.specifications.includes(...specifications));
        if (productSpecification.length < 1) {
            res.status(400).json('there is not product with such specifications');
            return;
        }
        res.status(200).json(productSpecification);
        return;
    }
    catch (err) {
        res.status(500).json(err);
    }
}
exports.getProductBySpecifications = getProductBySpecifications;
async function orderPriceInAsc(req, res) {
    const Allproducts = (0, products_1.default)();
    try {
        const OrderPriceInDesc = Allproducts.sort((a, b) => a.price - b.price);
        res.status(200).json(OrderPriceInDesc);
        return;
    }
    catch (err) {
        res.status(500).json(err);
    }
}
exports.orderPriceInAsc = orderPriceInAsc;
async function orderPriceInDesc(req, res) {
    const Allproducts = (0, products_1.default)();
    try {
        const OrderPriceInDesc = Allproducts.sort((a, b) => b.price - a.price);
        res.status(200).json(OrderPriceInDesc);
        return;
    }
    catch (err) {
        res.status(500).json(err);
    }
}
exports.orderPriceInDesc = orderPriceInDesc;
//# sourceMappingURL=products.js.map
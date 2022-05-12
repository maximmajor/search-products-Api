import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
const router = Router();
import Products from "../models/products"


export const getAllProducts = async (req: any, res: Response, next: NextFunction) => {
    try {
        const Allproducts = Products()
        if (!Allproducts) {
            res.status(400).json("No Products")
            return
        }
        res.status(200).json(Allproducts)
    }
    catch (err) {
        res.status(500).json("server error");
    }
}


export async function getProductBySpecifications(req: any, res: Response): Promise<void> {
    const specifications = req.query.specifications
    const Allproducts = Products()
    try {
        if (typeof specifications === 'string') {
            const productSpecification = Allproducts.filter((user: any) => user.specifications.includes(specifications))
            if (productSpecification.length < 1) {
                res.status(400).json('there is not product with such specifications')
                return
            }
            res.status(200).json(productSpecification)
            return
        }
        const productSpecification = Allproducts.filter((user: any) => user.specifications.includes(...specifications))
        if (productSpecification.length < 1) {
            res.status(400).json('there is not product with such specifications')
            return
        }
        res.status(200).json(productSpecification)
        return
    }
    catch (err) {
        res.status(500).json(err)
    }
}

export async function orderPriceInAsc(req: any, res: Response): Promise<void> {
    const Allproducts = Products()
    try {
        const OrderPriceInDesc = Allproducts.sort((a, b) => a.price - b.price)
        res.status(200).json(OrderPriceInDesc)
        return
    }
    catch (err) {
        res.status(500).json(err)
    }
}


export async function orderPriceInDesc(req: any, res: Response): Promise<void> {
    const Allproducts = Products()
    try {
        const OrderPriceInDesc = Allproducts.sort((a, b) => b.price - a.price)
        res.status(200).json(OrderPriceInDesc)
        return
    }
    catch (err) {
        res.status(500).json(err)
    }
}
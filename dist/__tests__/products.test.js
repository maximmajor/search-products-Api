"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('Get all products', () => {
    it('Get all product', async () => {
        await (0, supertest_1.default)(app_1.default).get('/products').expect(200);
    });
});
describe('To Search for Products by specifications', () => {
    it('invalid Route', async () => {
        await (0, supertest_1.default)(app_1.default).get('/products/spec').expect(500);
    });
    it('No products with the specified specifications', async () => {
        await (0, supertest_1.default)(app_1.default).get('/products/spec?specifications=notinspec').expect(400);
    });
    it('found products with the specified specifications', async () => {
        await (0, supertest_1.default)(app_1.default).get('/products/spec?specifications=low-carb').expect(200);
    });
});
describe('To order the Products by price in descending order ', () => {
    it('found ordered Products by price in descending order', async () => {
        await (0, supertest_1.default)(app_1.default).get('/products/price/desc').expect(200);
    });
});
describe('To order the Products by price in ascending order', () => {
    it('found ordered Products by price in ascending order', async () => {
        await (0, supertest_1.default)(app_1.default).get('/products/price/asc').expect(200);
    });
});
//# sourceMappingURL=products.test.js.map
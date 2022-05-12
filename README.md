# search-products-Api
A simple API to search products in the .json available

A simple application using Node.js, Express, Typescript. Where customers needs to search in our product catalog available JSON (https://github.com/Folio-Wallet-Applications/folio-challenge/blob/main/result.json)  and he wants to find products that match our food restrictions.


Simple user story

1.  A simple API to search products in the .json available;
2.  It should be possible to search for products by their specifications (one or more);
3.  It must be possible to order the result by price (asc and desc);

Technologies

1. Nodejs
2. Express.js
3. Typescript

Documentation:
Once you clone the project,
1. run yarn (to get all dependenciesand node modules)
2. run yarn tsc (to get the dist folder)
3. run yarn start. (to start the server)


ROUTES:
1.  To get all Products:
    Request: GET
    routes: localhost:3000/products

2.  to Search for Products by specifications
    Request: GET
    routes: localhost:3000/products/spec

3.  To order the Products by price in descending order
    Request: GET
    routes: localhost:3000/products/desc


4.  To order the Products by price in ascending order
    Request: GET
    routes: localhost:3000/products/desc



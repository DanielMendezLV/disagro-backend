const express = require('express');
const router = express.Router();
const database = require('../src/database');
const sql = database.pool;

const getProducts = async (req, res) => {
    try {
        // console.log(req);
        let querySelectAll = 'SELECT * FROM Products;';
        let getProducts = await sql.query(querySelectAll);
       
        getProducts = getProducts.map(product => ({
            ...product,
            price: parseFloat(product.price)
        }));

        return res.status(200).send({
            err: false,
            data: getProducts,
        });

    } catch (err) {
        if (typeof err === 'string') {
            global.log.error(err);
            return res.status(400).send({ error: true, msg: err });
        }
        if (err.message) {
            global.log.error(err.message);
            return res
                .status(400)
                .send({ error: true, msg: 'Ha ocurrido un error.' });
        }
    }
};

router.get('/disagro/products', getProducts);

module.exports = {router, getProducts}  ;

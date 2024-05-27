const express = require('express');
const router = express.Router();
const database = require('../src/database');
const sql = database.pool;

const registerUser = async (req, res) => {
    try {
        // console.log(req);
        const { name, lastname, date, email } = req.body.user;
        const { discountService, discountProduct } = req.body.discounts;
        const products  = req.body.products;

        global.log.info(
            '[INICIO] init user register:', name
        ); 

        let insertQuery = `INSERT INTO Users(name, lastname, email) VALUES ("${name}", "${lastname}", "${email}");`;
        let userCreated = await sql.query(insertQuery);
     
        let insertEvent = `INSERT INTO Events(discountService, discountProduct, datecoming, userId) 
        VALUES ("${discountService}", "${discountProduct}", "${date}", ${userCreated.insertId});`;
        let eventCreated = await sql.query(insertEvent);

        for (const product of products) {
            let insertProductEvent = `INSERT INTO Events_products(eventId, productId, price) 
            VALUES (${eventCreated.insertId}, ${product.productId}, ${product.price});`;
            await sql.query(insertProductEvent);
        }

        global.log.info(
            '[FIN] register user event'
        );

        res.status(200).send({ err: false });
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

router.post('/disagro/event/register', registerUser);

module.exports = {router, registerUser}  ;

const jwt = require('jsonwebtoken');
const database = require('../src/database');
const sql = database.pool;

module.exports = async (req, res, next) => {
    let token = '';
    let token_auth = req.headers.authorization;
    if (token_auth && token_auth.startsWith('Bearer')) {
        token = token_auth.split(' ')[1];
    }

    if (!token) {
        global.log.error('El cliente no envio el token');
        return res
            .status(400)
            .send({ error: true, msg: 'El cliente no envio el token' });
    }

    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET_WORD);
        //console.log(decoded);
        let query = `SELECT id, username, nombres, apellidos, fecha, correo, 
        suscripcion, gravatar, password  FROM usuario WHERE (username = "${decoded.username}" AND id = ${decoded.id})`;

        let userLogin = await sql.query(query);
        

        if (userLogin.length === 0) {
            let msgError = 'Error en la verificación del token y usuario';
            global.log.error(msgError);
            return res.status(400).send({
                error: true,
                msg: msgError,
            });
        }
        
        delete userLogin[0].password;

        req.usuario = userLogin[0];
        global.log.info(`validacion de web token[OK]: id-${req.usuario.id}`);

        next();
    } catch (err) {
        global.log.error(err);
        return res
            .status(400)
            .send({ error: true, msg: 'Error en la verificación del usuario' });
    }
};

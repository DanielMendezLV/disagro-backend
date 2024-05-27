const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const createCommonMidleware = (app, express) => {
    app.use(
        cors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        })
    );
    app.use(helmet());
    app.use(morgan('common', {}));
    app.use(express.urlencoded({ extended: false, limit: '50mb' }));
    app.use(express.json({ limit: '50mb' }));
};

module.exports = {createCommonMidleware};

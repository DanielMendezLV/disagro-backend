require('dotenv').config();
require('./logger/logger');
const http = require('http');
const express = require('express');
const { applyMiddleware } = require('./middleware');

const app = express();
applyMiddleware(app, express);

const httpServer = http.createServer(app);
app.set('port', process.env.PORT || 4000);

app.use(require('./routes'));
const { router } = require('./routes/event');
const { router: routerProduct } = require('./routes/product');
app.use(router);
app.use(routerProduct);

httpServer.listen(app.get('port'), () => {
    // const {LOG_PATH, LOG_LEVEL_DEBUG, LOG_LEVEL_ERROR, SERVICE_NAME} ;
    global.log.info(process.env.LOG_PATH);
    global.log.info(`server on port:  ${app.get('port')}`);
});

module.exports = httpServer; // Se exporta para trabajar pruebas unitarias

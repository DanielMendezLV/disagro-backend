const common = require('./common');

const applyMiddleware = (app, express) => {
    common.createCommonMidleware(app, express);
};

module.exports = { applyMiddleware } ;

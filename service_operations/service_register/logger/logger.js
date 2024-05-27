const winston = require('winston');
const { timestamp, combine } = winston.format;

const { LOG_PATH, LOG_LEVEL_DEBUG, LOG_LEVEL_ERROR, SERVICE_NAME } =
    process.env;

const logTransport = new winston.transports.File({
    level: LOG_LEVEL_DEBUG,
    filename: `${LOG_PATH}/info.logs`,
    handleExceptions: true,
    json: true,
    maxsize: '512mb',
});

const errorTransport = new winston.transports.File({
    level: LOG_LEVEL_ERROR,
    filename: `${LOG_PATH}/error.logs`,
    handleExceptions: true,
    json: true,
    maxsize: '512mb',
});

const consoleTransport = new winston.transports.Console({
    format: combine(
        winston.format.colorize(),
        winston.format.simple(),
        timestamp()
    ),
});

const logger = winston.createLogger({
    level: LOG_LEVEL_DEBUG,
    format: combine(timestamp(), winston.format.json()),
    defaultMeta: { service: SERVICE_NAME },
    transports: [logTransport, errorTransport],
});

if (process.env.NODE_ENV !== 'prod') {
    logger.add(consoleTransport);
}

global.log = logger;

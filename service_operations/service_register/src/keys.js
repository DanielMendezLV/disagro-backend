
const getDatabase = ()=> {
    const config =  {        
        user: process.env.USER_DB, // usuario de base de datos,
        host: process.env.NODE_ENV === 'dev' ?  process.env.HOST_DB_DEV: process.env.HOST_DB_PROD , //Punto de acceso url de BD,
        password: process.env.NODE_ENV === 'dev' ?  process.env.PASSWORD_DB_DEV: process.env.PASSWORD_DB_PROD, // password de base de datos
        database: process.env.DATABASE, //nombre de la base de datos
        port: process.env.PORT_DB, //Puerto de acceso de RDS
        insecureAuth: true,
    };        
    return config;
};

module.exports = { getDatabase }  ;

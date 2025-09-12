const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
    port: process.env.PORT,
    pool: {
        max: 10,         // Maximum number of connections
        min: 0,          // Minimum number of connections
        acquire: 30000,  // Max time (ms) to get a connection before throwing error
        idle: 10000      // Max time (ms) a connection can be idle before being released
    },
    dialectOptions: {
        connectTimeout: 60000 // Increase connection timeout
    }
});

const connectWithRetry = () => {
    return sequelize.authenticate()
        .then(() => console.log("Database connected..."))
        .catch(err => {
            console.error("DB Connection Error: ", err);
            setTimeout(connectWithRetry, 5000); 
        });
};

connectWithRetry();

module.exports = sequelize;

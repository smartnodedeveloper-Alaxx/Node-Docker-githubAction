const sequelize = require("../db/db");
const User = require("./user.model");

const syncDB = async () => {
    await sequelize.sync({ alter: true });
    console.log("Database synchronized!");
};

module.exports = {sequelize,User,syncDB}
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    host: process.env.DBHOST,
    dialect: "mysql",
    port: process.env.DBPORT,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
    logging: (message) => (JSON.stringify({ message })),
  }
);

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection succesful to DB")
  } catch (error) {
    console.log("Failed to connect to DB")
    process.exit(1);
  }
};

module.exports = { sequelize, testDbConnection };

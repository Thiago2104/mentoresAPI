"use strict";
//Import third party libraries
const express = require("express");
const cors = require("cors");

//Import Swagger for Documentation of endpoint
const swaggerUI = require("swagger-ui-express");
const swaggerSetup = require("./config/docs/swagger");

//Import Routes
const mentorsRouter = require("./routes/mentors");

//Connect to DB
const { testDbConnection } = require("./repositories/config/sequelize");

const app = express();

app.use(cors());

//Routes
/**
 * Static Service of documentation for the API
 */
app.use("/documentacion/", swaggerUI.serve, swaggerUI.setup(swaggerSetup));
app.use("/mentores", mentorsRouter);

testDbConnection();

module.exports = app;
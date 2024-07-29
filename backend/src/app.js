const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const bodyParser = require("body-parser");

const loginRouter = require("./router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(loginRouter);
app.use(routes);

module.exports = app;

const express = require("express");
const cors = require("cors");
const { swaggerUi, swaggerDocs } = require("../swagger/swaggerConfig");
const tasksRouter = require("./routes/taskRoute");
const app = require("./app");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

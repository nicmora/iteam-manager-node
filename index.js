require("dotenv").config();
require('./src/config/MongoConfig').connect();

const express = require("express");
const app = express();
const routes = require("./src/routes/UserRoutes");

const PORT = process.env.APP_PORT;

app.use(express.json());
app.use("/docker-app/api/v1/", routes);
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
});

import "./configs/mongo.config";
import "dotenv/config";
import express from "express";
import router from "./routes/router";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/item-manager-node", router);

export default app;

import "dotenv/config";
import mongoose from "mongoose";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

(async (): Promise<void> => {
  await mongoose
    .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`)
    .then((db) => {
      console.log("Database is connected to: ", db.connection.name);
    })
    .catch((err) => {
      console.error(err);
    });
})();

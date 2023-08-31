import "dotenv/config";
import mongoose from "mongoose";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

export function connect(): void {
  mongoose
    .connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`)
    .then(() => console.log("Database connected"))
    .catch((e) => { console.error(e) })
}

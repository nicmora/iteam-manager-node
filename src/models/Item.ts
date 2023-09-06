import { Schema, model } from "mongoose";

export interface Item {
  name: string;
  price: number;
}

const itemSchema = new Schema({
  name: String,
  price: Number,
});

export const ItemSchema = model("Item", itemSchema);

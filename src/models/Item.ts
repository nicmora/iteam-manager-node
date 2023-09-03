import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
  name: String,
  price: Number,
});

export default mongoose.model("Item", itemSchema);

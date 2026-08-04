import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  product: String,
  model: String,
  description: String,
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);

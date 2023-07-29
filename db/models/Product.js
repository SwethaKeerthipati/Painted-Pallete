import mongoose from "mongoose";

const { Schema } = mongoose;

const productsSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productsSchema);

export default Product;

import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema({
  userid: { type: Schema.Types.ObjectId, ref: "User" },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;

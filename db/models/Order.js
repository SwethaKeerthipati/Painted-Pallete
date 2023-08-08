import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  // productId: { type: Schema.Types.ObjectId, ref: "Product" },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  email: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;

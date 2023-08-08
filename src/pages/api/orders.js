import { getSession } from "next-auth/react";
import dbConnect from "../../../db/connect";
import Order from "../../../db/models/Order";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const session = await getServerSession({ req });
  //   if (!session) {
  //     return res.status(401).json({ error: "Not authenticated" });
  //   }
  //   console.log("session:", session);

  await dbConnect();

  if (req.method === "GET") {
    try {
      //   const orders = await Order.find({ userId: session.user.id })
      //     .populate("items.product")
      //     .exec();
      const orders = await Order.find().populate("user").populate("product");

      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  } else if (req.method === "POST") {
    try {
      const { productId, email, quantity, price } = req.body;

      const newOrder = new Order({
        productId: mongoose.Types.ObjectId(productId),
        email,
        quantity,
        price,
        userId: session.user.id,
      });

      await newOrder.save();

      res
        .status(201)
        .json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

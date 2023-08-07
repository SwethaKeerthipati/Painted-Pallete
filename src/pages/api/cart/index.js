// api/cart/index.js
import dbConnect from "../../../../db/connect";
import Cart from "../../../../db/models/Cart";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  await dbConnect();

  if (req.method === "GET") {
    try {
      const cartItems = await Cart.find({ userid: session.user.id });
      return res.status(200).json(cartItems);
    } catch (error) {
      return res.status(500).json({ error: "Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { productId } = req.body;
      const existingItem = await Cart.findOne({
        userid: session.user.id,
        productId,
      });
      if (existingItem) {
        existingItem.quantity += 1;
        await existingItem.save();
        return res.status(200).json(existingItem);
      } else {
        const newCartItem = new Cart({
          userid: session.user.id,
          productId,
          quantity: 1,
        });
        await newCartItem.save();
        return res.status(201).json(newCartItem);
      }
    } catch (error) {
      return res.status(500).json({ error: "Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      const { productId, quantity } = req.body;
      const cartItem = await Cart.findOne({
        userid: session.user.id,
        productId,
      });
      if (!cartItem) {
        return res.status(404).json({ error: "Cart item not found" });
      }
      cartItem.quantity = quantity;
      await cartItem.save();
      return res.status(200).json(cartItem);
    } catch (error) {
      return res.status(500).json({ error: "Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { productId } = req.body;
      await Cart.deleteOne({ userid: session.user.id, productId });
      return res.status(200).json({ message: "Cart item deleted" });
    } catch (error) {
      return res.status(500).json({ error: "Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

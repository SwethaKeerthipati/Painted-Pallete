import dbConnect from "../../../../db/connect";
import Order from "../../../../db/models/Order";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  await dbConnect();

  if (req.method === "GET") {
    try {
      const orders = await Order.find({ userid: session.user.id });
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: "Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { items, totalAmount } = req.body;
      const newOrder = new Order({
        userid: session.user.id,
        items,
        totalAmount,
      });
      await newOrder.save();
      return res.status(201).json(newOrder);
    } catch (error) {
      return res.status(500).json({ error: "Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

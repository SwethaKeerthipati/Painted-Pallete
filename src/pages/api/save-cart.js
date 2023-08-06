import dbConnect from "../../../db/connect";
import User from "../../../db/models/User";
export default async function handler(req, res) {
  const { method, body } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { userId } = body;

        const user = await User.findByIdAndUpdate(
          userId,
          { cart: body.cart },
          { new: true }
        );

        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }

        return res
          .status(200)
          .json({ message: "Cart data saved successfully" });
      } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
      }
    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}

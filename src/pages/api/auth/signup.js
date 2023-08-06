import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/User";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  try {
    await dbConnect();

    if (req.method === "POST") {
      if (!req.body) {
        return res.status(404).json({ error: "Don't have form data...!" });
      }

      const { username, email, password } = req.body;
      console.log("username, email, password", username, email, password);
      var query = { email: email };
      const checkexisting = await User.findOne(query);
      if (checkexisting) {
        return res.status(422).json({ message: "User Already Exists...!" });
      }

      const newUser = new User({
        username,
        email,
        password: await hash(password, 12),
      });

      const user = await newUser.save();
      res.status(201).json({ status: true, user });
    } else {
      res
        .status(500)
        .json({ message: "HTTP method not valid only POST Accepted" });
    }
  } catch (error) {
    console.error("Error while processing signup:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing signup." });
  }
}

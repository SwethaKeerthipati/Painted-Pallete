import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/User";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();
    const { email, password /* other user data */ } = req.body;

    try {
      // Check if user with the given email already exists in the database.
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash the password before saving it to the database.
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user object and save it to the database.
      const user = new User({
        email,
        password: hashedPassword,
        /* other user data */
      });

      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

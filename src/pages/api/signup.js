// pages/api/signup.js

import { hash } from "bcrypt";
import dbConnect from "../../../db/connect";

export default async function handler(req, res) {
  console.log("Received signup request:", req.body);
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password should be at least 6 characters long." });
  }

  const { db } = await dbConnect();

  try {
    // Check if the user already exists
    const user = await db.collection("users").findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Email already in use." });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await hash(password, 10);

    // Save the user to the database
    await db.collection("users").insertOne({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "Signup successful." });
  } catch (error) {
    console.error("Signup Error:", error);
    return res
      .status(500)
      .json({ error: "Something went wrong during signup." });
  }
}

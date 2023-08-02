import { connectMongo } from "./mongoose";
import User from "../db/models/User";
export async function getAllUsers() {
  await connectMongo();
  return User.find({ isActive: true });
}

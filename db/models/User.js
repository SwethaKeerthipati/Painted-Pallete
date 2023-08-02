import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 6,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,

    shippingAddresses: [
      {
        street: { type: String, required: true },
        city: { type: String, required: true },
        postcode: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);

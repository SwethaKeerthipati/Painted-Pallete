import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
      minLength: 4,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 6,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifiedToken: String,
    // resetPasswordToken: String,
    // resetPasswordExpire: Date,

    // shippingAddresses: [
    //   {
    //     street: { type: String, required: true },
    //     city: { type: String, required: true },
    //     postcode: { type: String, required: true },
    //   },
    // ],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);

// import { Schema, model, models } from "mongoose";

// const userSchema = new Schema({
//   username: String,
//   email: String,
//   password: String,
// });

// const Users = models.users || model("users", userSchema);

// export default Users;

import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../../lib/mongoose";
import dbConnect from "../../../../db/connect";
import Users from "../../../../db/models/User";
import { compare } from "bcryptjs";

// Establish MongoDB connection at the start of the application
dbConnect();

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      secret: process.env.SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      secret: process.env.SECRET,
    }),
    Credentials({
      name: "Credentials",
      async authorize(credentials, req) {
        try {
          // check user existence
          const result = await Users.findOne({ email: credentials.email });
          if (!result) {
            throw new Error("No user Found with Email Please Sign Up...!");
          }

          // compare passwords
          const checkPassword = await compare(
            credentials.password,
            result.password
          );

          // incorrect password
          if (!checkPassword || result.email !== credentials.email) {
            throw new Error("Username or Password doesn't match");
          }
          const secret = process.env.SECRET;

          return result;
        } catch (error) {
          throw new Error("Error during authentication: " + error.message);
        }
      },
    }),
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise, {
    // db: clientPromise,
    collection: "users", // Specify the name of the collection where user documents will be stored
  }),
  callbacks: {
    async session({ session, user }) {
      session.user._id = user.id;
      // session.accessToken = token.accessToken;
      return session;
    },
  },
  // ...
};

export default NextAuth(authOptions);

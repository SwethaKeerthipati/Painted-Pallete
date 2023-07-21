import dbConnect from "../../db/connect";

export default async function handler(req, response) {
  try {
    // Establish a connection to the MongoDB database
    const { db } = await dbConnect();

    // Fetch categories from the "categories" collection
    const categories = await db.collection("categories").find({}).toArray();

    // Return the categories as a JSON response with status code 200
    response.status(200).json(categories);
  } catch (err) {
    // Log any errors that occur during data fetching
    console.error(err);

    // Return an error JSON response with status code 500
    response.status(500).json({ message: "Internal Server Error" });
  }
}

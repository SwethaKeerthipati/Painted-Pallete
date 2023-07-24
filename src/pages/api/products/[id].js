import dbConnect from "../../../../db/connect";
import Product from "../../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const { id } = request.query;

    if (id) {
      try {
        const product = await Product.findById(id);

        if (product) {
          return response.status(200).json(product);
        } else {
          return response.status(404).json({ message: "Product not found" });
        }
      } catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Server error" });
      }
    } else {
      return response
        .status(400)
        .json({ message: "Product ID is missing from the request" });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}

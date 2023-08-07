import dbConnect from "../../../../db/connect";
import Product from "../../../../db/models/Product";
export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  } else if (request.method === "POST") {
    try {
      const productData = request.body;
      // const product = new Product(productData);
      const { title, image, price, category, description, price_id } =
        productData;
      const product = new Product({
        title,
        image,
        price,
        category,
        description,
        price_id, // Save the Stripe Price ID to the database
      });
      await product.save();
      response.status(201).json({ status: "Product created" });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}

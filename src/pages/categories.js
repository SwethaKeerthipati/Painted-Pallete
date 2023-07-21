import dbConnect from "../../db/connect";

// export default async function handler(req, response) {
//   try {
//     const { db } = await dbConnect();
//     const categories = await db.collection("categories").find({}).toArray();
//     response.status(200).json(categories);
//   } catch (err) {
//     console.error(err);
//     response.status(500).json({ message: "Internal Server Error" });
//   }
// }

const CategoriesPage = () => {
  // Your page content here
  return <div>Categories Page</div>;
};

export default CategoriesPage;

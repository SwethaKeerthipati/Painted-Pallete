import dbConnect from "../../db/connect";

export default async function handler(req, res) {
  try {
    const { db } = await dbConnect();
    const categories = await db.collection("categories").find({}).toArray();
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// const CategoriesPage = () => {
//   // Your page content here
//   return <div>Categories Page</div>;
// };

// export default CategoriesPage;

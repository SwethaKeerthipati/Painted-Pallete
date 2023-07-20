import Product from "../../components/Product";
import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data: productInfo, error } = useSWR("/api/products", fetcher);

  if (error) {
    return <div>Error loading data</div>;
  }

  const allProducts = productInfo || [];

  const categoryName = ["All", "Cute", "Mandala", "Nature", "Pencil"];

  const getRandomProducts = () => {
    if (searchTerm.toLowerCase() === "all") {
      const shuffledProducts = [...allProducts];
      for (let i = shuffledProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledProducts[i], shuffledProducts[j]] = [
          shuffledProducts[j],
          shuffledProducts[i],
        ];
      }
      return shuffledProducts;
    } else {
      return allProducts.filter(
        (product) => product.category.toLowerCase() === searchTerm.toLowerCase()
      );
    }
  };

  const randomProducts = getRandomProducts();

  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Search for Paintings"
        className="bg-gray-100 w-full py-2 px-4 rounded-xl"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <div className="flex mb-5">
          {categoryName.map((category) => (
            <h2
              key={category}
              className={`text-2xl capitalize mr-5 ${
                searchTerm.toLowerCase() === category.toLowerCase()
                  ? "underline"
                  : ""
              }`}
              onClick={() => setSearchTerm(category.toLowerCase())}
              style={{ cursor: "pointer" }}
            >
              {category}
            </h2>
          ))}
        </div>
        <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
          {randomProducts.map((product) => (
            <div key={product._id} className="px-5 snap-start">
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

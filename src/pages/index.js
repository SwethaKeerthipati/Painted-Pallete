import React, { useState } from "react";
import useSWR from "swr";
import Header from "../../components/Header";
import Product from "../../components/Product";

export default function Home() {
  const [search, setSearch] = useState("");
  const [matchedCategory, setMatchedCategory] = useState("All");

  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data: productInfo, error } = useSWR("/api/products", fetcher);

  if (error) {
    return <div>Error loading data</div>;
  }

  const allProducts = productInfo || [];

  const categoryName = ["All", "Cute", "Mandala", "Nature", "Pencil"];

  const getRandomProducts = () => {
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    const shuffledProducts = [...filteredProducts];
    for (let i = shuffledProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledProducts[i], shuffledProducts[j]] = [
        shuffledProducts[j],
        shuffledProducts[i],
      ];
    }

    return shuffledProducts;
  };

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleCategoryClick = (category) => {
    setMatchedCategory(category.toLowerCase());
    setSearch("");
  };

  const filteredProducts =
    matchedCategory.toLowerCase() === "all"
      ? getRandomProducts()
      : allProducts.filter(
          (product) =>
            product.category.toLowerCase() === matchedCategory.toLowerCase() &&
            product.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div>
      <Header onSearchChange={handleSearchChange} />
      {/* <div className="p-5">
        <input
          type="text"
          placeholder="Search for Paintings"
          className="bg-gray-100 w-full py-2 px-4 rounded-xl "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}
      <div>
        <div className="flex mb-5">
          {categoryName.map((category) => (
            <div key={category} className="mr-6 p-4 ">
              <h2
                className={`py-2 px-6 bg-pink-500 text-white rounded-2xl hover:bg-blue-400 hover:text-white transition-all cursor-pointer ease-in-out duration-200 shadow ${
                  matchedCategory.toLowerCase() === category.toLowerCase()
                    ? "underline"
                    : ""
                }`}
                onClick={() => handleCategoryClick(category.toLowerCase())}
                style={{ cursor: "pointer" }}
              >
                {category}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
          {filteredProducts.map((product) => (
            <div key={product._id} className="px-5 snap-start">
              <Product {...product} />
              {matchedCategory.toLowerCase() === "all" && (
                <p className="text-sm">Category: {product.category}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

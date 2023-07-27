import React, { useState } from "react";
import useSWR from "swr";
import Header from "../../components/Header";
import Product from "../../components/Product";
import Link from "next/link";
import Component from "../../components/Login";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Newsletter from "../../components/NewsLetter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [matchedCategory, setMatchedCategory] = useState("All");

  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data: productInfo, error } = useSWR("/api/products", fetcher);

  if (error) {
    return <div>Error loading data</div>;
  }

  const allProducts = productInfo || [];

  const categoryName = ["All", "Nature", "Mandala", "Cute", "Pencil", "Random"];

  const getRandomProducts = () => {
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
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
      <Banner />
      <div>
        <div className=" flex mb-5">
          {categoryName.map((category) => (
            <div key={category} className="mr-6 p-2 ">
              <h2
                className={`" py-2 px-6 bg-white text-center rounded hover-bg-blue-900 hover:text-white transition-all cursor-pointer ease-in-out duration-200 shadow " ${
                  matchedCategory.toLowerCase() === category.toLowerCase()
                    ? "active-category"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4">
          {productInfo ? (
            filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product._id} className="px-5">
                  <Link
                    href={`/products/${product._id}`}
                    key={product._id}
                    passHref
                  >
                    <Product
                      id={product._id}
                      name={product.name}
                      price={product.price}
                      description={product.description}
                      category={product.category}
                      image={product.image}
                    />
                  </Link>
                  {/* <Product key={product.id} {...product} /> */}
                  {matchedCategory.toLowerCase() === "all" && (
                    <p className="text-sm"></p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-lg">No Paintings found😒</p>
            )
          ) : (
            <p className="text-xs text-gray-500 text-center py-4">Loading...</p>
          )}
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

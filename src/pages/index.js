import React, { useState } from "react";
import useSWR from "swr";
import Header from "../../components/Header";
import Product from "../../components/Product";
import Link from "next/link";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Newsletter from "../../components/NewsLetter";
import Categories from "../../components/Categories";

export default function Home({ addItemToCart }) {
  const [search, setSearch] = useState("");
  const [matchedCategory, setMatchedCategory] = useState("All");

  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data: productInfo, error } = useSWR("/api/products", fetcher);

  if (error) {
    return <div>Error loading data</div>;
  }

  const allProducts = productInfo || [];

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

  const filteredProducts =
    matchedCategory.toLowerCase() === "all"
      ? getRandomProducts()
      : allProducts.filter(
          (product) =>
            product.category.toLowerCase() === matchedCategory.toLowerCase() &&
            product.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div>
      <Header onSearchChange={handleSearchChange} />
      <Banner />
      <Categories
        categoryName={["All", "Nature", "Mandala", "Cute", "Pencil", "Random"]}
        matchedCategory={matchedCategory}
        setMatchedCategory={setMatchedCategory}
      />
      <div>
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
                      onClick={addItemToCart}
                      id={product._id}
                      title={product.title}
                      price={product.price}
                      description={product.description}
                      category={product.category}
                      image={product.image}
                    />
                  </Link>
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

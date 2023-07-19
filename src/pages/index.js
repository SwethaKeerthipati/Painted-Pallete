import Product from "../../components/Product";
import { useEffect, useState } from "react";

export default function Home() {
  const [productInfo, setProductInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((json) => setProductInfo(json));
  }, []);

  const filteredProducts = productInfo.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryName = [...new Set(filteredProducts.map((p) => p.category))];

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
        {categoryName.map((category) => (
          <div key={category}>
            <h2 className="text-2xl py-5 capitalize">{category}</h2>
            <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
              {filteredProducts
                .filter((p) => p.category === category)
                .map((product) => (
                  <div key={product._id} className="px-5 snap-start">
                    <Product {...product} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

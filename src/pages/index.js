import Product from "../../components/Product";
import { useEffect, useState } from "react";

export default function Home() {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((json) => setProductInfo(json));
  }, []);

  const categoryName = [...new Set(productInfo.map((p) => p.category))];

  return (
    <div className="p-5">
      <div>
        {categoryName.map((category) => (
          <div key={category}>
            <h2 className="text-2xl py-5 capitalize">{category}</h2>
            <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
              {productInfo
                .filter((p) => p.category === category)
                .map((product) => (
                  <div key={product._id} className="px-5 snap-start">
                    <Product {...product} />
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="py-4"></div>
      </div>
    </div>
  );
}

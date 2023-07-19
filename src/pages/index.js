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
            <h2 className="text-2xl capitalize">{category}</h2>
            {productInfo
              .filter((p) => p.category === category)
              .map((product) => (
                // <div key={product._id}>{product.name}</div>
                <Product key={product._id} {...product} />
              ))}
          </div>
        ))}

        <div className="py-4"></div>
      </div>
    </div>
  );
}

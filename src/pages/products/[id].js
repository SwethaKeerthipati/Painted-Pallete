import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductDetails from "../../../components/ProductDetails";

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ProductDetails {...product} />;
};

export default ProductDetailsPage;

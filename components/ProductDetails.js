import React from "react";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addToCart } from "../slices/cartSlice";
import Header from "./Header";
import { generateUniqueId } from "../utils/uuid";

export default function ProductDetails({ title, description, price, image }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const uniqueId = generateUniqueId();
  const handleAddToCart = () => {
    // Replace the following lines with your actual logic to add the product to the cart
    const product = {
      id: uniqueId,
      title,
      description,
      price,
      image,
      quantity: 1,
    };
    dispatch(addToCart(product));
    console.log(`Adding ${title} to cart.`);
  };
  const handleBuyNow = () => {
    // Replace the following lines with your actual logic for "Buy Now"
    const product = {
      title,
      description,
      price,
      image,
      quantity: 1,
    };
    dispatch(addToCart(product));
    router.push("/checkout"); // Redirect to the checkout page
    console.log(`Buying ${title} now.`);
  };
  return (
    <>
      <Header />
      <div className="heightFix px-6 lg:py-32 md:py-28 py-12 pb-20">
        <div className="max-w-screen-xl flex items-center mx-auto">
          <div className="flex md:flex-row flex-col md:justify-between w-full md:gap-4 gap-8">
            <div className="w-1/2 pr-4">
              <Image
                src={image}
                width={400}
                height={400}
                objectFit="contain"
                alt={title}
              />
            </div>
            <div className="w-1/2">
              <h2 className="font-bold xl:text-4xl  lg:text-3xl text-2xl mb-2 capitalize">
                {title}
              </h2>
              <p className="text-justify text-sm lg:text-base my-6">
                {description}
              </p>
              <p className="text-2xl font-semibold text-gray-700">€{price}</p>
              <div className="mt-10 flex justify-evenly gap-6">
                <button
                  onClick={handleAddToCart}
                  className="px-10 py-2 flex items-center justify-center bg-blue-500"
                >
                  <ShoppingCartIcon className="w-4" />
                  <span className="ml-2">Add to Cart</span>
                </button>
                <button
                  onClick={handleBuyNow}
                  className="px-10 py-2 flex items-center justify-center bg-green-500"
                >
                  <BoltIcon className="w-4" />
                  <span className="ml-2">Buy now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

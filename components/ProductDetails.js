import React from "react";
import Image from "next/image";

export default function ProductDetails({ name, description, price, image }) {
  return (
    <div className="flex flex-row items-center p-6">
      <div className="w-1/2 pr-4">
        <Image
          src={image}
          width={400}
          height={400}
          objectFit="contain"
          alt={name}
          className="w-90 h-90 objectFit-cover border-ridge"
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-sm mb-4">{description}</p>
        <p className="text-lg font-bold">€{price}</p>
        <div className="flex mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white mr-2">
            Add to cart
          </button>
          <button className="px-4 py-2 bg-green-500 text-white">Buy now</button>
        </div>
      </div>
    </div>
  );
}

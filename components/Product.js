import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Product({
  _id,
  title,
  price,
  price_id,
  description,
  image,
}) {
  return (
    <div className="relative flex flex-col bg-white z-20 md:p-8 p-6 rounded-md shadow-lg">
      <Image
        src={image}
        height={200}
        width={200}
        alt=""
        objectFit="contain"
        className="cursor-pointer w-80 h-60 object-cover rounded-lg "
      />

      <div className="mt-2">
        <h3 className="font-medium capitalize">{title}</h3>
      </div>

      <p className="text-xs mb-2 line-clamp-2 text-gray-500 link">
        {description}
      </p>
      <div className="mb-5 mt-2 font-bold text-gray-700 flex items-center justify-between">
        <span className="mr-2">€{price}</span>
      </div>
    </div>
  );
}

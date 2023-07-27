import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Product({ id, title, price, description, category, image }) {
  return (
    // <Fade bottom>
    <Link href={`/products/${id}`}>
      <div className="relative flex flex-col bg-white z-20 md:p-3 p-6 rounded-md shadow-lg">
        <div className="w-50 h-80">
          <Image
            src={image}
            width={200}
            height={200}
            objectFit="contain"
            alt={name}
            className="w-full h-full object-cover rounded-xl border-ridge cursor-pointer"
          />
        </div>

        <div className="mt-2">
          <h3 className="font-bold text-lg px-3">{title}</h3>
        </div>

        <p className="text-xs mb-2 line-clamp-2 px-3 link">{description}</p>

        <div className="flex items-center">
          <div className="text-2xl font-bold mr-4 px-3 flex-grow">€{price}</div>
          <ShoppingBasketIcon className="text-2xl" />
        </div>
      </div>
    </Link>
    // </Fade>
  );
}

export default Product;

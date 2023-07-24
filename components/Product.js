import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Fade from "react-reveal/Fade";

function Product({ name, price, description, category, image }) {
  return (
    <Fade right>
      <div className="relative flex flex-col bg-white z-20 md:p-3 p-6 rounded-md shadow-lg">
        <div className="w-50 h-80">
          <Image
            src={image}
            width={200}
            height={200}
            objectFit="contain"
            alt="name"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-2">
          <h3 className="font-bold text-lg px-3">{name}</h3>
        </div>

        <p className="text-xs mb-2 line-clamp-2 px-3 link">
          <Link href={`/product-details`}>{description}</Link>
        </p>
        {/* <div className="text-2xl font-bold grow ">€{price}</div> */}
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-4 px-3 flex-grow">€{price}</div>
          <ShoppingBasketIcon className="text-2xl "></ShoppingBasketIcon>
        </div>
      </div>
    </Fade>
  );
}

export default Product;

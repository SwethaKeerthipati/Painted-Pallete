import React from "react";
import BannerImg from "../public/products/art-artist.gif";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const scrollHandler = () => {
    window.scrollTo({
      top: document.getElementById("products-feed").offsetTop - 90,
      behavior: "smooth",
    });
  };
  return (
    <div className="py-10 md:py-20 relative bg-gradient-to-r from-blue-100 to-indigo-900">
      <div className="flex flex-col-reverse items-center md:flex-row md:items-center max-w-screen-xl mx-auto px-4">
        <div className="relative z-10 mb-6 md:mb-0 md:mr-12 md:mt-12 xxl:mt-0">
          <Image
            src={BannerImg}
            alt="Banner"
            width={100}
            height={100}
            className="w-40 md:w-96 xxl:w-112"
          />
        </div>
        <div className="text-content text-white text-center md:text-left z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 md:mb-8">ARTS</h1>
          <p className="max-w-sm md:max-w-md md:text-lg mb-6 md:mb-12">
            Art is the colors and textures of your imagination.
          </p>
          <div className="ctas flex justify-center md:justify-start gap-4">
            <Link href="/about">
              <div className="uppercase text-sm font-medium border-2 border-white py-2 px-6 transition-opacity cursor-pointer hover:opacity-60 rounded-lg">
                Read More
              </div>
            </Link>

            {/* <Link href="/categories"> */}
            <button className=" uppercase text-sm font-medium bg-white text-black py-2 px-6 transition-opacity cursor-pointer hover:opacity-60 rounded-lg">
              <div className="mr-2 xl:w-6 w-5" />
              Shop Now
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import Image from "next/image";

const Returns = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <h2 className="text-xl font-bold mb-4">Return Policy</h2>
      <p className="text-sm text-gray-600">
        If you are not satisfied with your purchase, you can return the item
        within 30 days of the purchase date. The item must be in its original
        condition and packaging to be eligible for a return. Please contact our
        customer support team at swethakeerthipati@gmail.com for further
        assistance.
      </p>
      <div className="mt-4">
        <Image
          src="/products/rp.jpg"
          alt="Return Policy"
          height={200}
          width={200}
          className="w-800 h-400"
        />
      </div>
    </div>
  );
};

export default Returns;

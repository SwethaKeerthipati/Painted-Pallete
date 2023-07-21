import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";

export default function Header({ onSearchChange }) {
  return (
    <header className="p-1 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/products/pp-logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="h-100 w-14"
        />
        <Search onSearchChange={onSearchChange} />
        {/* <div className="p-5">
          <input
            type="text"
            placeholder="Search for Paintings"
            className="bg-gray-100 w-full py-2 px-4 rounded-xl "
            value={search}
            onChange={handleInputChange}
          />
        </div> */}
      </div>
      <div className="flex items-center space-x-5">
        <Link href="/about" legacyBehavior>
          <a className="text-blue-600">About</a>
        </Link>
        <Link href="/shop" legacyBehavior>
          <a className="text-blue-600">Shop</a>
        </Link>
        <Link href="/login" legacyBehavior>
          <a className="text-blue-600">Login</a>
        </Link>
      </div>
    </header>
  );
}

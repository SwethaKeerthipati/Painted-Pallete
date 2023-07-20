import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ onSearchChange }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <header className="p-5 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/products/pp-logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="h-14 w-14"
        />
        <div className="p-5 flex-grow ">
          <input
            type="text"
            placeholder="Search for Paintings"
            className="bg-gray-100 w-full py-2 px-4 rounded-xl "
            value={search}
            onChange={handleInputChange}
          />
        </div>
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

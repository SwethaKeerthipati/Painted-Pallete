import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";

export default function Header({ onSearchChange }) {
  return (
    <div className="sticky-header">
      <header className="flex items-center justify-between p-1">
        <div className="flex items-center flex-grow gap-4">
          <Link href="/" legacyBehavior>
            <a href="#top">
              <Image
                src="/products/pp-logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="h-700 w-20"
              />
            </a>
          </Link>
          <div className="flex-grow items-center gap-4">
            <div className="w-70">
              <Search onSearchChange={onSearchChange} />
            </div>
          </div>
          <div className="flex space-x-5 ml-auto">
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
        </div>
      </header>
    </div>
  );
}

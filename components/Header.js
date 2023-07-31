import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import Search from "./Search";

export default function Header({ onSearchChange }) {
  const { data: session, loading } = useSession();
  const router = useRouter();

  // Step 2: Use useSelector to get the cartItems from the Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate the total cart count based on the quantity of each cart item
  const cartCount = cartItems
    ? cartItems.reduce((total, item) => total + (item.quantity || 0), 0)
    : 0;

  const handleCartClick = () => {
    router.push("/cart");
  };

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  const userImage = session?.user?.image;

  return (
    <header className="sticky top-0 inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6 md:block hidden">
      <div className="flex items-center w-full max-w-screen-xl py-2 xl:space-x-16 lg:space-x-12 space-x-7 mx-auto">
        <div className="flex items-center">
          <Image
            src="/products/pp-logo.png"
            alt="logo"
            className="cursor-pointer"
            width={100}
            objectFit="contain"
            height={50}
            onClick={() => router.push("/")}
          />
        </div>
        <div className="flex-grow">
          <Search onSearchChange={onSearchChange} />
        </div>
        <div className="flex items-center xl:space-x-12 lg:space-x-10 space-x-7 font-medium lg:text-base text-sm">
          {!loading ? (
            !session ? (
              <span className="link" onClick={handleSignIn}>
                Login
              </span>
            ) : (
              <div className="relative">
                {/* User Image (Circle) */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  {userImage ? (
                    <Image
                      src={userImage}
                      alt="User"
                      width={40}
                      height={40}
                      objectFit="cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-400"></div>
                  )}
                </div>
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10 hidden">
                  <Link href="/profile" passHref>
                    <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Profile
                    </span>
                  </Link>
                  <Link href="/orders" passHref>
                    <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Orders
                    </span>
                  </Link>
                  <Link href="/contact" passHref>
                    <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Contact
                    </span>
                  </Link>
                  <span
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    onClick={handleSignOut}
                  >
                    Logout
                  </span>
                </div>
              </div>
            )
          ) : null}
          <Link href="/about" passHref>
            <span className="link">About</span>
          </Link>
        </div>
        <div className="relative cursor-pointer" onClick={handleCartClick}>
          <AiOutlineShoppingCart size={25} />
          <span className="absolute -top-3 -right-4 px-2 rounded-full bg-white text-[#222]">
            {cartCount}
          </span>
        </div>
      </div>
    </header>
  );
}

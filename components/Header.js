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
              <span className="link" onClick={handleSignOut}>
                Logout
              </span>
            )
          ) : null}
          <Link href="/orders" passHref>
            <span className="link">Orders</span>
          </Link>
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

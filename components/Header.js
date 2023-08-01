import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import Search from "./Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header({ onSearchChange }) {
  const { data: session, loading } = useSession();
  const router = useRouter();

  const cartItems = useSelector((state) => state.cart.cartItems);
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
    <header className="sticky top-0 inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6">
      <div className="flex items-center w-full max-w-screen-xl py-2 xl:space-x-16 lg:space-x-12 space-x-7 mx-auto">
        <div className="flex items-center">
          <Image
            src="/products/pp-logo.png"
            alt="logo"
            className="cursor-pointer"
            width={50}
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
              <Link href="/login" passHref>
                <span className="link">Login</span>
              </Link>
            ) : (
              <div className="user-dropdown">
                <button className="dropbtn">
                  {session.user.name.split(" ")[0]}
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    className="w-8 h-8 rounded-full ml-2"
                  />
                  <KeyboardArrowDownIcon />
                </button>
                <div className="dropdown-content">
                  <button onClick={() => router.push("/profile")}>
                    Profile
                  </button>
                  <button onClick={() => router.push("/orders")}>Orders</button>
                  <button onClick={() => router.push("/contact")}>
                    Contact Us
                  </button>
                  <button onClick={handleSignOut}>Logout</button>
                </div>
              </div>
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

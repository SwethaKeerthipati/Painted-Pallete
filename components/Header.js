import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useSession, signOut } from "next-auth/react";
import Search from "./Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header({ onSearchChange }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleCartClick = () => {
    router.push("/cart");
  };

  const handleSignOut = () => {
    signOut();
  };

  useEffect(() => {
    // Function to close the dropdown when clicking outside of it
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // Event listener to handle outside click
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          {status === "loading" ? (
            // Loading state
            <div>Loading...</div>
          ) : (
            <>
              {!session ? (
                // User not logged in
                <Link href="/login" passHref>
                  <span className="link">Login</span>
                </Link>
              ) : (
                // User is logged in
                <div className="user-dropdown" ref={dropdownRef}>
                  <button
                    className="dropbtn"
                    onClick={() => setShowDropdown((prev) => !prev)}
                  >
                    {session.user.name.split(" ")[0]}
                    <Image
                      src={session.user.image}
                      alt="Profile"
                      className="w-8 h-8 rounded-full ml-2"
                      height={300}
                      width={300}
                    />
                    <KeyboardArrowDownIcon />
                  </button>
                  {showDropdown && (
                    <div className="dropdown-content border-b border-gray-200">
                      <button onClick={() => router.push("/profile")}>
                        Profile
                      </button>
                      <button onClick={() => router.push("/orders")}>
                        Orders
                      </button>
                      <button onClick={() => router.push("/contact")}>
                        Contact Us
                      </button>
                      <button onClick={handleSignOut}>Logout</button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
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

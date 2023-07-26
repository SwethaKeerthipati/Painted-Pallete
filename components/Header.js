import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header({ onSearchChange }) {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="sticky-header w-full justify-center">
      <header className="flex items-center justify-between p-1">
        <div className="flex items-center flex-grow gap-4">
          <Link href="/" legacyBehavior>
            <a href="#top" className="ml-4">
              <Image
                src="/products/pp-logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="h-100 w-14"
              />
            </a>
          </Link>

          <div className="flex flex-grow items-center justify-center">
            <div className="w-70">
              <Search onSearchChange={onSearchChange} />
            </div>
          </div>

          <ul className="flex space-x-5">
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-gradient-blue">About</a>
              </Link>
            </li>
            <li>
              {session ? (
                <button
                  onClick={handleSignOut}
                  className="text-gradient-purple"
                >
                  Sign out
                </button>
              ) : (
                <button onClick={handleSignIn} className="text-gradient-purple">
                  Login
                </button>
              )}
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="text-gradient-green">Contact</a>
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <AiOutlineShoppingCart size={25} />
              <span className="absolute -top-3 -right-4 px-2 rounded-full bg-white text-[#222]">
                0
              </span>
            </div>
            {session ? (
              <span className="text-gradient-orange">
                {session.user.name.split(" ")[1]}
              </span>
            ) : (
              <span className="text-gradient-orange">Guest</span>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

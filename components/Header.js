import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
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
    <header className="sticky-header w-full justify-center top-0 inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6 md:block hidden">
      <div className="flex items-center w-full max-w-screen-xl py-2 xl:space-x-16 lg:space-x-12 space-x-7 mx-auto">
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a href="#top" className="ml-4">
              <Image
                src="/products/pp-logo.png"
                alt="Logo"
                width={100}
                height={50}
                className="cursor-pointer h-100 w-14"
              />
            </a>
          </Link>
        </div>
        <div className="flex-grow">
          <Search onSearchChange={onSearchChange} />
        </div>

        <div className="flex justify-between items-center space-x-5">
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
      </div>
    </header>
  );
}

// import React, { useEffect, useState, useContext } from "react";
// import Link from "next/link";
// import { TbSearch } from "react-icons/tb";
// import { CgShoppingCart } from "react-icons/cg";
// import { AiOutlineHeart } from "react-icons/ai";
// import Search from "./Search";
// // import { Context } from "../../utils/context";
// // import Cart from "../Cart/Cart";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [searchModal, setSearchModal] = useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     if (offset > 200) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // const { cartCount, showCart, setShowCart } = useContext(Context);

//   return (
//     <>
//       <header
//         className={`main-header ${
//           scrolled ? "sticky-header" : ""
//         } fixed top-0 left-0 right-0 z-50 w-full px-0 bg-gray-900 text-white border-b border-gray-100 md:px-40`}
//       >
//         <div className="header-content flex items-center justify-between max-w-1200 mx-auto h-12 md:h-16">
//           <ul className="left hidden md:flex gap-6">
//             <li>
//               <Link href="/">
//                 <div className="cursor-pointer">Home</div>
//               </Link>
//             </li>
//             <li>
//               <Link href="/about">
//                 <div className="cursor-pointer">About</div>
//               </Link>
//             </li>
//             <li className="cursor-pointer">Categories</li>
//           </ul>
//           <div
//             className="center cursor-pointer text-2xl font-bold md:text-4xl"
//             onClick={() => (window.location.href = "/")}
//           >
//             Painted Pallete
//           </div>
//           <div className="right flex items-center gap-4 cursor-pointer">
//             <TbSearch
//               onClick={() => setSearchModal(true)}
//               className="text-xl md:text-2xl"
//             />
//             <AiOutlineHeart className="text-xl md:text-2xl" />
//             <span
//               className="cart-icon relative"
//               onClick={() => setShowCart(true)}
//             >
//               <CgShoppingCart className="text-xl md:text-2xl" />
//               {/* {!!cartCount && (
//                 <span className="min-w-6 text-center bg-purple-600 text-xs leading-4 absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/2 rounded-full">
//                   {cartCount}
//                 </span>
//               )} */}
//             </span>
//           </div>
//         </div>
//       </header>
//       {searchModal && <Search setSearchModal={setSearchModal} />}
//       {/* {showCart && <Cart />} */}
//     </>
//   );
// };

// export default Header;

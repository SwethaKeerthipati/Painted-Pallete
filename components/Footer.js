import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Twitter } from "@mui/icons-material";
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: swethakeerthipati@gmail.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: Berlin,Germany</p>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacyPolicy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/termsofservice"
                  className="text-gray-300 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul>
              <li></li>
              <li>
                <Link
                  href="https://twitter.com/Swetha9692"
                  target="_blank"
                  className="text-gray-300 hover:text-white"
                >
                  <TwitterIcon />
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/swethakeerthipati"
                  target="_blank"
                  className="text-gray-300 hover:text-white"
                >
                  <InstagramIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Painted Pallete. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

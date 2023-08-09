import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const googleMapsLink = "https://www.google.com/maps?q=Berlin,Germany";
const handleEmailClick = () => {
  window.location.href = "mailto:swethakeerthipati@gmail.com";
};

const Footer = () => {
  return (
    <div className="bg-gray-100 p-2 m-2">
      <div className="container mx-auto py-8 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col">
            <div className="text-lg font-bold mb-4">About</div>
            <div className="text-sm text-gray-600">
              Painted Palette is your one-stop destination for beautiful and
              unique artworks. We provide a platform for artists to showcase
              their talent and sell their masterpieces to art enthusiasts
              worldwide. Join us in celebrating creativity and supporting the
              art community.
            </div>
          </div>
          <div className="col">
            <div className="text-lg font-bold mb-4">Contact</div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <FaLocationArrow className="text-gray-500 mr-2" />
                <Link
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-sm text-gray-600 hover:text-purple-600">
                    Berlin, Germany
                  </div>
                </Link>
              </div>
              <div className="flex items-center">
                <FaMobileAlt className="text-gray-500 mr-2" />
                <div
                  href="tel:1234567890"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Phone: +1 (123) 456-7890
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-gray-500 mr-2" />
                <div
                  onClick={handleEmailClick}
                  className="text-sm text-gray-600 hover:text-purple-600 underline"
                >
                  swethakeerthipati@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-lg font-bold mb-4">Categories</div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-600 cursor-pointer hover:text-purple-600">
                Cute
              </span>
              <span className="text-sm text-gray-600 cursor-pointer hover:text-purple-600">
                Acrylic
              </span>
              <span className="text-sm text-gray-600 cursor-pointer hover:text-purple-600">
                Random
              </span>
              <span className="text-sm text-gray-600 cursor-pointer hover:text-purple-600">
                Pencil
              </span>
              <span className="text-sm text-gray-600 cursor-pointer hover:text-purple-600">
                Nature
              </span>
              <span className="text-sm text-gray-600 cursor-pointer hover:text-purple-600">
                Mandala
              </span>
            </div>
          </div>
          <div className="col">
            <div className="text-lg font-bold mb-4">Pages</div>
            <div className="flex flex-col gap-2">
              <Link href="/">
                <div className="text-sm text-gray-600 hover:text-purple-600">
                  Home
                </div>
              </Link>
              <Link href="/faq" target="_blank">
                <div className="text-sm text-gray-600 hover:text-purple-600">
                  FAQ
                </div>
              </Link>
              <Link href="/privacyPolicy" target="_blank">
                <div className="text-sm text-gray-600 hover:text-purple-600">
                  Privacy Policy
                </div>
              </Link>
              <Link href="/returns" target="_blank">
                <div className="text-sm text-gray-600 hover:text-purple-600">
                  Returns
                </div>
              </Link>
              <Link href="/termsofservice" target="_blank">
                <div className="text-sm text-gray-600 hover:text-purple-600">
                  Terms & Conditions
                </div>
              </Link>
              <Link href="/contact" target="_blank">
                <div className="text-sm text-gray-600 hover:text-purple-600">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 border-t border-gray-900 py-4 px-4 md:px-0 text-sm text-black text-center">
        &copy; Painted Palette {currentYear}. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

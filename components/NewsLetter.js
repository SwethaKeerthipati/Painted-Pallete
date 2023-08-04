import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Newsletter = () => {
  return (
    <div
      className="w-full h-96 flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("../products/images.jpg")` }}
    >
      <div className="newsletter-content text-center mx-auto">
        <span className="small-text text-gray-500 uppercase mb-4">
          Newsletter
        </span>
        <h2 className="big-text text-2xl md:text-4xl text-white font-semibold mb-6">
          Sign up for the latest updates and offers
        </h2>
        <div className="form flex flex-col md:flex-row justify-center gap-2 mb-3">
          <input
            type="text"
            placeholder="Email Address"
            className="w-48 md:w-72 h-10 border border-gray-200 rounded px-3 outline-none text-base"
          />
          <button className="w-24 md:w-32 h-10 bg-purple-600 text-white font-semibold rounded border border-purple-600 hover:opacity-80 transition-opacity">
            Subscribe
          </button>
        </div>
        <span className="text text-sm text-gray-500 mb-4">
          Will be used in accordance with our Privacy Policy
        </span>
        <div className="social-icons flex gap-4 justify-center md:justify-center text-white">
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon w-8 h-8 flex items-center justify-center bg-black rounded-full">
              <FaLinkedinIn size={14} />
            </div>
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon w-8 h-8 flex items-center justify-center bg-black rounded-full">
              <FaTwitter size={14} />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/swethakeerthipati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon w-8 h-8 flex items-center justify-center bg-black rounded-full">
              <FaInstagram size={14} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <ul className="flex items-center justify-between space-x-4">
            <li>
              <a className="text-white hover:text-gray-300" href="#about">
                Home
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#connect">
                Contact
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#contact">
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 bottom-0 relative pb-0 mb-0 block">
//       <div className="flex justify-evenly  space-x-4 mb-6">
//         <MenuItem title="Home" />
//         <MenuItem title="About" />
//         <MenuItem title="Contact" />
//         <MenuItem title="Terms" />
//         <MenuItem title="Privacy Policy" />
//       </div>

//       <div className="flex justify-center space-x-4">
//         <SocialIcon
//           url="#"
//           iconSrc="path/to/instagram-icon.png"
//           alt="Instagram"
//         />
//         <SocialIcon url="#" iconSrc="path/to/gmail-icon.png" alt="Gmail" />
//         {/* Add more social media icons here */}
//       </div>

//       <div className="mt-6 text-center text-gray-500">
//         &copy; {new Date().getFullYear()} Your Company Name. All rights
//         reserved.
//       </div>
//     </footer>
//   );
// };

// const MenuItem = ({ title }) => {
//   return (
//     <div className="cursor-pointer">
//       <h2 className="text-gray-800 font-bold text-sm uppercase transition duration-300 hover:bg-green-500 hover:text-white p-2 rounded">
//         {title}
//       </h2>
//     </div>
//   );
// };

// const SocialIcon = ({ url, iconSrc, alt }) => {
//   return (
//     <a href={url} className="block" target="_blank" rel="noopener noreferrer">
//       <img
//         src={iconSrc}
//         alt={alt}
//         className="w-8 h-8 rounded-full hover:opacity-75"
//       />
//     </a>
//   );
// };

// export default Footer;

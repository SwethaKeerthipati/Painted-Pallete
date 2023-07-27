import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { BsSearchHeartFill } from "react-icons/ai";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="relative flex rounded-md  items-center">
      <div className="absolute inset-y-0 left-2.5 flex items-center">
        <AiOutlineSearch className="w-4 text-gray-600" />
      </div>
      <input
        className="p-2 pl-10 h-full flex-grow flex-shrink outline-none cursor-pointer sm:text-base text-sm rounded-lg bg-gray-200"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;

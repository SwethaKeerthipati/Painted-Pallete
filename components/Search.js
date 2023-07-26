import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    // <div className="p-5">
    //   <input
    //     type="text"
    //     placeholder="Search for Paintings"
    //     className="bg-gray-100 w-full py-2 px-4 rounded-xl"
    //     value={search}
    //     onChange={handleInputChange}
    //   />
    // </div>

    <div className="flex items-center gap-4 bg-white px-2 py-1 rounded-lg">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
        className="bg-gray-100 py-2 px-4 rounded-xl text-[#222] "
      />
    </div>
  );
};

export default Search;

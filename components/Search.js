import React, { useState } from "react";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Search for Paintings"
        className="bg-gray-100 w-full py-2 px-4 rounded-xl"
        value={search}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;

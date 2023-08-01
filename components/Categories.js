import React from "react";

const Categories = ({ categoryName, matchedCategory, setMatchedCategory }) => {
  const handleCategoryClick = (category) => {
    setMatchedCategory(category.toLowerCase());
  };

  return (
    <div className="flex mb-5">
      {categoryName.map((category) => (
        <div key={category} className="mr-6 p-2">
          <h2
            className={`py-2 px-6 bg-white text-center rounded hover-bg-blue-900 hover:text-white transition-all cursor-pointer ease-in-out duration-200 shadow ${
              matchedCategory.toLowerCase() === category.toLowerCase()
                ? "active-category"
                : ""
            }`}
            onClick={() => handleCategoryClick(category)}
            style={{ cursor: "pointer" }}
          >
            {category}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Categories;

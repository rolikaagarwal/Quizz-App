import React from "react";
import { useEffect, useState } from "react";
const Setting = () => {
  const [options, setOptions] = useState(null);
  const [selectCategory, setSelectCategory] = useState(" ");
  useEffect(() => {
    const apiUrl = "https://opentdb.com/api_category.php";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setOptions(response.trivia_categories);
      });
  }, [setOptions]);
  return (
    <>
      <div className="category">
        <h2>Select Category</h2>
        <select className="options-category"
          value={selectCategory}
          onChange={(e) => setSelectCategory(e.target.value)}
        >
          <option>All</option>
          {options &&
            options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default Setting;

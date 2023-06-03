import React from "react";
import { useEffect, useState } from "react";
const Setting = () => {
  const [options, setOptions] = useState(null);
  const [selectCategory, setSelectCategory] = useState(" ");
  const [difficulty, setDifficulty] = useState(" ");
  const [questionType, setquestionType] = useState(" ");
  const [numberofQuestions, setnumberofQuestions] = useState(" ");
  //   console.log(numberofQuestions)

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
        <select
          className="options-category"
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
      <div className="category">
        <h2>Difficulty Level</h2>
        <select
          className="options-category"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>All</option>
          <option>Easy</option>
          <option>Meduim</option>
          <option>Hard</option>
        </select>
      </div>
      <div className="category">
        <h2>Question Type</h2>
        <select
          className="options-category"
          value={questionType}
          onChange={(e) => setquestionType(e.target.value)}
        >
          <option>All</option>
          <option>Multiple Choice Question</option>
          <option>True/False</option>
        </select>
      </div>
      <div className="category">
        <h2>Number of Questions</h2>
        <input
          type="text"
          className="options-category"
          value={numberofQuestions}
          onChange={(e) => setnumberofQuestions(e.target.value)}
        />
      </div>
    </>
  );
};

export default Setting;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Setting = () => {
  const [options, setOptions] = useState(null);
  const questionCategory = useSelector(state => state.options.question_category);
  const questionDifficulty = useSelector(state => state.options.question_difficulty);
  const questionType = useSelector(state => state.options.question_type);
  const questionAmount = useSelector(state => state.options.amount_of_questions);

  const dispatch = useDispatch();

  useEffect(() => {
    const apiUrl = "https://opentdb.com/api_category.php";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setOptions(response.trivia_categories);
      });
  }, [setOptions, dispatch]);

  return (
    <>
      <div className="category">
        <h2>Select Category</h2>
        <select
          className="options-category" value={questionCategory}
          onChange={(e) => {dispatch({ type: 'CHANGE_CATEGORY', value: e.target.value })}}
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
          className="options-category" value={questionDifficulty}
          onChange={(e) => {dispatch({ type: 'CHANGE_DIFFICULTY', value: e.target.value })}}
        >
          <option>All</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
      <div className="category">
        <h2>Question Type</h2>
        <select
          className="options-category" value={questionType}
          onChange={(e) => {dispatch({ type: 'CHANGE_QUESTION_TYPE', value: e.target.value })}}
        >
          <option>All</option>
          <option>Multiple Choice Question</option>
          <option>True/False</option>
        </select>
      </div>
      <div className="category">
        <h2>Enter Number of Questions</h2>
        <input
          type="text"
          className="options-category" value={questionAmount}
          onChange={(e) => {dispatch({ type: 'CHANGE_NOOFQUESTIONS', value: e.target.value })}}
        />
      </div>
    </>
  );
};

export default Setting;

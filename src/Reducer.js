const initState = {
  options: {
    question_category: ``,
    question_difficulty: ``,
    question_type: ``,
    amount_of_questions: 10,
  },
  questions: []
};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.questions
      }
    case "CHANGE_CATEGORY":
      return {
        ...state,
        options: {
          ...state.options,
          question_category: action.value,
        },
      };
    case "CHANGE_DIFFICULTY":
      return {
        ...state,
        options: {
          ...state.options,
          question_difficulty: action.value,
        },
      };
    case "CHANGE_NOOFQUESTIONS":
      return {
        ...state,
        options: {
          ...state.options,
          amount_of_questions: action.value,
        },
      };
    case "QUESTION_TYPE":
      return {
        ...state,
        options: {
          ...state.options,
          question_type: action.value,
        },
      };
    default:
      return state;
  }
};

export default Reducer;

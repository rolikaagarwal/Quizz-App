import React from 'react';
import Reducer from './Reducer'
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import Settings from './components/Settings';
import Question from './components/Question';
import FinalScreen from './components/FinalScreen';
import './App.css';

// Create the Redux store
const store = createStore(Reducer);

function App() {
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.index);

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />;
  } else if (!questions.length) {
    component = <Settings />;
  } else {
    component = <FinalScreen />;
  }

  return (
    <div className="App">
      <div className="app-container">{component}</div>
    </div>
  );
}

function MainApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default MainApp;

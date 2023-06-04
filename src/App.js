import React from "react";
import "./App.css";
import Reducer from './Reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Setting from "./components/Settings";

const store = createStore(Reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="title">Quiz App</header>
        <Setting />
      </div>
    </Provider>
  );
}

export default App;

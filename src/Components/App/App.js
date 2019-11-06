import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import LessonsList from "../LessonsList/LessonsList";

function App() {
  return (
      <BrowserRouter>
        <Route exact path="/" component={LessonsList} />
      </BrowserRouter>
  );
}

export default App;

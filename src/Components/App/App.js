import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Route exact path="/" component={} />
        <Route extact path="/main" component={} />
      </BrowserRouter>
  );
}

export default App;

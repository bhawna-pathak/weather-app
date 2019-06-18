import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "../src/component/Main";
import About from "../src/component/About";
import Weather from "../src/component/Weather";

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Route path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Weather} />
          </div>
        </Router>
    </div>
  );
}

export default App;

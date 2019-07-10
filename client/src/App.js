import React, { Component } from "react";
import Main from "./Main/Main.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Main} />
      </Router>
    );
  }
}

export default App;

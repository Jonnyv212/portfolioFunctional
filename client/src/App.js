import React, { Component } from "react";
import Main from "./Main/Main.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";

import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;

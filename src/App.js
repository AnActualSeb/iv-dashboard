import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

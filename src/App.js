import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Timer from "./components/VolumeDecrementer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <Route exact path="/" render={props => <Timer startVolume="150" unit="mL" />} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

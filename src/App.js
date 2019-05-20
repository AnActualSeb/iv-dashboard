import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Handoff from "./views/Handoff";
// import Topheader from "./components/topHeader";
import Timer from "./components/Timer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/handoff" component={Handoff} />

          {/* <Route exact path="/" render={props => <Timer startVolume="100" />} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Timer from "./components/Timer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={Dashboard} />

          {/* <Route exact path="/" render={props => <Timer startVolume="100" />} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

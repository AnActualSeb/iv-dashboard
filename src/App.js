import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import DrugScreen from "./views/DrugScreen";
import BasicLayout from "./components/BasicLayout";
// import TopHeader from '../components/topHeader';

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          {/*This component being called in router means that it will always be on all of the pages.  Makes things a lot easier.*/}

          {/* <TopHeader /> */}

          <Route exact path="/" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import DrugCard from "../components/drugCard";
import "../styles/dashboard.css";
import data from "../data/drugData.json";

class Dashboard extends Component {
  makeCards() {
    var arr = [];
    for (var i = 0; i < data.length; i++) {
      arr.push(
        <DrugCard
          key={i}
          drugName={data[i]["Drug Name"]}
          dosage={data[i]["Dosage"]}
          dosageUnit={data[i]["Dosage Unit"]}
          rate={data[i]["Rate"]}
          rateUnit={data[i]["Rate Unit"]}
          location={data[i]["Brain"] + data[i]["Pump"]}
          color={data[i]["Drug Color Code"]}
          method={data[i]["Method"]}
        />
      );
      //if statement to get relevant information
    }
    return arr;
  }

  state = {};
  render() {
    return <div className="dashboard">{this.makeCards()}</div>;
  }
}

export default Dashboard;

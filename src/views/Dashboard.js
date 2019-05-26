import React, { Component } from "react";
import DrugCard from "../components/drugCard";
import "../styles/dashboard.css";
import data from "../data/VTBIData.json"
import pumpBrain from '../images/pumpBrain.png';
import TopHeader from "../components/topHeader.js";

class Dashboard extends Component {
  state = {}

  makeCards() {
    var arr = []
    let counter = 2;
    let counter2 = 100;
    for (var i = 0; i < data.length; i++) {
      counter++;
      arr.push(
        < DrugCard
          key={i}
          drugColor={data[i]["Drug Color Code"]}
          drugName={data[i]["Drug Name"]}
          dosage={data[i]["Dosage"]}
          dosageUnit={data[i]["Dosage Rate"]}
          rate={data[i]["Rate"]}
          rateUnit={data[i]["Rate Unit"]}
          location={data[i]["Brain"] + data[i]["Pump"]}
          color={data[i]["Drug Color Code"]}
          dilution={data[i]["Dilution"]}
          dilutionRate={data[i]["Dilution Rate"]}
          startingVolume={data[i]["Starting Volume"]}
          startingVolumeUnit={data[i]["Starting Volume Unit"]}
          vtbi={data[i]["VTBI 0 0sec"]}
          vtbiUnit={data[i]["VTBI Unit"]}
          vtbi10={data[i]["VTBI 1 10 10sec"]}
          vtbi20={data[i]["VTBI 2 20 10sec"]}
          vtbi30={data[i]["VTBI 3 30 10sec"]}
          vtbi40={data[i]["VTBI 4 40 10sec"]}
          vtbi50={data[i]["VTBI 5 50 10sec"]}
          vtbi60={data[i]["VTBI 6 60 10sec"]}
          vtbi70={data[i]["VTBI 7 70 10sec"]}
          vtbi80={data[i]["VTBI 8 80 10sec"]}
          vtbi90={data[i]["VTBI 9 90 10sec"]}
          vtbi100={data[i]["VTBI 10 100 10sec"]}
        />)

      if ((counter % 4) === 0) {
        arr.push(<img className='pumpBrain' src={pumpBrain} alt="Pump Brain" key={counter2} />)
        counter2++;
      }
    }
    return arr;
  }

  render() {
    return (
      <div className='dashboard'>
        <TopHeader />
        {this.makeCards()}
      </div>
    );
  }
}

export default Dashboard;
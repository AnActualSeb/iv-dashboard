import React, { Component } from "react";
import DrugCard from "../components/drugCard";
import "../styles/dashboard.css";
import data from "../data/drugData.json";
import pumpBrain from '../images/pumpBrain.png';
import TopHeader from "../components/TopHeader.js";

class Dashboard extends Component {
    makeCards() {
        var arr = []
        let counter = 2;
        let counter2 = 100;
        for (var i = 0; i < data.length; i++) {
            counter++;
            arr.push(
                < DrugCard
                    key={i}
                    drugName={data[i]["Drug Name"]}
                    dosage={data[i]["Dosage"]}
                    dosageUnit={data[i]["Dosage Rate"]}
                    rate={data[i]["Rate"]}
                    rateUnit={data[i]["Rate Unit"]}
                    location={data[i]["Brain"] + data[i]["Pump"]}
                    color={data[i]["Drug Color Code"]}
                    dilution={data[i]["Dilusion"]}
                    dilutionRate={data[i]["Dilusion Rate"]}
                    startingVolume={data[i]["Starting Volume"]}
                    startingVolumeUnit={data[i]["Starting Volume Unit"]}
                    vtbi={data[i]["VTBI"]}
                    vtbiUnit={data[i]["VTBI Unit"]}
                    method={data[i]["Method"]} />)
            if ((counter % 4) === 0) {
                arr.push(<img className='pumpBrain' src={pumpBrain} alt="Pump Brain" key={counter2} />)
                counter2++;
            }
        }
        return arr;
    }

    state = {}
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

import React, { Component } from "react";
import DrugCard from "../components/DrugCard";
import "../styles/Dashboard.css";
import data from "../data/VTBIData.json"
import pumpBrain from '../images/pumpBrain.png';
import lowBattery from '../images/lowBattery.png';
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
                    vtbi10={data[i]["VTBI 1 10sec"]}
                    vtbi20={data[i]["VTBI 2 20sec"]}
                    vtbi30={data[i]["VTBI 3 30sec"]}
                    vtbi40={data[i]["VTBI 4 40 sec"]}
                    vtbi50={data[i]["VTBI 5 50sec"]}
                    vtbi60={data[i]["VTBI 6 60sec"]}
                    vtbi70={data[i]["VTBI 7 70sec"]}
                    vtbi80={data[i]["VTBI 8 80 sec"]}
                    vtbi90={data[i]["VTBI 9 90 sec"]}
                    vtbi100={data[i]["VTBI 10 100 sec"]} />)

            if ((counter % 4) === 0) {
                arr.push(<img className='pumpBrain' src={pumpBrain} alt="Pump Brain" key={counter2} />)
                counter2++;
            }
            // uncomment for low battery alarm
            // else if ((counter % 4) === 0 & counter2 === 102) {
            //     arr.push(<img className='lowBattery' src={lowBattery} alt="Low Battery" key={counter2} />)
            //     counter2++;
            // }
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
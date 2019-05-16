import React, { Component } from 'react';
import DrugCard from '../components/drugCard';
import '../styles/dashboard.css';
import TopHeader from '../components/topHeader';
import data from "../data/drugData.json";
import pumpBrain from '../images/pumpBrain.png';

class Dashboard extends Component {
    makeCards() {
        var arr = []
        var counter = 2;
        for (var i = 0; i < data.length; i++) {
            counter++;
            arr.push(< DrugCard key={i} drugName={data[i]["Drug Name"]} dosage={data[i]["Dosage"]} dosageUnit={data[i]["Dosage Rate"]} rate={data[i]["Rate"]} rateUnit={data[i]["Rate Unit"]} location={data[i]["Brain"] + data[i]["Pump"]} color={data[i]["Drug Color Code"]} method={data[i]["Method"]} />)
            if ((counter % 4) === 0) {
                arr.push(<img className='pumpBrain' src={pumpBrain} alt="Pump Brain"></img>)
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
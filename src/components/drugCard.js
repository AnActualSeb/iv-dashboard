import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Validated from "../images/verifiedCheck.png";
import Guardrail from "../images/GuardRail.png";
import "../styles/drugCard.css";
import { isUserWhitespacable } from '@babel/types';

//still needs to reaspond to specific drug information
//Whole div is link, it should just be the drug card alone

class DrugCard extends Component {
    state = {
        backgroundColor: "#ffffff",
        border: "solid 4px green",
        status: "Active",
        statusColor: "#82d681",
        statusBorder: "1px solid green"
    }

    getDosage() {
        if (this.props.dosage !== null) {
            return <strong>{this.props.dosage}</strong>
        } else {
            return <div style={{ width: "35px" }}></div>
        }
    }

    getRate() {
        if (this.props.dosage === null) {
            return <strong>{this.props.rate}</strong>
        } else {
            return <p>{this.props.rate}</p>
        }
    }

    guardrail(drugName) {
        if (drugName === "Morphine") {
            return (
                <img style={{ height: "30px", width: "25px;" }} src={Guardrail} alt="guardrail indicator" />
            )
        }
    }

    getAlarm(alarmType) {
        if (alarmType === "occlusion") {
            this.setState({ backgroundColor: "#FFBBBB", border: "solid 4px red", status: "Occlusion", statusColor: "none", statusBorder: "none" })
        } else if (alarmType === "nearEnd") {
            this.setState({ backgroundColor: "#FEF59F", border: "solid 4px yellow", status: "Near End", statusColor: "none", statusBorder: "none" })
        } else if (alarmType === "paused") {
            this.setState({ statusColor: "#F8EE13", status: "Paused", statusBorder: "#F8EE13" })
        }

    }

    render() {
        return (
            //Uncomment Image to include verified checkmark after handoff mode
            <div className='cardContainer'>
                <Card style={{ width: '15rem', height: '11rem', backgroundColor: this.state.backgroundColor, border: this.state.border }}>

                    {/* <img src={Validated} alt="Validated Checkmark" /> */}

                    <Card.Title style={{ backgroundColor: "#" + this.props.color }}>
                        <p>{this.props.drugName}</p>
                    </Card.Title>
                    <Card.Body>
                        <div className='info'>
                            <div className='dosage'>
                                {this.getDosage()}
                                <h5>
                                    {this.props.dosageUnit}
                                </h5>
                            </div>

                            <div className='vtbi'>
                                <p>VTBI</p>
                                {this.props.vtbi}
                                <h5>
                                    {this.props.vtbiUnit}
                                </h5>
                            </div>

                            <div className='rate'>
                                {this.getRate()}
                                <h5>
                                    {this.props.rateUnit}
                                </h5>
                            </div>
                        </div>

                        <div className="guardrailAlarm">
                            {this.guardrail(this.props.drugName)}
                        </div>


                        <div className='status' style={{ background: this.state.statusColor, border: this.state.statusBorder }}>{this.state.status}</div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default DrugCard;
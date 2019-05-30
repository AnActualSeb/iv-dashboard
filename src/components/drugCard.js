import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Validated from "../images/verifiedCheck.png";
import Guardrail from "../images/GuardRail.png";
import Timer from "../components/Timer";
import data from "../data/VTBIData.json";
import "../styles/drugCard.css";


let date = new Date();
let startTime = date.getSeconds();

class DrugCard extends Component {
    state = {
        backgroundColor: "#ffffff",
        border: "solid 4px green",
        status: "Active",
        statusColor: "#82d681",
        statusBorder: "1px solid green",
        show: false,
        paused: false,
        hasRun: false
    }

    handleShow = () => {
        this.setState({ show: true })
    }

    handleClose = () => {
        this.setState({ show: false })
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

    isPaused() {
        if (this.props.drugName === "Dexmedetomidine") {
            return (
                <div className='vtbi'>
                    <p>VTBI</p>
                    25.7
                    <h5>{this.props.vtbiUnit}</h5>
                </div>
            )
        } else {
            return (
                <div className='vtbi'>
                    <p>VTBI</p>
                    <Timer startVolume={this.props.vtbi} volumeUnit={this.props.vtbiUnit} rateCalc={this.props.rate} />
                </div>
            )
        }
    }

    getAlarm(alarmType) {
        if (alarmType === "occlusion") {
            this.setState({ backgroundColor: "#FFBBBB", border: "solid 4px red", status: "Occlusion", statusColor: "#FFBBBB", statusBorder: "solid 1px red", hasRun: true })
        } else if (alarmType === "nearEnd") {
            this.setState({ border: "solid 4px #FFC046", status: "Near End", statusColor: "#FEF59F", statusBorder: "solid 1px #FFC046", hasRun: true })
        } else if (alarmType === "paused") {
            this.setState({ statusColor: "#FEF59F", border: "solid 4px #FFC046", status: "Paused", statusBorder: "solid 1px #FFC046", paused: true, hasRun: true })
        } else if (alarmType === "empty") {
            this.setState({ backgroundColor: "#FFBBBB", border: "solid 4px red", status: "Empty", statusColor: "#FFBBBB", statusBorder: "solid 1px red", hasRun: true })

        }
    }

    render() {
        // if (this.props.drugName === "Tranexamic Acid" & this.state.hasRun === false) {
        //     this.getAlarm("empty")
        // }

        // if (this.props.drugName === "EPINEPHrine" & this.state.hasRun === false) {
        //     this.getAlarm("occlusion")
        // }

        // if (this.props.drugName === "Dexmedetomidine" & this.state.hasRun === false) {
        //     this.getAlarm("paused")
        // }

        return (
            <>
                <Modal centered show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <div className="drugColor" style={{ backgroundColor: "#" + this.props.drugColor }}>
                            <strong>{this.props.drugName}</strong>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <td>
                                        {this.props.dosage !== null ? (
                                            <>
                                                <h4>Dosage</h4>
                                                <p><strong>{this.props.dosage}</strong></p>
                                                <h5>{this.props.dosageUnit}</h5>
                                            </>
                                        ) : (
                                                <></>
                                            )}
                                    </td>
                                    <td>
                                        {this.props.dilution !== null ? (
                                            <>
                                                <h4>Dilution</h4>
                                                <p>{this.props.dilution}</p>
                                                <h5>{this.props.dilutionRate}</h5>
                                            </>
                                        ) : (
                                                <></>
                                            )}

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Rate</h4>
                                        <p>{this.props.rate}</p>
                                        <h5>{this.props.rateUnit}</h5>
                                    </td>
                                    <td>
                                        <h4>VTBI</h4>
                                        <Timer startVolume={this.props.vtbi} volumeUnit={this.props.vtbiUnit} rateCalc={this.props.rate} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>


                <div className='cardContainer' onClick={this.handleShow}>
                    <Card style={{ width: '15rem', height: '11rem', backgroundColor: this.state.backgroundColor, border: this.state.border }}>

                        {/* Uncomment Image to include verified checkmark after handoff mode */}
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

                                {/* <div className='vtbi'>
                                    <p>VTBI</p>
                                    <Timer startVolume={this.props.vtbi} volumeUnit={this.props.vtbiUnit} rateCalc={this.props.rate} />
                                </div> */}

                                {this.isPaused()}

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
            </>
        );
    }
}

export default DrugCard;
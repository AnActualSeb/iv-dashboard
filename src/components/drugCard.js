import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";
import data from "../data/VTBIData.json";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Validated from "../images/verifiedCheck.png";
import Timer from "../components/Timer";
import "../styles/drugCard.css";

// still needs to respond to specific drug information
// whole div is link, it should just be the drug card alone

class DrugCard extends Component {
    state = {show: false};
    
    handleShow = () => {
        this.setState({show:true})
    }

    handleClose = () => {
        this.setState({show:false})
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

    render() {
        return (
            //Uncomment Image to include verified checkmark after handoff mode
            <>
            <Modal show={this.state.show} onHide={this.handleClose}>
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
                                        {/* This will become a timer component that will decrement over time */}
                                        <h4>VTBI</h4>
                                        <Timer startVolume={this.props.vtbi} volumeUnit={this.props.vtbiUnit} rateCalc={this.props.rate}/>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
            </Modal>
            <div className='cardContainer' onClick={this.handleShow}>
                <Card style={{ width: '15rem', height: '11rem' }}>

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

                        <div className='status'>Active</div>
                    </Card.Body>
                </Card>
            </div>
            </>
        );
    }
}

export default DrugCard;
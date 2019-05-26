import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ChainedModal from "./chainedModal";
import data from "../data/VTBIData.json";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Timer from "../components/Timer"
import {Route, Switch, Link} from "react-router-dom";
import '../styles/topHeader.css';

class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            visible: false,
            varified: false
        };
    }

    getDosage(value, unit) {
        if (value !== null) {
            return (
                <td className="dosage">
                    <h4>Dosage</h4>
                    <p>{value}</p>
                    <h5>{unit}</h5>
                </td>
            )
        } else {
            return null
        }
    }

    getDilution(dilution, unit) {
        if (dilution !== null) {
            return (
                <td>
                    <h4>Dilution</h4>
                    <p>{dilution}</p>
                    <h5>{unit}</h5>
                </td>
            )
        } else {
            return null
        }
    }

    getRate(dosage, rate, unit) {
        if (dosage === null) {
            return (
                <td className="rate">
                    <h4>Rate</h4>
                    <p>{rate}</p>
                    <h5>{unit}</h5>
                </td>
            )
        } else {
            return (
                <td>
                    <h4>Rate</h4>
                    <p>{rate}</p>
                    <h5>{unit}</h5>
                </td>
            )
        }
    }

    getDrugCards() {
        let arr = [];
        let modalName;
        for (var i = 0; i < data.length; i++) {
            modalName = "DrugModal" + { i }
            arr.push(
                modalName = ({ data, verified, onClickNext, onClickBack, step, ...rest }) => (
                    <Modal centered {...rest} >
                        <Modal.Header closeButton>
                            <div className="drugColor" style={{ backgroundColor: "#" + data[step]["Drug Color Code"] }}>
                                <strong>{data[step]["Drug Name"]}</strong>
                            </div>

                        </Modal.Header>
                        <Modal.Body>
                            <Table borderless>
                                <tbody>
                                    <tr>
                                        {this.getDosage(data[step]["Dosage"], data[step]["Dosage Rate"])}

                                        {this.getDilution(data[step]["Dilution"], data[step]["Dilution Rate"])}

                                    </tr>
                                    <tr>
                                        {this.getRate(data[step]["Dilution"], data[step]["Rate"], data[step]["Rate Unit"])}
                                        <td>
                                            <h4>VTBI</h4>
                                            <Timer startVolume={data[step]["VTBI 0 0sec"]} volumeUnit={data[step]["VTBI Unit"]} rateCalc={data[step]["Rate"]} />
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Time Remaining</h4>
                                            <p>{data[step]["Starting Volume"]} min</p>
                                        </td>
                                        <td>
                                            <h4>Location</h4>
                                            <p>{data[step]["Brain"]}{data[step]["Pump"]}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={onClickNext}>Previous</Button>

                            <Button variant="success" onClick={onClickNext}>Verify</Button>
                        </Modal.Footer>
                    </Modal >
                )
            )
        }
        return arr;

    }

    render() {
        let modalList = this.getDrugCards();
        const buttonText = this.state.visible ? <strong>Reset</strong> : <strong>Handoff Mode</strong>;

        return (
            <div className='topHeader'>
                <div className='patientName'>
                    <strong>Patient:</strong>
                    <p> Scott, Michael</p>
                </div>

                <div className="mrn">
                    <strong>MRN:</strong>
                    <p> 176398</p>
                </div>

                <div className="weight">
                    <strong>Weight:</strong>
                    <p> 13.5kg</p>
                </div>

                <div className="mode">
                    <strong>Mode:</strong>
                    <p>AN</p>
                </div>

                {this.state.visible ? <ChainedModal modalList={modalList} /> : null}

                <Button
                    variant="light"
                    onClick={() => { this.setState({ visible: !this.state.visible }) }}>{buttonText}
                </Button>
            </div>
        );
    }
}

export default TopHeader;

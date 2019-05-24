import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ChainedModal from "./chainedModal";
import data from "../data/drugData.json";
import Modal from "react-bootstrap/Modal";
import '../styles/topHeader.css';

class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            visible: false
        };
    }

    resetVisible() {
        this.setState({ visible: false })
    }

    getDrugCards() {
        let arr = [];
        let modalName;
        for (var i = 0; i < data.length; i++) {
            modalName = "DrugModal" + { i }
            arr.push(
                modalName = ({ data, onClickNext, step, ...rest }) => (
                    < Modal centered {...rest} >
                        <Modal.Header closeButton>
                            <div className="drugColor" style={{ backgroundColor: "#" + data[step]["Drug Color Code"] }}>
                                <strong>{data[step]["Drug Name"]}</strong>
                            </div>

                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                Drug Location: {data[step]["Brain"]}{data[step]["Pump"]}
                            </div>

                            <div>
                                VTBI: {data[step]["VTBI"]}{data[step]["VTBI Unit"]}
                            </div>

                            <div>
                                Vol Left: {data[step]["Starting Volume"]}{data[step]["Starting Volume Unit"]}
                            </div>

                            <div>
                                Time Remaining: {data[step]["Starting Volume"]}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
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
                    onClick={() => { this.setState({ visible: !this.state.visible }); }}><strong>Handoff Mode</strong>
                </Button>

                <Route path="/handoff" component={Handoff} />
            </div>
        );
    }
}

export default TopHeader;

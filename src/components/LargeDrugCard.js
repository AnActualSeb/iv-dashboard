import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

import ""

class Popup extends Component {
    state = {
        drugList: ["Drug 1", "Drug 2", "Drug 3"],
        index: 0
    }

    increment() {
        this.setState({ index: this.state.index + 1 });
    }

    render() {


        return (

            < Modal centered >
                <Modal.Header closeButton>
                    {/* <div className="drugColor" style={{ backgroundColor: "#" + data[step]["Drug Color Code"] }}>
                        <strong>{data[step]["Drug Name"]}</strong>
                    </div> */}

                </Modal.Header>
                <Modal.Body>
                    <Table borderless>
                        <tbody>
                            <tr>
                                {/* {this.getDosage(data[step]["Dosage"], data[step]["Dosage Rate"])}

                                        {this.getDilution(data[step]["Dilution"], data[step]["Dilution Rate"])} */}

                            </tr>
                            <tr>
                                {/* {this.getRate(data[step]["Dilution"], data[step]["Rate"], data[step]["Rate Unit"])} */}
                                <td>
                                    <h4>VTBI</h4>
                                    {/* <p>{data[step]["VTBI"]}</p>
                                            <h5>{data[step]["VTBI Unit"]}</h5> */}
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <h4>Time Remaining</h4>
                                    {/* <p>{data[step]["Starting Volume"]} min</p> */}
                                </td>
                                <td>
                                    <h4>Location</h4>
                                    {/* <p>{data[step]["Brain"]}{data[step]["Pump"]}</p> */}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal >
        );
    }
}

export default Popup;
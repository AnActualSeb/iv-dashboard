import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.drugName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.drugList[this.state.index]}
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>Previous</Button>
                        <Button variant="success">Verify</Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        );
    }
}

export default Popup;
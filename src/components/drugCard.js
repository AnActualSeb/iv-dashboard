import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Validated from "../images/verifiedCheck.png";
import "../styles/drugCard.css";

// still needs to respond to specific drug information
// whole div is link, it should just be the drug card alone

class DrugCard extends Component {

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

    handleCardClick() {
        // console.log("in handleCardClick")
        
    }

    render() {
        return (
            //Uncomment Image to include verified checkmark after handoff mode
            <div className='cardContainer' onClick={this.handleCardClick}>
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
        );
    }
}

export default DrugCard;
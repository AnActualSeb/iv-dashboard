import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import "../styles/drugCard.css";

//still needs to reaspond to specific drug information
//Whole div is link, it should just be the drug card alone

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

    render() {
        return (
            <div className='cardContainer'>
                <Card style={{ width: '15rem', height: '11rem' }}>
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
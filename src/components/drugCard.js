import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import "../styles/drugCard.css";

//still needs to reaspond to specific drug information
//Whole div is link, it should just be the drug card alone

class DrugCard extends Component {

    getDosage() {
        if (this.props.dosage !== null) {
            return <strong>{this.props.dosage}</strong>
        } else {
            return this.props.dosage
        }
    }

    getRate() {
        if (this.props.dosage === null) {
            return <strong>{this.props.rate}</strong>
        } else {
            return this.props.rate
        }
    }

    render() {
        return (
            <div className='cardContainer'>
                <Card style={{ width: '18rem', height: '11rem' }}>
                    <Card.Title style={{ backgroundColor: "#" + this.props.color }}>
                        <p>{this.props.drugName}</p>
                    </Card.Title>
                    <Card.Body>
                        <div className='info'>
                            <div className='dosage'>
                                {this.getDosage()}
                                {/* {this.props.dosage} */}
                                <h5>
                                    {this.props.dosageUnit}
                                </h5>
                            </div>

                            <div className='rate'>
                                {this.getRate()}
                                {/* {this.props.rate} */}
                                <h5>
                                    {this.props.rateUnit}
                                </h5>
                            </div>
                        </div>

                        <div className='status'>Active</div>
                    </Card.Body>

                </Card>

                {/* <div className="drugCard">
                        <div className="drugLabel">
                            <b>Milrinone</b>
                        </div>
                        <div className="content">
                            <div className="dosage">
                                <b>0.05</b>
                                <p>mcg/kg/hr</p>
                            </div>
                            <div className="rate">
                                <b>0.10</b>
                                <p>mL/hr</p>
                            </div>
                        </div>
                        <div className='status'>Active</div>
                    </div> */}
            </div>
        );
    }
}

export default DrugCard;
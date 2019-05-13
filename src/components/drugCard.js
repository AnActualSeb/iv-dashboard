import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../styles/drugCard.css";

//still needs to reaspond to specific drug information
//Whole div is link, it should just be the drug card alone

class DrugCard extends Component {

    getDosage() {
        if (this.props.dosage !== "") {
            return <strong>{this.props.dosage}</strong>
        }
    }

    getRate() {
        if (this.props.dosage === "") {
            return <strong>{this.props.rate}</strong>
        }
    }

    render() {
        return (
            <div className='cardContainer'>
                {/* <Link to={{
                    pathname: "/drugScreen",
                    search: "?",
                    state: this.props
                }}> */}
                {console.log("#" + this.props.color)}
                <Card style={{ width: '18rem' }}>
                    <Card.Title style={{ backgroundColor: "#" + this.props.color }}>
                        {this.props.drugName}
                    </Card.Title>
                    <Card.Body>
                        <div className='dosage'>
                            {/* {this.getDosage()} */}
                            {this.props.dosage}
                            <h5>
                                {this.props.dosageUnit}
                            </h5>
                        </div>

                        <div className='rate'>
                            {/* {this.getRate()} */}
                            {this.props.rate}
                            <h5>
                                {this.props.rateUnit}
                            </h5>
                        </div>
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
                {/* </Link> */}
            </div>
        );
    }
}

export default DrugCard;
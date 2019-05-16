import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../styles/drugCard.css";

//still needs to reaspond to specific drug information
//Whole div is link, it should just be the drug card alone

class DrugCard extends Component {
  /*Testing out state for the handoff functionality here, need to match class component syntax to functional example
  CLASS:
  state = {
    zIndex: 0,
    children
  };

  FUNCTIONAL:

  const cardStyles = {
    background: "whitesmoke",
    borderRadius: 3,
    width: "250px",
    height: "250px",
    cursor: "pointer",
    userSelect: "none",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0
  };

  const drugCard = ({ zIndex = 0, children}) => (
    <div style = {{ ...cardStyles, zIndex }}>
      {children}
    </div>
  );


  */

  getDosage() {
    if (this.props.dosage !== null) {
      return <strong>{this.props.dosage}</strong>;
    } else {
      return this.props.dosage;
    }
  }

  getRate() {
    if (this.props.dosage === null) {
      return <strong>{this.props.rate}</strong>;
    } else {
      return this.props.rate;
    }
  }

  render() {
    return (
      <div className="cardContainer">
        <Card style={{ width: "15rem", height: "11rem" }}>
          <Card.Title style={{ backgroundColor: "#" + this.props.color }}>
            <p>{this.props.drugName}</p>
          </Card.Title>
          <Card.Body>
            <div className="info">
              <div className="dosage">
                {this.getDosage()}
                <h5>{this.props.dosageUnit}</h5>
              </div>

              <div className="rate">
                {this.getRate()}
                <h5>{this.props.rateUnit}</h5>
              </div>
            </div>

            <div className="status">Active</div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default DrugCard;

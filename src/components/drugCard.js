import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/drugCard.css";

class DrugCard extends Component {
  getColor() {}

  render() {
    return (
      <div className="cardContainer">
        <Link
          to={{
            pathname: "/basicLayout",
            search: "?",
            state: this.props
          }}
        >
          <div className="drugCard">
            <div className="drugLabel">
              <b>Milrinone</b>
            </div>
            <div className="content">
              <div className="dosage">
                <b>0.05</b>
                <br />
                mcg/kg/hr
              </div>
              <div className="rate">
                <b>0.10</b>
                <br />
                mL/hr
              </div>
            </div>
            <div className="status">Active</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default DrugCard;

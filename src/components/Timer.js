/* This component is a "countdown" timer that will receive values from VTBIData.json
   and simulate the passing of time and decrease the initial volume of a drug based on
   the infusion rate (defined by sequential values in VTBIData.json)*/


//Timer< startVolume={this.props.vtbi} volumeUnit={this.props.vtbiUnit} rateCalc={this.props.rate}>
import React, { Component } from "react";
import data from "../data/VTBIData.json"

class Timer extends Component {
  constructor(props) {
    super(props);
    // setting initial state as a default volume value for a drug
    this.state = {
      volume: 50,
      unit: "mL"
    };
  }

  render() {
    const { volume, unit } = this.state;
    return (
      <div>
        <p>{volume}</p>
        <h5>{unit}</h5>
      </div>
    );
  }

  componentDidMount() {
    const { startVolume, volumeUnit, rateCalc } = this.props;
    this.setState({
      volume: startVolume,
      unit: volumeUnit
    });
    this.myInterval = setInterval(() => {
      // making sure that we don't hit negative values
      if (this.state.volume - (0.25946666 * rateCalc) > 0.0) {
        this.setState(prevState => ({
          volume: (prevState.volume - (0.25946666 * rateCalc)).toFixed(2)
        }));
      } else {
        // to ensure that all IV pump channels hit 0
        this.setState({ volume: 0.000 })
        clearInterval(this.myInterval);
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default Timer;

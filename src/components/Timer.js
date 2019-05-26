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
        <p>{volume} {unit}</p>
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
      if (this.state.volume > 0.0) {
        this.setState(prevState => ({
          volume: (prevState.volume - (0.25946666*rateCalc)).toFixed(3)
        }));
      } else {
        clearInterval(this.myInterval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default Timer;

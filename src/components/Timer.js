/* This component is a "countdown" timer that will receive values from drugData.json
   and simulate the passing of time and decrease the initial volume of a drug based on
   the infusion rate (defined by sequential values in drugData.json)*/



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
        <p>Current Volume: {volume} {unit}</p>
      </div>
    );
  }

  componentDidMount() {
    const { startVolume, volumeUnit } = this.props;
    this.setState({
      volume: startVolume,
      unit: volumeUnit
    });
    this.myInterval = setInterval(() => {
      if (this.state.volume > 0) {
        this.setState(prevState => ({
          volume: prevState.volume - 1
        }));
      } else {
        clearInterval(this.myInterval);
      }
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default Timer;

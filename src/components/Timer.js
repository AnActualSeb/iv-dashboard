import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 50
    };
  }

  render() {
    const { volume } = this.state;
    return (
      <div>
        <h1>Current Volume: {volume}</h1>
      </div>
    );
  }

  componentDidMount() {
    const { startVolume } = this.props;
    this.setState({
      volume: startVolume
    });
    this.myInterval = setInterval(() => {
      if (this.state.volume > 0) {
        this.setState(prevState => ({
          volume: prevState.volume - 5
        }));
      } else {
        clearInterval(this.myInterval);
      }
    }, 50);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default Timer;

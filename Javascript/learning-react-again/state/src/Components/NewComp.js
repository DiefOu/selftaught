import React, { Component } from "react";
import bellA from "./BellOn.png";
import bellB from "./BellOff.png";

class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subcribe to DiefOu",
      sub: "Subscribe",
      imageURL: bellA,
    };
  }
  styles = {
    fontStyle: "italic",
    color: "purple",
  };
  ButtonChange = () => {
    this.setState({
      message: "Hit the bell icon to never miss a video",
      sub: "Subscribed",
    });
  };
  imageChange = () => {
    this.setState({
      imageURL: bellB,
      message: "Thank you! Have a nice day",
    });
  };
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p />
        <img
          style={{ width: "30px", height: "30px" }}
          src={this.state.imageURL}
          onClick={this.imageChange}
          alt=""
        />
      </div>
    );
  }
}

export default NewComp;

import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "KEKW",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "KEKW",
      });
    }, 3000);
  }

  render() {
    console.log("Parent component render");
    return (
      <div>
        I'm the parent
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;

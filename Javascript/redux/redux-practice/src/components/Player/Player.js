import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from "../../store/actions/actionTypes";

class Player extends Component {

  render() {
    console.log("this.props of player", this.props.id, ":", this.props)

    const changeColor = e => {
      console.log("e.target.value:", e.target.value);
      this.props.updateColor(this.props.id, e.target.value)
    };

    return (
      <div>
        <h1 style={{ backgroundColor: this.props.currColor }}>Player {this.props.id + 1}</h1>
        <select
          id={"player" + this.props.id}
          onChange={changeColor}
          defaultValue={this.props.currColor}>
          <option value="Red" disabled={this.props.usedColors['Red']}>Red</option>
          <option value="Orange" disabled={this.props.usedColors['Orange']}>Orange</option>
          <option value="Yellow" disabled={this.props.usedColors['Yellow']}>Yellow</option>
          <option value="Green" disabled={this.props.usedColors['Green']}>Green</option>
          <option value="Blue" disabled={this.props.usedColors['Blue']}>Blue</option>
          <option value="Indigo" disabled={this.props.usedColors['Indigo']}>Indigo</option>
          <option value="Violet" disabled={this.props.usedColors['Violet']}>Violet</option>
        </select>
      </div>
    );
  }
}

//getters - this.props.(variablename)
const mapStateToProps = state => {
  return {
    //    colors: [state.colorReducer.colors[0], state.colorReducer.colors[1], state.colors.colors[2], state.colors.colors[3]]
    playerColors: state.colorReducer.playerColors,
    usedColors: state.colorReducer.usedColors
  };
};

//setters
const mapDispatchToProps = dispatch => {
  return {
    updateColor: (player, color) => dispatch(
      {
        type: actionType.UPDATE,
        player: player,
        color: color
      }
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
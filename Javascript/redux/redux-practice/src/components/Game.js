import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Player from './Player/Player.js'

class Game extends Component {
  render() {
    console.log("this.props for entire game", this.props)
    const propItems = this.props.colors
    return (
      <div>
        <Player id={propItems.playerColors[0].id} currColor={propItems.playerColors[0].color} />
        <Player id={propItems.playerColors[1].id} currColor={propItems.playerColors[1].color} />
        <Player id={propItems.playerColors[2].id} currColor={propItems.playerColors[2].color} />
        <Player id={propItems.playerColors[3].id} currColor={propItems.playerColors[3].color} />
      </div>
    )
  }
}

Game.propTypes = {
  colors: PropTypes.object
};

//getters - this.props.(variablename)
const mapStateToProps = state => {
  return {
    //    colors: [state.colorReducer.colors[0], state.colorReducer.colors[1], state.colors.colors[2], state.colors.colors[3]]
    colors: state.colorReducer
  };
};

//setters
// const mapDispatchToProps = dispatch => {
//   return {
//     onUpdateColor: (player, color) => dispatch(updateColor(player, color))
//   }
// }

export default connect(mapStateToProps, null)(Game);

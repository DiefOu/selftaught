import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateColor } from '../store/actions/colorActions';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      P1color: '',
      P2color: '',
      P3color: '',
      P4color: ''
    };

    this.onChangeP1 = this.onChangeP1.bind(this);
    this.onChangeP2 = this.onChangeP2.bind(this);
    this.onChangeP3 = this.onChangeP3.bind(this);
    this.onChangeP4 = this.onChangeP4.bind(this);
  }

  onChangeP1(e) {
    this.props.onUpdateColor(this.state.P1color)
  }
  onChangeP2(e) {
    this.props.onUpdateColor(this.state.P2color)
  }
  onChangeP3(e) {
    this.props.onUpdateColor(this.state.P3color)
  }
  onChangeP4(e) {
    this.props.onUpdateColor(this.state.P4color)
  }

  render() {
    return (
      <div>
        <h1 className="p1">P1</h1>
        <select id="color1" onChange={this.onChangeP1} value={this.state.P1color}>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Indigo">Indigo</option>
          <option value="Violet">Violet</option>
        </select>

        <h1 className="p2">P2</h1>
        <select id="color2" onChange={this.onChangeP2} value={this.state.P2color}>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Indigo">Indigo</option>
          <option value="Violet">Violet</option>
        </select>

        <h1 className="p3">P3</h1>
        <select id="color3" onChange={this.onChangeP3} value={this.state.P3color}>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Indigo">Indigo</option>
          <option value="Violet">Violet</option>
        </select>

        <h1 className="p4">P4</h1>
        <select id="color4" onChange={this.onChangeP4} value={this.state.P4color}>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Indigo">Indigo</option>
          <option value="Violet">Violet</option>
        </select>
      </div>
    )
  }
}

Game.propTypes = {
  updateColor: PropTypes.func.isRequired,
  colors: PropTypes.object
};

const mapStateToProps = state => ({
  P1color: state.colors.P1color,
  P2color: state.colors.P2color,
  P3color: state.colors.P3color,
  P4color: state.colors.P4color,
});

const mapDispatchToProps = dispatch => {
  return {
    onUpdateColor: (colors) => dispatch(updateColor(colors))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

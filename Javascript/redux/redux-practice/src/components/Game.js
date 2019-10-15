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

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const colors = {
      P1color: document.getElementsById("color1").value,
      P2color: document.getElementsById("color2").value,
      P3color: document.getElementsById("color3").value,
      P4color: document.getElementsById("color4").value
    }

    this.props.updateColor(colors);
  }

  render() {
    return (
      <div>
        <h1 id="p1">P1</h1>
        <select id="color1">
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Indigo">Indigo</option>
          <option value="Violet">Violet</option>
        </select>

        <h1 id="p2">P2</h1>
        <select id="color2">
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Indigo">Indigo</option>
          <option value="Violet">Violet</option>
        </select>

        <h1 id="p3">P3</h1>
        <select id="color3">
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Indigo">Indigo</option>
          <option value="Violet">Violet</option>
        </select>

        <h1 id="p4">P4</h1>
        <select id="color4">
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
  updateColor: PropTypes.func.isRequired
};

export default connect(null, { updateColor })(Game);

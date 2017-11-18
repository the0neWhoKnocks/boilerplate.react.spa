import React, { Component } from 'react';
import styles from './styles';

class Spinner extends Component {
  render() {
    return (
      <div
        className="spinner"
        data-label={ this.props.label }
        { ...styles }
      >
        <div className="spinner__icon"></div>
      </div>
    );
  }
}

export default Spinner;

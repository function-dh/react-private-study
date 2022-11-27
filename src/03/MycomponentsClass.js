import React, { Component } from "react";
import PropTypes from "prop-types";

class MycomponentsClass extends Component {
  static defaultProps = {
    name: "기본 이름",
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name, children } = this.props;
    return (
      <div>
        <div>이름은 {name} 입니다.</div>
        <p>{children}</p>
      </div>
    );
  }
}

export default MycomponentsClass;

import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSampleClass extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  input = React.createRef();

  handleFocus = (e) => {
    this.input.current.focus();
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    if(!this.state.validated){
      this.handleFocus()
    }
  };

  render() {
    return (
      <div>
        <input
          type="password"
          ref={this.input}
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "fail"
              : ""
          }
        />
        <button className={"btn"} onClick={this.handleButtonClick}>
          검증하기
        </button>
      </div>
    );
  }
}

export default ValidationSampleClass;

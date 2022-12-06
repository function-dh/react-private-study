import React, { Component } from "react";

class LifeCycleSampleClass extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("shouldComponentUpdate", nextProps, nextState, nextContext);
    return nextState.number % 10 !== 4;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 전 색상", snapshot);
    }
  }

  render() {
    console.log("render");
    const { number, color } = this.state;
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* {this.props.missing.value} 의도적인 에러발생 */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {number}
        </h1>
        <p>color: {color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSampleClass;

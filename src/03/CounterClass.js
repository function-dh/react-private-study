import React, { Component } from "react";

class CounterClass extends Component {
  state = {
    number: 1,
    fixNumber: 10,
  };

  render() {
    const { number, fixNumber } = this.state;
    return (
      <div>
        <h1>{number} : 변경 되는 숫자</h1>
        <h2>{fixNumber} : 고정 숫자</h2>
        <button type={"button"} onClick={() => {
          this.setState({number : number + 1})

          // 객체 대신 함수를 인자로 전달하여 state값의 변경을 바로 할 수 있다.
          // prevState - 기존 상태
          // props - 현재 지니고 있는 props
          this.setState((prevState, props) => {
            return {
              number: prevState.number + 1
            }
          }, () => {
            console.log('number state 변경 완료')
          })
        }}>
          클릭 시 숫자 상승
        </button>
      </div>
    );
  }
}

export default CounterClass;

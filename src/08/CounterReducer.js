import React, { useReducer } from "react";

function reducer(state, action) {
  // action type에 따른 분기 처리
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + action.step };
    case "DECREMENT":
      return { value: state.value - action.step };
    default:
      // 기존 상태 반환
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>현재 카운터 값은 {state.value}</p>
      <button onClick={() => dispatch({ type: "INCREMENT", step: 1 })}>
        더하기
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", step: 1 })}>
        빼기
      </button>
    </div>
  );
};

export default CounterReducer;

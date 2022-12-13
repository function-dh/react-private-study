import React, { useEffect, useState, useReducer } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("렌더링 완료");
    console.log(value, name);
    return () => {
      console.log("clean up");
      console.log(name);
    };
  }, []);

  return (
    <div>
      <p>현재 카운터 값은 {value}</p>
      <p>현재 이름은 {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setValue(value + 1)}>더하기</button>
      <button onClick={() => setValue(value - 1)}>빼기</button>
    </div>
  );
};

export default Counter;

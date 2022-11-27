import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("입장 하시겠습니까?");
  const enter = () => setMessage("안녕하세요");
  const leave = () => setMessage("안녕히가세요");

  const [color, setColor] = useState("black");
  const colorChangeRed = () => setColor("red");

  return (
    <div>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={enter}>입장</button>
      <button onClick={leave}>퇴장</button>
      <button onClick={colorChangeRed}>글씨 색 변경</button>
    </div>
  );
};

export default Say;

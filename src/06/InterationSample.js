import React, { useState } from "react";

const InterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "눈" },
    { id: 3, text: "얼음" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const inputName = (e) => setInputText(e.target.value);
  const addText = () => {
    setNames(names.concat({ id: nextId, text: inputText }));
    setInputText("");
    setNextId(nextId + 1);
  };
  const onRemove = (id) => {
    setNames(names.filter((data) => data.id !== id));
  };

  const nameList = names.map((data, index) => (
    <li onDoubleClick={() => onRemove(data.id)} key={data.id}>
      {data.text}
    </li>
  ));

  return (
    <div>
      <input value={inputText} onChange={inputName} type="text" />
      <button onClick={addText}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default InterationSample;

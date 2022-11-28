import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;

  const handleTextChange = (e) => {
    const payload = {
      ...form,
      [e.target.name] : e.target.value
    }
    setForm(payload)
  };
  const handleMessageSubmit = () => {
    alert(username + ":" + message);
    setForm({
      username: '',
      message: ''
    });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleMessageSubmit();
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={handleTextChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력 해보세요"
        value={message}
        onChange={handleTextChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleMessageSubmit}>확인</button>
    </div>
  );
};

export default EventPractice;

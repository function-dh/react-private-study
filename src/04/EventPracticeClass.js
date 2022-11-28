import React, { Component } from "react";

class EventPracticeClass extends Component {
  state = {
    username: "",
    message: "",
  };

  handleMessageChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleMessageSubmit = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({ username: "", message: "" });
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") this.handleMessageSubmit();
  };

  render() {
    const { message, username } = this.state;

    return (
      <React.Fragment>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={this.handleMessageChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력 해보세요"
          value={message}
          onChange={this.handleMessageChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleMessageSubmit}>확인</button>
      </React.Fragment>
    );
  }
}

export default EventPracticeClass;

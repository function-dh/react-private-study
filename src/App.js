import "./App.css";
import MyComponents from "./03/MyComponents";
import MyComponentsClass from "./03/MyComponentsClass";
import CounterClass from "./03/CounterClass";
import Say from "./03/Say";
import EventPracticeClass from "./04/EventPracticeClass";
import EventPractice from "./04/EventPractice";
import ValidationSampleClass from "./05/ValidationSampleClass";
import React, { Component } from "react";
import InterationSample from "./06/InterationSample";

// class App extends Component {
//   validation = React.createRef();
//
//   render() {
//     return (
//       <div>
//         <ValidationSampleClass ref={this.validation} />
//         <button onClick={() => this.validation.current.handleFocus()}>
//           input 포커스
//         </button>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div>
      <InterationSample/>
      {/*<ValidationSampleClass />*/}
      {/*<EventPractice />*/}
      {/*<EventPracticeClass />*/}
      {/*<MyComponents name={"test"}>나는 children 이다</MyComponents>*/}
      {/*<MyComponentsClass name={"클래스 형"}>클래스 child</MyComponentsClass>*/}
      {/*<CounterClass />*/}
      {/*<Say />*/}
    </div>
  );
}

export default App;

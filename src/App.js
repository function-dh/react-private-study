import './App.css';
import React, { Component, useState } from 'react';
import MyComponents from './03/MyComponents';
import MyComponentsClass from './03/MyComponentsClass';
import CounterClass from './03/CounterClass';
import Say from './03/Say';
import EventPracticeClass from './04/EventPracticeClass';
import EventPractice from './04/EventPractice';
import ValidationSampleClass from './05/ValidationSampleClass';
import InterationSample from './06/InterationSample';
import LifeCycleSampleClass from './07/LifeCycleSampleClass';
import ErrorBoundary from './07/ErrorBoundary';
import Counter from './08/Counter';
import CounterReducer from './08/CounterReducer';
import Info from './08/Info';
import Average from './08/Average';
import SassComponent from './09/SassComponent';
import StyledComponent from './09/StyledComponent';

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

// function App() {
// const [visible, setVisible] = useState(false);

// return (
//   <div>
{/*<StyledComponent/>*/
}
{/*<SassComponent />*/
}
{/*<Average />*/
}
{/*<button onClick={()=>setVisible(!visible)}>{visible ? '숨기기' : '보이기'}</button>*/
}
{/*<hr/>*/
}
{/*{visible && <CounterReducer/>}*/
}
{/*<InterationSample/>*/
}
{/*<ValidationSampleClass />*/
}
{/*<EventPractice />*/
}
{/*<EventPracticeClass />*/
}
{/*<MyComponents name={"test"}>나는 children 이다</MyComponents>*/
}
{/*<MyComponentsClass name={"클래스 형"}>클래스 child</MyComponentsClass>*/
}
{/*<CounterClass />*/
}
{/*<Say />*/
}
{/*    </div>*/
}
{/*  );*/
}
{/*}*/
}

// 7강 관련
// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }
//
// class App extends Component {
//   state = {
//     color: "#000000",
//   };
//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSampleClass color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }
//

// 10강 관련
const App = () => {
  return <div>Todo app 기본 세팅</div>;
};

export default App;

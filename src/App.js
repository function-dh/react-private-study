import './App.css';
import React, { Component, useCallback, useState, useRef } from 'react';
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
import TodoTemplate from './10/components/TodoTemplate';
import TodoInsert from './10/components/TodoInsert';
import TodoList from './10/components/TodoList';

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
const todoList = [
  {
    id: 1,
    text : '리액트 기초 알아보기',
    checked : true
  },
  {
    id : 2,
    text : '컴포넌트 스타일링 해보기',
    checked : true
  },
  {
    id : 3,
    text : '일정관리 테스트',
    checked : false
  }
]

const App = () => {
  const [todos, setTodos] = useState(todoList);
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      }
      console.log(todo);
      setTodos(todos.concat(todo))
      nextId.current += 1
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      ))
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  )
};

export default App;

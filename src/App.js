import './App.css';
import React, { Component, useCallback, useState, useRef } from 'react';
import axios from 'axios'
import produce from 'immer';
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
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './13/Home';
import About from './13/About';
import Profile from './13/Profile';
import Articles from './13/Articles';
import Article from './13/Article';
import Layout from './13/Layout';
import NotFound from './13/NotFound';
import NewsList from './14/src/compoenets/NewsList'
import Categories from './14/src/compoenets/Categories';
import NewsPage from './14/src/pages/NewsPage';
import ColorBox from './15/src/components/ColorBox';
import ColorContext, {ColorProvider} from './15/src/contexts/color';
import SelectColors from './15/src/components/SelectColors';

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
// const todoList = [
//   {
//     id: 1,
//     text : '리액트 기초 알아보기',
//     checked : true
//   },
//   {
//     id : 2,
//     text : '컴포넌트 스타일링 해보기',
//     checked : true
//   },
//   {
//     id : 3,
//     text : '일정관리 테스트',
//     checked : false
//   }
// ]
//
// const App = () => {
//   const [todos, setTodos] = useState(todoList);
//   const nextId = useRef(4);
//
//   const onInsert = useCallback(
//     (text) => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false
//       }
//       console.log(todo);
//       setTodos(todos.concat(todo))
//       nextId.current += 1
//     },
//     [todos],
//   );
//
//   const onRemove = useCallback(
//     (id) => {
//       setTodos(todos.filter(todo => todo.id !== id))
//     },
//     [todos],
//   );
//
//   const onToggle = useCallback(
//     (id) => {
//       setTodos(todos.map(todo =>
//         todo.id === id ? {...todo, checked: !todo.checked} : todo
//       ))
//     },
//     [todos],
//   );
//
//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   )
// };
//
// export default App;

// 11강 관련
// function createBulkTodos(){
//   const array = []
//   for(let i =1; i <= 2500; i++){
//     array.push({
//       id: i,
//       text: `할일 ${i}`,
//       checked: false
//     })
//   }
//   return array
// }
//
// const App = () => {
//   const [todos, setTodos] = useState(createBulkTodos);
//   const nextId = useRef(4);
//
//   const onInsert = useCallback(
//     (text) => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false
//       }
//       setTodos(todos => todos.concat(todo))
//       nextId.current += 1
//     },
//     [todos],
//   );
//
//   const onRemove = useCallback(
//     (id) => {
//       setTodos(todos => todos.filter(todo => todo.id !== id))
//     },
//     [todos],
//   );
//
//   const onToggle = useCallback(
//     (id) => {
//       setTodos(todos =>
//         todos.map(todo =>
//           todo.id === id ? {...todo, checked: !todo.checked} : todo
//         )
//       )
//     },
//     [todos],
//   );
//
//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   )
// };

// 12강 관련
// const App = () => {
//   const nextId = useRef(1);
//   const [form, setForm] = useState({
//     name: '',
//     username: ''
//   });
//   const [data, setData] = useState({
//     array: [],
//     uselessValue: null,
//   });
//
//   const onChange = useCallback((e) => {
//     const { name, value } = e.target;
//     // 기존 불변성을 유지하며 할당
//     // setForm({
//     //   ...form,
//     //   [name]: [value],
//     // });
//
//     // immer 사용
//     setForm(
//       produce(draft => {
//         draft[name] = value
//       })
//     )
//   }, [form]);
//
//   const onSubmit = useCallback((e) => {
//     e.preventDefault();
//     const info = {
//       id: nextId.current,
//       name: form.name,
//       username: form.username,
//     };
//
//     setData(
//       produce(draft => {
//         draft.array.push(info)
//       })
//     );
//
//     setForm({ name: '', username: '' });
//     nextId.current += 1;
//   }, [data, form.name, form.username]);
//
//   const onRemove = useCallback((id) => {
//     setData({
//       ...data,
//       array: data.array.filter(info => info.id !== id),
//     });
//
//     setData(
//       produce(draft => {
//         draft.array.splice(draft.array.findIndex(info => info.id === id), 1)
//       })
//     )
//   }, [data]);
//
//
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input type='text' name={'username'} placeholder={'아이디'} value={form.username} onChange={onChange} />
//         <input type='text' name={'name'} placeholder={'이름'} value={form.name} onChange={onChange} />
//         <button type='submit'>등록</button>
//       </form>
//       <div>
//         <ul>
//           {data.array.map(info => (
//             <li key={info.id} onClick={() => onRemove(info.id)}>
//               {info.username} ({info.name})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// 13강 관련
// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<Home/>} />
//           <Route path='/about' element={<About/>} />
//           <Route path='/profiles/:username' element={<Profile/>} />
//         </Route>
//
//         <Route path='/articles' element={<Articles/>} >
//           <Route path=':id' element={<Article/>} />
//         </Route>
//         <Route path='*' element={<NotFound/>} />
//       </Routes>
//     </div>
//   )
// }

// 14강 관련 - router 미적용
// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback((category) => {
//       setCategory(category)
//     }, [],
//   );
//
//   return (
//     <div>
//       <Categories category={category} onSelect={onSelect}/>
//       <NewsList category={category}  />
//     </div>
//   )
// }

// 14강 관련 - router 적용
// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<NewsPage />}>
//         <Route path=":category" element={<NewsPage />} />
//       </Route>
//     </Routes>
//   )
// }

// 15강 - Context API
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors/>
        <ColorBox />
      </div>
    </ColorProvider>
  )
}

export default App;

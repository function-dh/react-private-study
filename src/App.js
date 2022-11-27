import "./App.css";
import MyComponents from "./03/MyComponents";
import MycomponentsClass from "./03/MycomponentsClass";
import CounterClass from "./03/CounterClass";
import Say from "./03/Say";

function App() {
  return (
    <div>
      <MyComponents name={'test'}>나는 children 이다</MyComponents>
      <MycomponentsClass name={'클래스 형'}>클래스 child</MycomponentsClass>
      <CounterClass/>
      <Say/>
    </div>
  )
}

export default App;

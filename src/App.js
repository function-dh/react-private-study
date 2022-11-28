import "./App.css";
import MyComponents from "./03/MyComponents";
import MyComponentsClass from "./03/MyComponentsClass";
import CounterClass from "./03/CounterClass";
import Say from "./03/Say";
import EventPracticeClass from "./04/EventPracticeClass";
import EventPractice from "./04/EventPractice";

function App() {
  return (
    <div>
      <EventPractice />
      <EventPracticeClass />
      <MyComponents name={"test"}>나는 children 이다</MyComponents>
      <MyComponentsClass name={"클래스 형"}>클래스 child</MyComponentsClass>
      <CounterClass />
      <Say />
    </div>
  );
}

export default App;

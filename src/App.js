import React, {useState} from "react";
import './App.css';
// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [ inputText, setInputText] = useState("");
  return (
    <div className="App">
       <header>
  <h1>Harsha's To Do List </h1>
    </header>
      <Form setInputText = {setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;

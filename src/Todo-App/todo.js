import React from "react";

import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo({ todo, index, editTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span> {todo.text}</span>
      <div>
      <button onClick={() => editTodo(index)}> Edit </button>
        <button  onClick={() => removeTodo(index)}> Delete </button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}> 
   
      <label><b>Add Todo</b></label>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
   
    <button  type="submit">
      Add
    </button>
  </form>
  );
}

function TodoApp() {
  const [todos, setTodos] = React.useState([
   
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

 

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  const editTodo = index => {
    // <input type= 'text ' value = {[...todos]}></input>
//    <input type= 'text'></input>
   prompt("yiudyuiedy",[todos])
    // const newTodos = [...todos];
  };
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                editTodo = {editTodo}
                removeTodo = {removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;









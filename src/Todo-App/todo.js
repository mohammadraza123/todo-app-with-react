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

//   const editTodo = index => {
//     // <input type= 'text ' value = {[...todos]}></input>
// //    <input type= 'text'></input>
//    prompt("yiudyuiedy",[todos])
//     // const newTodos = [...todos];
//   };
  const editTodo = index => {
    const newTodos = [...todos];
    const todo = newTodos[index];
    const newText = prompt("Edit todo", todo.text);
    if (newText !== null) {
      newTodos[index] = { ...todo, text: newText };
      setTodos(newTodos);
    }
  };
  //  INPUT //
//   const editTodo = index => {
//   const newTodos = [...todos];
//   const todo = newTodos[index];
//   const newTodoText = prompt("Enter new todo text", todo.text);
//   if (newTodoText !== null) {
//     const newTodo = { ...todo, text: newTodoText };
//     newTodos.splice(index, 1, newTodo);
//     setTodos(newTodos);
//   }
//   // Create an input element with the new todo text
//   const input = document.createElement('input');
//   input.type = 'text';
//   input.value = newTodoText;
//   // Replace the todo text span with the input element
//   const todoElement = document.querySelectorAll('.todo')[index];
//   const todoText = todoElement.querySelector('span');
//   todoElement.replaceChild(input, todoText);
//   // Set the focus to the input field
//   input.focus();
//   // Add an event listener to save the changes when the user presses Enter
//   input.addEventListener('keydown', e => {
//     if (e.key === 'Enter') {
//       const editedTodoText = input.value;
//       const editedTodo = { ...todo, text: editedTodoText };
//       const editedTodos = [...todos];
//       editedTodos.splice(index, 1, editedTodo);
//       setTodos(editedTodos);
//       // Replace the input element with the updated todo text span
//       const updatedTodoElement = document.querySelectorAll('.todo')[index];
//       const updatedTodoText = document.createElement('span');
//       updatedTodoText.innerText = editedTodoText;
//       updatedTodoElement.replaceChild(updatedTodoText, input);
//     }
//   });
// };

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









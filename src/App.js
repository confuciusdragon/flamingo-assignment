import React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';

function App() {
  const [newTodo, setNewTodo] = React.useState({})
  return (<div>
    <h1>Todo List</h1>
    <TodoList />
    <AddTodoForm onAddTodo={setNewTodo}/>
    <p>{newTodo}</p>
  </div>);
}

export default App;

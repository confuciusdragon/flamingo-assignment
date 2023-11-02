import React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';

function App() {
  const [newTodo, setNewTodo] = React.useState()
  const [todoList, setTodoList] = React.useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  return (<div>
    <h1>Todo List</h1>
    <TodoList todoList={todoList}/>
    <AddTodoForm onAddTodo={addTodo}/>
  </div>);
}

export default App;

import React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';

const useSemiPersistentState = () => {

  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  )

  React.useEffect(() => {
    let savedList = JSON.stringify(todoList);
    localStorage.setItem('todoList', savedList);
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
 //const [newTodo, setNewTodo] = React.useState()
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  return (<>
    <h1>Todo List</h1>
    <AddTodoForm onAddTodo={addTodo}/>
    <TodoList todoList={todoList}/>
  </>);
}

export default App;



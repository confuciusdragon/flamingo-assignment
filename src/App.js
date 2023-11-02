import React from 'react';

const todoList = [{
  id: 1,
  title: "first"
},{
  id: 2,
  title: "second"
},{
  id: 3,
  title: "third"
}];

function App() {
  return (<div>
    <h1>Todo List</h1>
    <ul>
      {todoList.map( item => {
        return <ul key={item.id}>{item.title}</ul>;
      })}
    </ul>
  </div>);
}

export default App;

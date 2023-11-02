import React from "react";

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
  
const TodoList = () => {
 return (
    <ul>
        {todoList.map( item => {
            return <ul key={item.id}>{item.title}</ul>;
        })}
    </ul>
 );
}

export default TodoList;
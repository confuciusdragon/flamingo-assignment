import React from "react";
import TodoListItem from "./TodoListItem.js"

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
            return <TodoListItem key={item.id} todo={item}/>;
        })}
    </ul>
 );
}

export default TodoList;
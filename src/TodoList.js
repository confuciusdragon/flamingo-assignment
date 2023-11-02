import React from "react";
import TodoListItem from "./TodoListItem.js";
import defaultItems from "./defaultItems.js";
  
const TodoList = ({todoList}) => {
    if (todoList.length == 0) todoList = defaultItems;
 return (
    <ul>
        {todoList.map( item => {
            return <TodoListItem key={item.id} todo={item}/>;
        })}
    </ul>
 );
}

export default TodoList;
import React from "react";

const AddTodoForm = (props) => {
    const handleAddTodo = (e) => {
        e.preventDefault();
        const todoTitle = e.target.title.value;
        props.onAddTodo(todoTitle);
        console.log(todoTitle);
        e.target.reset();
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title"></input>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;
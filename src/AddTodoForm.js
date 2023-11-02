import React from "react";

const AddTodoForm = (props) => {

    const [todoTitle, setTodoTitle] = React.useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        let newId = Date.now();
        props.onAddTodo({title: todoTitle, id: newId});
        console.log(todoTitle);
        setTodoTitle("");
    }

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;
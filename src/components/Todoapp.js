import React, { useState } from "react";
import Addtodo from "./Addtodo";
import Header from "./layout/Header";
import Todos from "./Todos";
import "./Todoapp.scss";
const Todoapp = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Setup development environment",
            completed: true
        },
        {
            id: 2,
            title: "Develop website and add content",
            completed: false
        },
        {
            id: 3,
            title: "Deploy to live server",
            completed: false
        }
    ])
    const handleCheckboxChange = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        }))
    }
    const handleDelete = (id) => {
        setTodos(todos.filter(todo =>{
            return todo.id !== id
        }))
    }
    const addToDo = (userObj) => {
        setTodos([userObj,...todos])
    }
    return (
        <div className="container">
            <Header />
            <Addtodo addToDo={addToDo} />
            <Todos todos={todos}
                handleCheckboxChange={handleCheckboxChange}
                // ten props muon truyen = gia tri props
                handleDelete={handleDelete}
            />
        </div>

    )
}
export default Todoapp;
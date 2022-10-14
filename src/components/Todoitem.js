import React from "react";
import "./Todoitem.scss"
const Todoitem = (props) => {
    const { todos } =props
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <li className="todo-item" key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => {props.handleCheckboxChange(todo.id) }} />
                        {todo.title}
                        <button className="btn-style" onClick={() => {props.handleDelete(todo.id) }} > X </button>
                    </li>
                )
            })}
        </ul>
    )
}
export default Todoitem;
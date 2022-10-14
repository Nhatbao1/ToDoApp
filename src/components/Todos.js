import React from "react";
import Todoitem from "./Todoitem";
const Todos = (props) => {
    return (
        <div>
            <Todoitem todos={props.todos}
                handleCheckboxChange={props.handleCheckboxChange}
                handleDelete={props.handleDelete}
            />
        </div>
    )
}
export default Todos;
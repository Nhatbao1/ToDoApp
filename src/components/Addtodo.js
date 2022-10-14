import React, { useState } from "react";
import "./Addtodo.scss";
const Addtodo = (props) => {
    const [title, setTitle] = useState()
    const [completed,setCompeleted] = useState(false)
    const handleChangeInput = (event) => {
        setTitle(event.target.value)
    }
    const addToDo = (event) => {
        event.preventDefault()
        props.addToDo({
            id: Math.floor((Math.random() * 100) + 1),
            title:title,
            completed:completed,
        })
    }
    return (
        <form className="form-container" onSubmit={(event) => { addToDo(event) }}>
            <input type="text" placeholder="Add Todo" className="input-text" onChange={(event) => { handleChangeInput(event) }}></input>
            <input type="submit" value="Submit" className="input-submit"></input>
        </form >
    )
}
export default Addtodo;
import React from "react";
class Mycomponents extends React.Component {
    state = {
        name: "Nhat Bao",
        address: "HCM",
        age: 21
    };
    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state)
    };
    handlOnChange = (event) =>{
        this.setState({
            name:event.target.value
        })
    }
    render() {
        return (
            <div>
                My name is {this.state.name}
                <form>
                    <input type="text" onChange={(event) =>{this.handlOnChange(event)}}/>
                    <button onClick={(event) =>{this.handleClick(event)}}>Submit</button>
                </form>
            </div>
        );
    }
}
export default Mycomponents;

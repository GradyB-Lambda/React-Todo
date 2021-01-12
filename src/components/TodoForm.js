import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValues: ""
        }
    }

render(){
    return (
         <form>
          <input type="text" name="item" />
          <button>Add Todo!</button>
        </form>
        
    )
};





}

export default TodoForm;
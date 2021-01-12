import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const taskList = [
  {
    item: 'Walk the dog',
    id: 123,
    completed: false
  },
  {
    item: 'Pack lunch',
    id: 124,
    completed: false
  },
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      blah: taskList
    }
  }

  

  render() {
    return (
      <div>
        <div>
           <h2>Welcome to your Todo App!</h2>
           <TodoForm />

        </div>
          <TodoList taskList/>
      </div>
    );
  }
}

export default App;

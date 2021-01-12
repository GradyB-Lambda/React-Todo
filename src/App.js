import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const listData = [
  {
    task: 'Walk the dog',
    id: 123,
    completed: false
  },
  {
    task: 'Pack lunch',
    id: 124,
    completed: false
  },
];


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: listData,
      toggleCompleted: () => {}
    };
  }

  toggleCompleted = (clickedItemId) => {
    this.setState({
      list: this.state.list.map((item) => {
        if(item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  addItem = (itemTask) => {
    const newTask = {
      task: itemTask,
      id: new Date(),
      completed: false
    };
 return this.setState({
   list: [...this.state.list, newTask]
 })
  }

  clearItem = (event) => {
    event.preventDefault()
    return this.setState({
      list: this.state.list.filter((item) => {
        if(item.completed === true) {
          return (item = undefined)
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div className = 'App'>
        <div className = 'header'>
          <h1>ToDo List </h1>
          <TodoForm addItem = {this.addItem} />
          </div>
          <TodoList
          list = {this.state.list}
          toggleCompleted = {this.toggleCompleted}
          clearItem = {this.clearItem}
          />
          </div>
    )
  }

}

export default App;
import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>TO DO APP</h1>
        <AddTask />
        <TaskList />
      </div>
    );
  }
}

export default App;

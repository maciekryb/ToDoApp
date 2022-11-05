import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'Zagrac wreszcie w Wiedzmina 3',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'Fryzjer',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'Basen',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: 'Siłownia',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: 'Zakupy',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log('delete elementu o id ' + id);
  };

  changeTaskStatus = (id) => {
    console.log('zmiana w elemencie o id ' + id);
  };

  render() {
    return (
      <div className='App'>
        <h1>TO DO APP</h1>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;

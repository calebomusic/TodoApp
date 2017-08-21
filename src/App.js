import React, { Component } from 'react';
import './App.css';

import { merge } from 'lodash';

import Todo from './Todo';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      todos: {
        1:
          {
            name: 'todo',
            completed: false
          }
      }
    };
  }

  createTodo = () => {
    const ids = Object.keys(this.state.todos);
    const lastId = ids[ids.length - 1];

    const newId = lastId + 1;

    const newTodos = merge({}, this.state.todos);

    newTodos[newId] = {};

    this.setState({
      todos: newTodos
    });
  }

  deleteTodo = (id) => {
    const newTodos = merge({}, this.state.todos);

    delete newTodos[id];

    this.setState({
      todos: newTodos
    });
  }

  renderTodos = () => {
    const todos = [];

    Object.keys(this.state.todos).forEach(id => {
      todos.push(
        <Todo 
          deleteTodo={() => this.deleteTodo(id)}
          key={id} 
          id={id}/>
      );
    });

    return todos;
  }

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <div className="content">
          <ul className="todos">
            {this.renderTodos()}
          </ul>
          <div
            className="create"
            onClick={this.createTodo}>
            Create!
          </div>
        </div>
      </div>
    );
  }
}

export default App;

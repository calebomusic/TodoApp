import React, { Component } from 'react';

import './Todo.css'

class Todo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: "", 
            completed: false
        };
    }

    onChange = (e) => {
        this.setState({ name: e.target.value })
    }

    render () {
        return (
            <div className="todo">
                <input
                    className="name" 
                    onChange={this.onChange}
                    value={this.state.name}>
                </input>
                <div className="completed">
                    <input 
                        type="checkbox"
                        value={this.state.completed} />
                </div>
                <button
                    className="delete"
                    onClick={this.props.deleteTodo}>Delete!</button>
            </div>
        )
    }
}

export default Todo

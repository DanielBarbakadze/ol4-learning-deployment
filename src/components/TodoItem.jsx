import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li>
        <p>{this.props.todo.text}</p>
        <button onClick={this.props.handleEdit}>edit</button>
      </li>
    );
  }
}

export default TodoItem;

import React from "react";
import TodoItem from "./TodoItem";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: "Learn React",
        },
        {
          id: 2,
          text: "Learn Js",
        },
        {
          id: 3,
          text: "Learn SCSS",
        },
      ],
      inputValue: "",
      editor: {
        isEditing: false,
        id: undefined,
        inputValue: "",
      },
    };
  }

  handleAddTodo = () => {
    const { todos, inputValue } = this.state;
    const id = todos.length + 1;

    this.setState({
      todos: [
        ...todos,
        {
          id,
          text: inputValue,
        },
      ],
      inputValue: "",
    });
  };

  handleEdit = (id, inputValue) => {
    this.setState({
      editor: {
        id,
        inputValue,
        isEditing: true,
      },
    });
  };

  handleEditorChange = (event) => {
    this.setState({
      editor: {
        ...this.state.editor,
        inputValue: event.target.value,
      },
    });
  };

  handleEditorSave = () => {
    const todos = [...this.state.todos];

    todos.map((todo) => {
      if (todo.id === this.state.editor.id) {
        todo.text = this.state.editor.inputValue;
      }
    });

    this.setState({
      todos,
      editor: {
        isEditing: false,
      },
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        {this.state.todos.length > 0 ? (
          <div>
            <ul>
              {this.state.todos.map((todo, idx) => (
                <TodoItem
                  key={idx}
                  todo={todo}
                  handleEdit={() => this.handleEdit(todo.id, todo.text)}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <p>No todos</p>
          </div>
        )}

        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(event) =>
              this.setState({ inputValue: event.target.value })
            }
          />
          <button onClick={this.handleAddTodo}>Add Todo</button>
        </div>

        {this.state.editor.isEditing && (
          <div>
            <h2>Edit your todo</h2>

            <input
              type="text"
              value={this.state.editor.inputValue}
              onChange={this.handleEditorChange}
            />

            <button onClick={this.handleEditorSave}>update</button>
          </div>
        )}
      </div>
    );
  }
}

export default Todo;

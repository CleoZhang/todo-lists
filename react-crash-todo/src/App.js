import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Take out the trash 2",
        completed: false,
      },
      {
        id: 3,
        title: "Take out the trash 3",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // need to attach the backend to make this effective
  delTodo = (id) => {
    this.setState({
      todo: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // need to attach the backend to make this effective
  addTodo = (title) => {
    const newTodo = {
      // this need to be auto generated unique id
      id: 4,
      title: title,
      completed: false,
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import { tasksRef } from "./reference";

export default class TaskInput extends React.Component {
  state = { text: "" };

  handleSubmit = event => {
    event.preventDefault();
    const newTask = {
      text: this.state.text.trim(),
      checked: false,
      starred: false
    };
    if (newTask.text.length) {
      tasksRef.add(newTask);
      this.setState({ text: "" });
    }
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="TaskInput">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          type="text"
          placeholder="Add a new task..."
          required
        />
      </form>
    );
  }
}

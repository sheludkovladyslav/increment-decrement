import React, { Component } from "react";
import { TaskListItem } from "./TaskListItem";
import tasks from "../../tasks.json";
import css from "./TaskList.module.css";

export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }

  checkTask = (event) => {
    event.target.parentElement.classList.toggle("checked");
  };

  deleteTask = (event) => {
    const id = event.target.parentElement.dataset.id;

    const index = this.state.tasks.findIndex((task) => task.id === Number(id));

    const newTasks = [...this.state.tasks];

    newTasks.splice(index, 1);

    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    return (
      <ul className={css.list}>
        {this.state.tasks.map((task) => {
          return (
            <TaskListItem
              key={task.id}
              name={task.title}
              onChange={this.checkTask}
              onClick={this.deleteTask}
              taskId={task.id}
            ></TaskListItem>
          );
        })}
        ;
      </ul>
    );
  }
}

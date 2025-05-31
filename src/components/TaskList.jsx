import css from "./TaskList.module.css";
import { Component } from "react";
import { TaskListItem } from "./TaskListItem";
import tasks from "./../../tasks.json";

export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }

  deleteTask = (event) => {
    const id = event.target.dataset.id;

    const newTasks = [...this.state.tasks];

    const index = newTasks.findIndex((task) => task.id === id);

    newTasks.splice(index, 1);

    this.setState({
      tasks: newTasks,
    });
  };

  checkTask = (event) => {
    event.target.classList.toggle("checked");
  };

  render() {
    return (
      <ul className={css.list}>
        {this.state.tasks.map((task) => (
          <TaskListItem
            key={task.id}
            checkTask={this.checkTask}
            deleteTask={this.deleteTask}
            name={task.title}
          />
        ))}
      </ul>
    );
  }
}

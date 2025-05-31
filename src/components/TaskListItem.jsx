import css from "./TaskListItem.module.css";
import "./checked.css";

export const TaskListItem = ({ name, onChange, onClick, taskId }) => {
  return (
    <li data-id={taskId}>
      <input type="checkbox" onChange={onChange} />
      <p className={css.name}>{name}</p>
      <button className={css.delete} onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

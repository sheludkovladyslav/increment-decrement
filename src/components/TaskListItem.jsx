import css from "./TaskListItem.module.css";

export const TaskListItem = ({ name, deleteTask, checkTask }) => {
  return (
    <li className={css.item}>
      <input onChange={checkTask} type="checkbox" className={css.checkbox} />
      <p className={css.name}>{name}</p>
      <button onClick={deleteTask} className={css.button}>
        Delete
      </button>
    </li>
  );
};

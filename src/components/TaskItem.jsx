function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item${task.completed ? ' task-item--completed' : ''}`}>
      <input
        type="checkbox"
        className="task-item__checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        id={`task-${task.id}`}
      />
      <label className="task-item__text" htmlFor={`task-${task.id}`}>
        {task.text}
      </label>
      <button
        className="task-item__delete"
        onClick={() => onDelete(task.id)}
        aria-label="タスクを削除"
      >
        削除
      </button>
    </li>
  )
}

export default TaskItem

export default function Task({ task, toggleCompleted, deleteTask }) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-md bg-white shadow-sm mt-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => toggleCompleted(task.id)}
          className="h-5 w-5 accent-blue-600 cursor-pointer"
        />
        <p className={task.isCompleted ? "line-through text-gray-400" : ""}>
          {task.text}
        </p>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-600"
      >
        Delete
      </button>
    </div>
  );
}

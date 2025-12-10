// import React from "react";
// const Task = ({ filteredTasksValue, taskListValue, updateTaskList }) => {
//   const toggleCompleted = (taskId) => {
//     const updatedList = taskListValue.map((task) =>
//       task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
//     );
//     updateTaskList(updatedList);
//   };
//   const deleteTask = (taskId) => {
//     const updatedList = taskListValue.filter((task) => task.id !== taskId);
//     updateTaskList(updatedList);
//   };
//   return (
//     <div className="task-list">
//       {filteredTasksValue.map((task) => (
//         <Task
//           key={task.id}
//           task={task}
//           toggleCompleted={toggleCompleted}
//           deleteTask={deleteTask}
//         />
//       ))}
//     </div>
//   );
// };
// export default Task;
import React from "react";

export const Task = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div className="task-item  flex justify-between h-[62px] w-[345px] items-center rounded-md ">
      <div className="flex items-center gap-3 bg-[#f9FAFB] p-4">
        <input
          type="checkbox"
          checked={task.isCompleted}
          className="h-5 w-5"
          onChange={() => toggleCompleted(task.id)}
        />

        <span className={task.isCompleted ? "completed" : ""}>{task.text}</span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="delete-btn  text-[#EF4444] h-[30px] py-1.5 px-3 rounded-md bg-[#FEF2F2] flex items-center justify-center hover:truncate"
      >
        Delete on
      </button>
    </div>
  );
};
export default Task;

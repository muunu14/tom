import React from "react";
export const Form = ({ handleClearCompletedTasks, taskListValue }) => {
  const completedCount = taskListValue.filter((t) => t.isCompleted).length;
  return (
    <div className="flex justify-between mt-4 text-sm text-gray-600">
      {/* <span>
        {completedCount} of {taskListValue.length} tasks completed
      </span> */}
      <button
        onClick={handleClearCompletedTasks}
        className="text-red-500 hover:underline"
      >
        Clear Completed
      </button>
    </div>
  );
};
export default Form;

// export const Form = ({ addNewTask }) => {
//   return
//   const [inputValue, setInputValue] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim() === "") return;
//     addNewTask(inputValue.trim());
//     setInputValue("");
//   };
//   return (
//     <form onSubmit={handleSubmit} className="flex gap-3 mt-3">
//       <input
//         className="border w-full px-3 py-2 rounded"
//         placeholder="Add a new task..."
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button className="bg-blue-600 text-white px-4 rounded">Add</button>
//     </form>
//   );
// };
// export default Form;

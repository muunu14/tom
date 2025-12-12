import React from "react";

export const Summary = ({ handleClearCompletedTasks, taskListValue }) => {
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
export default Summary;

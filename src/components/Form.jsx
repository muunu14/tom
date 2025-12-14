import React from "react";
export const Form = ({
 handleClearCompletedTasks,
 taskListValue = [],   // 👈 ЭНЭ ЧУХАЛ
}) => {
 const completedCount = taskListValue.filter(
   (t) => t.isCompleted
 ).length;
 return (
<div className="flex justify-between mt-4 text-sm text-gray-600">
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
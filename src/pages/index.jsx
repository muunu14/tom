import { useState } from "react";
import Form from "@/components/Form";
import Filter from "@/components/Filter";
import Task from "@/components/Task";
import Summary from "../components/Summary";
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const addNewTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      isCompleted: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };
  const toggleCompleted = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const clearCompletedTasks = () => {
    setTasks((prev) => prev.filter((task) => !task.isCompleted));
  };
  const tasksToMap = tasks.filter((t) => {
    if (filter === "all") return true;
    if (filter === "active") return !t.isCompleted;
    if (filter === "completed") return t.isCompleted;
  });
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center shadow-2xl">
      <div className="bg-white rounded-lg shadow-md max-w-md w-full p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">To-Do List</h1>
        <Form addNewTask={addNewTask} />
        <Filter activeFilterValue={filter} updateCurrentFilter={setFilter} />
        <div className="mt-4">
          {tasksToMap.length === 0 ? (
            <p className="text-gray-500 text-center mt-4">
              No tasks yet. Add one above!
            </p>
          ) : (
            tasksToMap.map((task) => (
              <Task
                key={task.id}
                task={task}
                toggleCompleted={toggleCompleted}
                deleteTask={deleteTask}
              />
            ))
          )}
        </div>
        <Summary
          taskListValue={tasks}
          handleClearCompletedTasks={clearCompletedTasks}
        />
        <div className="pt-5  gap-2 flex justify-center">
          Powered by
          <div className="text-[#3C82F6]">Pinecone academy</div>
        </div>
      </div>
    </div>
  );
}

// import { Header } from "@/components/Header";
// import { Icon } from "@/components/Icon";
// import { Two } from "@/components/Two";
// import { Skills } from "@/components/Skills";
// import { Upwork } from "@/components/Upwork";
// import { UbCabData } from "@/components/UbCabData";
// import { Last } from "@/components/Last";

// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <Icon />
//       <Two />
//       <Skills />
//       <Upwork />
//       <UbCabData />
//       <Last />
//     </div>
//   );
// };
// export default Home;

// import { TodoInput } from "@/components/TodoInput";
// import { TodoFilters } from "@/components/TodoFilters";
// import { TodoList } from "@/components/TodoList";

// const Home = () => {
//   return (
//     <div>
//       <TodoInput />
//       <TodoFilters />
//       <TodoList />
//     </div>
//   );
// };
// export default Home;

// import { Back } from "@/components/Back";
// import { Buttons } from "@/components/Buttons";
// import { Footer } from "@/components/Footer";
// import { useState } from "react";

// const Home = () => {
//   const [todolist, setTodolist] = useState([]);
//   const [filterValue, setFilter] = useState("all");

//   const tog = (id) => {
//     setTasks(
//       tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
//     );
//   };

//   return (
//     <div className="w-full h-[100vh] flex  justify-center bg-[#F3F4F6]">
//       <div className="w-[377px] h-[290px] mt-[140px] rounded-md pt-6 pr-4 pb-6 pl-4 flex flex-col gap-10 bg-white  shadow-[0_0_12px_rgba(0,0,0,0.16)]">
//         <div className="w-[345px] h-[187px] flex flex-col gap-8 ">
//           <div className="w-[345px] h-[138px] flex flex-col gap-5 ">
//             <div className="w-[345px] h-[28px] font-semibold text-[20px] text-[#000000] text-center">
//               To-Do list
//             </div>
//             <Back setTodolist={setTodolist} />
//             <Buttons filterValue={filterValue} setfilter={setFilter} />

//             {todolist.map((task) => (
//               <div>{task.value}</div>
//             ))}

//             <Footer />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;
// import { useState } from "react";
// import { Form } from "@/components/Form";
// import { Filter } from "@/components/Filter";
// import { Summary } from "@/components/Summary";
// import { TaskContainer } from "@/components/TaskContainer";

// export const Home = () => {
//   const [taskList, setTaskList] = useState([]);
//   const [currentFilter, setCurrentFilter] = useState("all");

//   const clearCompletedTasks = () => {
//     const confirmClear = window.confirm(
//       "Are you sure you want to clear all completed tasks?"
//     );

//     if (!confirmClear) return;

//     const remainingTasks = taskList.filter((task) => !task.isCompleted);
//     setTaskList(remainingTasks);
//   };

//   const filteredTasks = taskList.filter((task) => {
//     if (currentFilter === "active") return !task.isCompleted;
//     if (currentFilter === "completed") return task.isCompleted;

//     return true;
//   });

//   return (
//     <div className="container flex justify-center items-start min-h-screen ">
//       <div className="inner-container w-[377px] flex flex-col mt-20 p-6 bg-white rounded-lg shadow gap-6">
//         <h1 className="title font-semibold flex justify-center text-xl">
//           To-Do List
//         </h1>

//         <Form updateTaskList={setTaskList} taskListValue={taskList} />

//         <Filter
//           activeFilterValue={currentFilter}
//           updateCurrentFilter={setCurrentFilter}
//         />

//         <TaskContainer
//           filteredTasksValue={filteredTasks}
//           taskListValue={taskList}
//           updateTaskList={setTaskList}
//         />

//         {Boolean(taskList.length) && (
//           <Summary
//             handleClearCompletedTasks={clearCompletedTasks}
//             taskListValue={taskList}
//           />
//         )}

//         <div className="footer flex justify-center justify-self-end gap-1 mt-4 text-sm text-gray-500">
//           <span>Powered by</span>
//           <span className="text-blue-500">Ariunzul</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import { useState } from "react";
// import { Form } from "@/components/Form";
// import { Filter } from "@/components/Filter";
// import { Summary } from "@/components/Summary";
// import Task from "../components/Task";

// export const Home = () => {
//   const [taskList, setTaskList] = useState([]);
//   const [currentFilter, setCurrentFilter] = useState("all");

//   const clearCompletedTasks = () => {
//     const confirmClear = window.confirm(
//       "Are you sure you want to clear all completed tasks?"
//     );

//     if (!confirmClear) return;

//     const remainingTasks = taskList.filter((task) => !task.isCompleted);
//     setTaskList(remainingTasks);
//   };
//   const filteredTasks = taskList.filter((task) => {
//     if (currentFilter === "active") return !task.isCompleted;
//     if (currentFilter === "completed") return task.isCompleted;

//     return true;
//   });

//   return (
//     <div className="container flex justify-center items-start min-h-screen ">
//       <div className="inner-container w-[377px] flex flex-col mt-20 p-6 bg-white rounded-lg shadow-2xl gap-6">
//         <h1 className="title font-semibold flex justify-center text-xl">
//           To-Do List
//         </h1>

//         <Form updateTaskList={setTaskList} taskListValue={taskList} />

//         <Filter
//           activeFilterValue={currentFilter}
//           updateCurrentFilter={setCurrentFilter}
//         />

//         <Task
//           filteredTasksValue={filteredTasks}
//           taskListValue={taskList}
//           updateTaskList={setTaskList}
//           // onDelete={deleteTask}
//           // onToggle={toggleTask}
//           // tasks={tasks}
//         />

//         {Boolean(taskList.length) && (
//           <Summary
//             handleClearCompletedTasks={clearCompletedTasks}
//             taskListValue={taskList}
//           />
//         )}
//         <div className=" flex justify-center text-stone-500">
//           No tasks yet. Add one above
//         </div>
//         <div className="footer flex justify-center justify-self-end gap-1 mt-4 text-sm text-gray-500">
//           <span>Powered by</span>
//           <span className="text-blue-500">Pinecone academy</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import { useState } from "react";
import { Form } from "@/components/Form";
import { Filter } from "@/components/Filter";
// import { Summary } from "@/components/Summary";
import { Task } from "@/components/Task";
export const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = () => {
    const newTask = {
      id: Date.now(),
      value,
      z,
    };
    setTasks((prev) => [...prev, newTask]);
  };
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  ``;

  return (
    <div className="bg-[#F3F4F6] w-full h-[100vh] flex justify-center">
      <div className="absolute top-[140px] pt-[24px] pr-[16px] pb-[24px] pl-[16px] gap-[40px] rounded-[6px] w-[377px] min-h-[290px] h-auto bg-white shadow-[0_0_12px_rgba(0,0,0,0.16)]">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[20px]">
            <Form />
            <Filter onAdd={addNewTask} />
            {/* <Summary /> */}
          </div>
          {/* <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} /> */}
          {/* {todoList.map} */}
        </div>
        <div className=" flex justify-center text-stone-500 p-8">
          No tasks yet. Add one above
        </div>
        {/* <div className="footer flex justify-center justify-self-end gap-1 mt-20s p-3 text-sm text-gray-500 mr-[20pxs]">
          <span>Powered by</span>
          <span className="text-blue-500">Pinecone academy</span>
        </div> */}
      </div>
    </div>
  );
};
export default Home;

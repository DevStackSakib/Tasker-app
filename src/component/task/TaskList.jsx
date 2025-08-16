import React from "react";
import { useTaskContext } from "../../contextApi/taskAction/TaskProvider";

const TaskList = () => {
  const { tasks, editTask, deleteTaskHandler } = useTaskContext();

  return (
    <>
      <div className="task-list overflow-x-auto scrollbar-none hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700 [&>th]:p-4  [&>th]:text-left">
              <th>Book Name</th>
              <th>Description</th>
              <th>Author Tags</th>
              <th>Category</th>
              <th>Language</th>
              <th>Priority</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="7">
                  <div className="text-center text-2xl text-gray-400 py-10 "> No Tasks Found! 🎯 Please Create a New Task</div>
                </td>
              </tr>
            ) : (
              tasks.map((task, id) => {
                // Destructure task
                const { title, description, tags, category, language, priority } = task;

                return (
                  <tr key={id} className="[&>td]:p-4 [&>td]:text-left [&>td]:text-[#F4F5F6] align-baseline">
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>
                      <ul className="flex flex-wrap items-center gap-1.5">
                        {tags.map((tag, id) => {
                          return (
                            <li key={id}>
                              <span className="inline-block h-5 bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6] rounded-[45px]">{tag}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                    <td className="text-center">{category}</td>
                    <td className="text-center">{language}</td>
                    <td className="text-center">{priority}</td>
                    <td className="flex justify-center items-center space-x-4">
                      <button className=" text-blue-500 cursor-pointer" onClick={() => editTask(task)}>
                        Edit
                      </button>
                      <button className=" text-red-500 cursor-pointer" onClick={() => deleteTaskHandler(task.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;

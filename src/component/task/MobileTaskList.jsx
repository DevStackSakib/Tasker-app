import React from "react";
import { useTaskContext } from "../../contextApi/taskAction/TaskProvider";

const MobileTaskList = () => {
  const { tasks, editTask, deleteTaskHandler } = useTaskContext();
  return (
    <>
      <div className="grid grid-cols-1   gap-3 md:hidden">
        {tasks.length === 0 ? (
          <div className="text-center text-2xl text-gray-400 py-10 "> No Tasks ! 🎯 Please Create a New Task</div>
        ) : (
          tasks.map((task, id) => {
            // Destructure task
            const { title, description, tags, category, language, priority } = task;

            return (
              <div key={id} className="card bg-[#7c7a7a3d] text-[#ffffffe3] p-3 rounded-2xl shadow-2xl">
                <div className="card-body">
                  <div className="flex flex-wrap items-center justify-between space-x-3">
                    <div className="flex flex-wrap items-center justify-between space-x-3">
                      <h5>{title}</h5>
                      <p className="text-[#363738] font-bold text-xs sm:text-sm bg-amber-400 py-1 px-2 rounded">{priority}</p>
                      <ul className="flex flex-wrap items-center gap-1.5 max-[27.6875rem]:pt-2">
                        {tags.map((tag, id) => (
                          <li key={id} className="text-[#363738] font-bold text-xs sm:text-sm bg-green-400 py-1 px-2 rounded">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-cyan-100">{category}</span> -<span className="text-blue-400">{language}</span>
                    </div>
                  </div>
                  <p className="pt-5">{description}</p>
                  <div className="flex justify-baseline items-center space-x-4 pt-4">
                    <button className=" text-blue-500" onClick={() => editTask(task)}>
                      Edit
                    </button>

                    <button className="text-red-500" onClick={() => deleteTaskHandler(task.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default MobileTaskList;

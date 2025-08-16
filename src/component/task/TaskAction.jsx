import React from "react";
import DeleteAllTask from "./DeleteAllTask";
import { useTaskContext } from "../../contextApi/taskAction/TaskProvider";

const TaskAction = () => {
  // Custom Hook
  const { setIsModalOpen, setTaskUpdate } = useTaskContext();
  // Modal Handler
  const modalHandler = () => {
    setTaskUpdate(null);
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="task-action flex items-center justify-between my-3">
        <h3>Your Task</h3>
        <div className="flex items-center space-x-4">
          <button className=" cursor-pointer px-2 sm:px-4 py-2  text-sm sm:text-base  bg-blue-800 rounded-lg text-white" onClick={modalHandler}>
            Add Task
          </button>
          {/* Delete All Tasks */}
          <DeleteAllTask />
        </div>
      </div>
    </>
  );
};

export default TaskAction;

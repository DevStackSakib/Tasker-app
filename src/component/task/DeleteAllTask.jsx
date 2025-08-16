import React from "react";
import { useTaskContext } from "../../contextApi/taskAction/TaskProvider";

const DeleteAllTask = () => {
  // Custom Hook
  const { setTasks } = useTaskContext();
  // Delete All Task Handler
  const deleteAllTaskHandler = () => {
    setTasks([]);
  };
  return (
    <>
      <button className="cursor-pointer px-2 sm:px-4 py-2  text-sm sm:text-base  bg-red-700 rounded-lg text-white" onClick={deleteAllTaskHandler}>
        Delete All
      </button>
    </>
  );
};

export default DeleteAllTask;

import React from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import MobileTaskList from "./MobileTaskList";
import { useTaskContext } from "../../contextApi/taskAction/TaskProvider";
import TaskModal from "./TaskModal";

const Taskboard = () => {
  const { isModalOpen } = useTaskContext();
  return (
    <>
      <section className="taskboard-sec ">
        {isModalOpen && <TaskModal />}
        {/* Search Task */}
        <SearchTask />
        <div className="taskboard mt-3 rounded-2xl  py-4 px-6 bg-[rgba(0,0,0,0.58)] backdrop-blur-[10px] shadow-[0_6px_40px_6px_rgb(0_0_0_/_53%)]  text-white">
          {/* Task Action */}
          <TaskAction />
          {/* Task List */}
          <TaskList />
          {/* The Table responsive for mobile */}
          <MobileTaskList />
        </div>
      </section>
      {/* <TaskModal /> */}
    </>
  );
};

export default Taskboard;

import React, { useState } from "react";
import { useTaskContext } from "../../contextApi/taskAction/TaskProvider";

const TaskModal = () => {
  // Custom Hook
  const { setIsModalOpen, addEditTaskHandler, taskUpdate } = useTaskContext();
  // Form State Control
  const [task, setTask] = useState(
    taskUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      category: "",
      language: "",
      priority: "",
    }
  );
  // Add or Edit Determine is very Importent to State
  const [isEdit, setIsEdit] = useState(taskUpdate !== null);

  // Close Modal Handler
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };
  // Change Handler
  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };

  //   Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    addEditTaskHandler(task, isEdit);
  };
  return (
    <>
      {/* overlay */}
      <div onClick={closeModalHandler} className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
        {/* modal */}
        <div className="container overflow-y-auto scrollbar-none h-full">
          <form
            onSubmit={formSubmitHandler}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto my-20 max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 "
          >
            <h2 className="text-2xl text-center m-auto font-bold text-white">{isEdit ? "Update Task" : "Add New Task"}</h2>
            {/* inputs */}
            <div className="text-white mt-10">
              <div className="">
                <label htmlFor="title">Title</label>
                <input
                  className="w-full block rounded-md disabled bg-[#2D323F] px-3 py-2.5 mt-2.5"
                  type="text"
                  name="title"
                  id="title"
                  onChange={changeHandler}
                  value={task.title}
                  required
                />
              </div>
              {/* description */}
              <div className=" mt-4">
                <label htmlFor="description">Description</label>
                <textarea
                  className="block w-full min-h-[120px] rounded-md disabled bg-[#2D323F] px-3 py-2.5 mt-2.5 resize-none"
                  name="description"
                  id="description"
                  typeof="text"
                  onChange={changeHandler}
                  value={task.description}
                  required
                ></textarea>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 ">
                {/* tags */}
                <div className="mt-4">
                  <label htmlFor="tags">Tags</label>
                  <input
                    className="w-full block rounded-md disabled bg-[#2D323F] px-3 py-2.5 mt-2.5"
                    type="text"
                    name="tags"
                    id="tags"
                    onChange={changeHandler}
                    value={task.tags}
                    required
                  />
                </div>
                {/* priority */}
                <div className="mt-4">
                  <label htmlFor="priority">Priority</label>
                  <select
                    className="w-full block rounded-md disabled bg-[#2D323F] px-3 py-2.5 mt-2.5"
                    name="priority"
                    id="priority"
                    onChange={changeHandler}
                    value={task.priority}
                    required
                  >
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 ">
                {/* tags */}
                <div className="mt-4">
                  <label htmlFor="category">Category</label>
                  <input
                    className="w-full block rounded-md disabled bg-[#2D323F] px-3 py-2.5 mt-2.5"
                    type="text"
                    name="category"
                    id="category"
                    onChange={changeHandler}
                    value={task.category}
                    required
                  />
                </div>
                {/* priority */}
                <div className="mt-4">
                  <label htmlFor="language">Language</label>
                  <input
                    className="w-full block rounded-md   disabled   bg-[#2D323F] px-3 py-2.5 mt-2.5"
                    type="text"
                    name="language"
                    id="language"
                    onChange={changeHandler}
                    value={task.language}
                    required
                  />
                </div>
              </div>
            </div>
            {/* Save and cancel button */}
            <div className="flex items-center justify-between mt-20">
              <button
                className=" px-2 sm:px-4 py-2  text-sm sm:text-base cursor-pointer  bg-red-700 rounded-lg text-white"
                type="button"
                onClick={closeModalHandler}
              >
                Close
              </button>
              <button className=" px-2 sm:px-4 py-2    cursor-pointer text-sm sm:text-base  bg-blue-800 rounded-lg text-white" type="submit">
                {isEdit ? "Update Task" : "Create New Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskModal;

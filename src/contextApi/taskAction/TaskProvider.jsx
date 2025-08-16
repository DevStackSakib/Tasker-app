import React, { createContext, useContext, useState } from "react";

// Create of context
const TaskContext = createContext();

// Custom Hook of context reuseble
export const useTaskContext = () => useContext(TaskContext);

// TaskProvider
const TaskProvider = ({ children }) => {
  // dummy data
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Atomic Habits",
    description: "Learn how small daily habits can lead to big life changes.",
    tags: ["Tag1", "Tag2"],
    category: "Self-help",
    language: "English",
    priority: "Medium",
  };

  // Tasks Store
  const [tasks, setTasks] = useState([defaultTask]);
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Edit Task State
  const [taskUpdate, setTaskUpdate] = useState(null);

  // Add New Task Handler
  const addEditTaskHandler = (newTask, isEdit) => {
    if (isEdit) {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    } else {
      setTasks([...tasks, newTask]);
    }
    setIsModalOpen(false);
  };
  // Edit Task Handler
  const editTask = (task) => {
    setTaskUpdate(task);
    setIsModalOpen(true);
  };
  // Delete Task Handler
  const deleteTaskHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <TaskContext.Provider
        value={{ tasks, setTasks, isModalOpen, setIsModalOpen, addEditTaskHandler, editTask, deleteTaskHandler, taskUpdate, setTaskUpdate }}
      >
        {children}
      </TaskContext.Provider>
    </>
  );
};

export default TaskProvider;

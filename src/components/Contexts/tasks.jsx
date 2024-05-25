import { createContext, useState } from "react";

/* function getTaskFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("task"));
  } catch (error) {
    console.log(error);
    return null;
  }
} */

export const TasksContext = createContext(null);
export const TasksProvider = ({ children }) => {
  const [task, setTask] = useState();
  const [isLoading, setIsLoading] = useState();
  return (
    <TasksContext.Provider value={{ task, setTask, isLoading, setIsLoading }}>
      {children}
    </TasksContext.Provider>
  );
}

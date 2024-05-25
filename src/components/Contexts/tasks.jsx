import { createContext, useState } from "react";

function getTaskFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("task"));
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const TasksContext = createContext(null);
export const TasksProvider = ({ children }) => {
  const [task, setTask] = useState(getTaskFromLocalStorage());
  const [isLoading, setIsLoading] = useState();
  const putDownTask = (task) => {
    setTask(task);
    localStorage.setItem("task", JSON.stringify(task));
  return (
    <TasksContext.Provider value={{ task, setTask, isLoading, setIsLoading, putDownTask }}>
      {children}
    </TasksContext.Provider>
  );
};
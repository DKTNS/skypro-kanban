import { createContext, useState } from "react";

function getTaskFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("task"));
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState(getTaskFromLocalStorage());

  const putDownTask = (task) => {
    setTask(task);
    localStorage.setItem("task", JSON.stringify(task));
  };
  return (
    <Provider>
    <TaskContext value={{ task, putDownTask }}>
      {children}
    </TaskContext>
    </Provider>
  );
};

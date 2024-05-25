import { useContext } from "react";
import { TasksContext } from "../Contexts/tasks.jsx";

export function useTasks() {
  return useContext(TasksContext);
}

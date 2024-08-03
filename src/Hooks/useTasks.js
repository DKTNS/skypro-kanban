import { useContext } from "react";
import { TasksContext } from "../components/Contexts/tasks";

export function useTasks() {
  return useContext(TasksContext);
}



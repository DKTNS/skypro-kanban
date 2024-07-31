import { useContext } from "react";
import { TasksContext } from "../Contexts/tasks.jsx";

export function useTask() {
  return useContext(TasksContext);
}

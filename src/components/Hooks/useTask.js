import { useContext } from "react";
import { TaskContext } from "../Contexts/tasks";

export function useTask() {
  return useContext(TaskContext);
}

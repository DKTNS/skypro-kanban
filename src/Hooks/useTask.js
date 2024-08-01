import { useContext } from "react";
import { TaskContext } from "../components/Contexts/tasks";



export function useTask () {
  return useContext(TaskContext);
}

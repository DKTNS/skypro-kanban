import { useContext } from "react";

export function useTask() {
  return useContext(TaskContext);
}

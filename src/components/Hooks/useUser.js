import { useContext } from "react";
import { UserContext } from "../Contexts/user";

export function useUser() {
  return useContext(UserContext);
}

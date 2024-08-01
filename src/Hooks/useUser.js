import { useContext } from "react";
import { UserContext } from "../components/Contexts/user";

export function useUser() {
  return useContext(UserContext);
}

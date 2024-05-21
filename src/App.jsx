import { Routes, Route, useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
//import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignupPage from "./pages/SignupPage/SignupPage";
import MainPage from "./pages/MainPage/MainPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import "./App.css";

export default function App() {
  /*const [user, setUser] = useState(null);
  const navigate = useNavigate();
  function login(newUser) {
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }
  function logout() {
    setUser(null);
    navigate(appRoutes.SIGNIN);
  } */
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
          {/* <Route path={appRoutes.NEWTASK} element={<NewCardPage />} /> */}
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SigninPage />} />
      <Route path={appRoutes.SIGNUP} element={<SignupPage />} />
      <Route path={appRoutes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

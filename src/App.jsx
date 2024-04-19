import { Routes, Route, Navigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignupPage from "./pages/SignupPage/SignupPage";
import MainPage from "./pages/MainPage/MainPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(true);
  function Login () {
    setUser(true);
    Navigate(appRoutes.MAIN);
  } 
  function Logout(){
    setUser(false);
    Navigate(appRoutes.SIGNIN);
  }
  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route Login={Login} Logout={Logout} path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SigninPage Login={Login} />} />
      <Route path={appRoutes.SIGNUP} element={<SignupPage Logout={Logout} />} />
      <Route path={appRoutes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

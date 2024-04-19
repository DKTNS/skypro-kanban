import { Routes, Route, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  function login () {
    setUser(true);
    navigate(appRoutes.MAIN);
  } 
  function logout(){
    setUser(false);
    navigate(appRoutes.SIGNIN);
  }
  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route login={login} 
          logout={logout} 
          path={appRoutes.EXIT} 
          element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SigninPage login={login} />} />
      <Route path={appRoutes.SIGNUP} element={<SignupPage logout={logout} />} />
      <Route path={appRoutes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

import { Routes, Route, useNavigate, Link } from "react-router-dom";
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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  function login(newUser) {
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }
  function logout() {
    setUser(null);
    /* navigate(appRoutes.SIGNIN); */
  }
  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage user={user} />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
          {/* <Route path={appRoutes.NEW_CARD} element={<NewCardPage />} /> */}
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SigninPage login={login} />} />
      <Route path={appRoutes.SIGNUP} element={<SignupPage logout={logout} />} />
      <Route path={appRoutes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

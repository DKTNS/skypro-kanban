import { Route, Routes } from "react-router-dom";
import "./App.css";
import { appRoutes } from "./Styleds/lib/appRoutes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import TaskPage from "./pages/TaskPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import AddTaskPage from "./pages/AddTaskPage/AddTaskPage";
import MainPage from "./pages/MainPage/MainPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import NotFaundPage from "./pages/NotFaundPage/NotFaundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
          <Route path={appRoutes.ADD_TASK} element={<AddTaskPage />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SigninPage />} />
      <Route path={appRoutes.SIGNUP} element={<SignupPage />} />
      <Route path={appRoutes.NOTFOUND} element={<NotFaundPage />} />
    </Routes>
  );
}

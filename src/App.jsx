import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignupPage from "./pages/SignupPage/SignupPage";
import MainPage from "./pages/MainPage/MainPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PopUpExit from "./components/popup/popexit/PopUpExit";
import PopUpNewCard from "./components/popup/popnewcard/PopUpNewCard";
import PopUpBrowse from "./components/popup/popbrowse/PopUpBrowse";
import WatchTaskPage from "./pages/WatchTaskPage/WatchTaskPage";
import "./App.css";





export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          
          <Route path={appRoutes.WATCHTASK} element={<WatchTaskPage />} />
          <Route path={appRoutes.EDITTASK} element={<PopUpBrowse />} />
          <Route path={appRoutes.TASK} element={<PopUpNewCard />} />
          <Route path={appRoutes.EXIT} element={<PopUpExit />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SigninPage />} />
      <Route path={appRoutes.SIGNUP} element={<SignupPage />} />
      <Route path={appRoutes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

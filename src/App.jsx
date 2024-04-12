import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MainPage from "./pages/MainPage/MainPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";

export default function App() {
  const [user, setUser] = useState(false);
  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage />} />
      </Route>
      <Route path={appRoutes.SIGIN} element={<SigninPage />} />
      <Route path={appRoutes.SINGUP} element={<SignupPage />} />
      <Route path={appRoutes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

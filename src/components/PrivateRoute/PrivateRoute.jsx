import { appRoutes } from "../../lib/appRoutes";

export default function PrivateRoute({ user }) {
  return user ? <Outlet /> : <Navigate to={appRoutes.SIGIN} />
};

import { useSelector } from "react-redux";
import { selectIsLogin } from "../components/redux/auth/slice";
import { Navigate } from "react-router-dom";

function PrivateRoute({ component: Component, routePath }) {
    const isLoggedIn = useSelector(selectIsLogin);
    return isLoggedIn ? Component : <Navigate to={routePath} />;
}

export default PrivateRoute;

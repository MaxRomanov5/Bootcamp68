import React from "react";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../components/redux/auth/slice";
import { Navigate } from "react-router-dom";

function PublicRoute({ component: Component, routePath }) {
    const isLoggedIn = useSelector(selectIsLogin);
    return isLoggedIn ? <Navigate to={routePath} /> : Component;
}

export default PublicRoute;

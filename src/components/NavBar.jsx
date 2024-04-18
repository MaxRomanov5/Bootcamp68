import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLogin } from "./redux/auth/slice";
import { logout } from "./redux/auth/operation";

function NavBar() {
    const isLoggedIn = useSelector(selectIsLogin);
    const dispatch = useDispatch();
    return (
        <header>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/gallery"}>Gallery</NavLink>
                </li>
                {!isLoggedIn ? (
                    <>
                        <li>
                            <NavLink to={"/register"}>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/login"}>Login</NavLink>
                        </li>
                    </>
                ) : (
                    <li>
                        <button
                            type="button"
                            onClick={() => dispatch(logout())}
                        >
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </header>
    );
}

export default NavBar;

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout({ children }) {
    return (
        <>
            <NavBar></NavBar>
            <div>{children}</div>
        </>
    );
}

export default Layout;

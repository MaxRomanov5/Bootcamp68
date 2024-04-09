import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
        </Suspense>
    );
}

export default Layout;

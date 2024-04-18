import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import FormProduct from "./pages/FormProduct/FormProduct.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import PublicRoute from "./routes/PublicRoute.jsx";
import Layout from "./components/Layout.jsx";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />

                    <Route
                        path="/gallery"
                        element={
                            <PrivateRoute
                                component={<Gallery />}
                                routePath={"/login"}
                            />
                        }
                    />

                    <Route path="/form" element={<FormProduct />} />
                    <Route path="/:productId" element={<ProductDetails />} />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute
                                component={<Login />}
                                routePath={"/gallery"}
                            />
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <PublicRoute
                                component={<Register />}
                                routePath={"/gallery"}
                            />
                        }
                    />
                </Routes>
            </Layout>
        </>
    );
}

export default App;

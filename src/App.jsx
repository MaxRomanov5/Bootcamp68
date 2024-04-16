import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import FormProduct from "./pages/FormProduct/FormProduct.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Gallery />} />
                <Route path="/form" element={<FormProduct />} />
                <Route path="/:productId" element={<ProductDetails />} />
            </Routes>
        </>
    );
}

export default App;

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import CountryList from "./pages/CountryList/CountryList.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import SerchForm from "./components/SerchForm/SerchForm.jsx";
import Sidebar from "./pages/Sidebar/Sidebar.jsx";
import { Routes, Route, NavLink } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <>
      <header>
        <NavLink to='/'>
            Sidebar
        </NavLink>
        <NavLink to='/gallery'>
            Gallery
        </NavLink>
        <NavLink to='/country'>
            Country List
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/country" element={<CountryList />} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
      </main>  
    </>
  );
}

export default App;

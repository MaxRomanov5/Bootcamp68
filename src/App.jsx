import "./App.css";
// import CountryList from "./pages/CountryList/CountryList.jsx";
// import Gallery from "./pages/Gallery/Gallery.jsx";
// import Sidebar from "./pages/Sidebar/Sidebar.jsx";
import { Routes, Route, NavLink } from "react-router-dom";
// import NotFound from "./pages/NotFound/NotFound.jsx";
// import BookList from "./pages/BookList/BookList.jsx";
// import BookDetails from "./pages/BookDetails/BookDetails.jsx";
// import Review from "./components/Review/Review.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { lazy } from "react";

const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const BookList = lazy(() => import("./pages/BookList/BookList.jsx"));
const BookDetails = lazy(() => import("./pages/BookDetails/BookDetails.jsx"));
const Review = lazy(() => import("./components/Review/Review.jsx"));
const Sidebar = lazy(() => import("./pages/Sidebar/Sidebar.jsx"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery.jsx"));
const CountryList = lazy(() => import("./pages/CountryList/CountryList.jsx"));

function App() {
    return (
        <>
            <header>
                <NavLink to="/">Sidebar</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/country">Country List</NavLink>
                <NavLink to="/books">Books List</NavLink>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Sidebar />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/country" element={<CountryList />} />
                        <Route path="/books" element={<BookList />} />
                        <Route path="/books/:bookId" element={<BookDetails />}>
                            <Route path="reviews" element={<Review />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </main>
        </>
    );
}

export default App;

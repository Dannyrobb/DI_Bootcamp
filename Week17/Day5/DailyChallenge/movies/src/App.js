import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MoviePage from "./components/MoviePage";
import Navbar from "./components/Navbar";
function App(props) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;

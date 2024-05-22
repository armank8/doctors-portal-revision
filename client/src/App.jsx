import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/shared/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

export default function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

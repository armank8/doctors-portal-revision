import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/shared/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Appointment from "./pages/Appointment/Appointment";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

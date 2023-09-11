import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Shopping-cart" element={<ShoppingCart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

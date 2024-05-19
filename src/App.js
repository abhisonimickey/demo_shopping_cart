import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Customer from "./Components/Customer";

const App = () => {
  return (
    <div style={{textAlign:"center"}}>
    <div className="container btn btn-info">
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/customer" element={<Customer />}></Route>

        </Routes>
      </div>
    </div>
    </div>
  );
};
export default App;

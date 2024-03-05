import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/public/Home/Home";
import RestaurantDetail from "./pages/public/RestaurantDetail/RestaurantDetail";
import Login from "./pages/public/Login/Login";
import Register from "./pages/public/Register/Register";
import BookingInfo from "./pages/Staffs/BookingInfo/BookingInfo";
import Checkin from "./pages/Staffs/Checkin/Checkin";
import Checkout from "./pages/Staffs/Checkout/Checkout";
import StaffLogin from "./pages/Staffs/Login/StaffLogin";
import ManagerLogin from "./pages/Manager/Login/ManagerLogin";
import ManagerHome from "./pages/Manager/ManagerHome/ManagerHome";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurantdetail" element={<RestaurantDetail />} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/userregister" element={<Register />} />
        <Route path="/bookinginfo" element={<BookingInfo />} />
        <Route path="/checkin" element={<Checkin />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/stafflogin" element={<StaffLogin />} />
        <Route path="/managerlogin" element={<ManagerLogin />} />
        <Route path="/managerhome" element={<ManagerHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import LoginCustomer from '../../pages/auth/login/LoginCostumer';
import RegisterCustomer from '../../pages/auth/register/RegisterCustomer';
import LoginSeller from '../../pages/auth/login/LoginSeller';
import RegisterSeller from '../../pages/auth/register/RegisterSeller';
import ResetPassword from '../../pages/auth/ResetPassword';
import ConfirmPassword from '../../pages/auth/ConfirmPassword';
import ConfirmLogin from '../../pages/auth/ConfirmLogin';
import Detail from '../../pages/detail/Detail';
import Mybag from '../../pages/mybag/MyBag';
import Checkout from '../../pages/checkout/Checkout';
import MyOrder from '../../pages/profile/seller/MyOrder';
import Test from '../../pages/test';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-customer" element={<LoginCustomer />} />
        <Route path="/register-customer" element={<RegisterCustomer />} />
        <Route path="/register-seller" element={<RegisterSeller />} />
        <Route path="/login-seller" element={<LoginSeller />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/confirm-login" element={<ConfirmLogin />} />
        {/* <Route path="/product" element={<Detail />} /> */}
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/my-bag" element={<Mybag />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-order" element={<MyOrder />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

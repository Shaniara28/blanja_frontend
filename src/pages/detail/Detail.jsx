import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import NavbarLogin from '../../components/navbar/NavbarLogin';
import DetailProduct from './DetailProduct';

const Detail = () => {
  const isLogin = localStorage.getItem('token');

  if (!isLogin) {
    return (
      <>
        <Navbar />
        <DetailProduct />
      </>
    );
  } else {
    return (
      <>
        <NavbarLogin />
        <DetailProduct />
      </>
    );
  }
};

export default Detail;

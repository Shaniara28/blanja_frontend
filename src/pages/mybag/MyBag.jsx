import React from 'react';
import NavbarLogin from '../../components/navbar/NavbarLogin';
import Filter from '../../components/filter/Filter';
import Cart from '../../components/cart/Cart';

const Mybag = () => {
  return (
    <>
      <NavbarLogin />
      <Filter />
      <Cart />
    </>
  );
};

export default Mybag;

import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Category from '../../components/category/Category';
import Navbar from '../../components/navbar/Navbar';
import NavbarLogin from '../../components/navbar/NavbarLogin';
import Product from '../../components/product/Product';
// import style from './home.module.css';

const Home = (props) => {
  const isLogin = localStorage.getItem('token');

  if (!isLogin) {
    return (
      <>
        <Navbar />
        <Carousel />
        <Category />
        <Product title="New" paragraf="You've never seen it before" />
        <Product title="Populer" paragraf="Find clothes that are trending recently" />
      </>
    );
  } else {
    return (
      <>
        <NavbarLogin />
        <Carousel />
        <Category />
        <Product title="New" paragraf="You've never seen it before" />
        <Product title="Populer" paragraf="Find clothes that are trending recently" />
      </>
    );
  }
};

export default Home;

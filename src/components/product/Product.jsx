import React from 'react';
import style from './style.module.css';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import { FormatRupiah } from '@arismun/format-rupiah';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../redux/action/ProductAction';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(setProducts));
    // axios
    //   .get(`${process.env.REACT_APP_BACKEND}/products`)
    //   .then(function (response) {
    //     setProducts(response.data.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  return (
    <section className="container products mt-5">
      <div className={`${style.headerProducts} header-products`}>
        <h1 className={style.titleText}>{props.title}</h1>
        <p className={style.paragrafText}>{props.paragraf}</p>
      </div>

      <div className="content-products">
        <div className="row">
          {products.map((item, index) => {
            return (
              <div className="col-lg-3 col-sm-12 col-12 col-md-6 mb-4 ">
                <Link to={`/products/${item.id_produk}`} key={index.toString()}>
                  <div className={`${style.card} card`}>
                    <img crossOrigin="anonymous" src={item.photo} alt="" />
                    <div className="card-body">
                      <p className={style.text}>{item.name}</p>
                      <p className={style.price}>
                        <FormatRupiah value={item.price} />
                      </p>
                      <p className={style.detail}>{item.seller_name}</p>
                      <div className="d-flex">
                        <span className="bi-star-fill ms-2 text-warning"></span>
                        <span className="bi-star-fill ms-2 text-warning"></span>
                        <span className="bi-star-fill ms-2 text-warning"></span>
                        <span className="bi-star-fill ms-2 text-warning"></span>
                        <span className="bi-star-fill ms-2 text-warning"></span>
                        <p className="ms-2 .text-black">{'(10)'}</p>
                      </div>

                      {/* <img src={require('../../assets/img/star.png')} alt="star" />
                    <img src={require('../../assets/img/star.png')} alt="star" />
                    <img src={require('../../assets/img/star.png')} alt="star" />
                    <img src={require('../../assets/img/star.png')} alt="star" />
                    <img src={require('../../assets/img/star.png')} alt="star" /> */}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;

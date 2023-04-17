import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Category from '../../components/category/Category';
import Navbar from '../../components/navbar/Navbar';
import NavbarLogin from '../../components/navbar/NavbarLogin';
import Product from '../../components/product/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormatRupiah } from '@arismun/format-rupiah';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../redux/action/ProductAction';
import { Link } from 'react-router-dom';
import style from '../../components/product/style.module.css';

// import style from './home.module.css';

const Home = (props) => {
  const isLogin = localStorage.getItem('token');

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState();
  // const [pagination, setPagination] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  // const [sortBY, setSortBY] = useState('name');
  // const [sortOrder, setsortOrder] = useState('asc');

  const dispatch = useDispatch();

  // const filterUser = (key, page) => {
  //   axios.get(`${process.env.REACT_APP_BACKEND}products?search=${search ? search : ''}&sortBY=${sortBY}&sort=${sortOrder}&page=${page ? page : 1}`).then((res) => {
  //     setProducts(res.data.data);
  //     setPagination(res.data.pagination);
  //   });
  // };

  // const handleSearch = async (e) => {
  //   if (e.key === 'Enter') {
  //     setCurrentPage(1);
  //     filterUser(search, currentPage);
  //   }
  // };

  // const handlePage = (page) => {
  //   setCurrentPage(page);
  //   filterUser(search, page);
  // };

  // const handleSort = () => {
  //   if (sortBY == 'name') {
  //     setSortBY('jobdesk');
  //   } else {
  //     setSortBY('name');
  //   }
  //   filterUser(sortOrder, sortOrder, 3, currentPage);
  // };

  // const handleAsc = () => {
  //   if (sortOrder == 'asc') {
  //     setsortOrder('desc');
  //   } else {
  //     setsortOrder('asc');
  //   }
  //   filterUser(sortOrder, sortOrder, 3, currentPage);
  // };

  const [sort, setSort] = useState('name');
  const [asc, setAsc] = useState('asc');
  const [page, setPage] = useState(1);
  useEffect(() => {
    getDataProduct(sort, asc, 5, page);
  }, [sort, asc, page]);
  const getDataProduct = (sort, asc, limit, page) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/products?search=${search ? search : ''}&sortby=${sort}&sort=${asc}&limit=${limit}${page ? `&page=${page}` : ''}`)
      .then((response) => {
        console.log(response.data.data);
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSorting = () => {
    if (sort === 'name') {
      setSort('price');
    } else {
      setSort('name');
    }
    getDataProduct(sort, asc, 3, page);
  };

  const handleSortasc = () => {
    if (asc === 'asc') {
      setAsc('desc');
    } else {
      setAsc('asc');
    }
    getDataProduct(sort, asc, 3, page);
  };

  const NextPage = () => {
    setPage(page + 1);
    getDataProduct(sort, asc, 3, page);
    console.log(page);
  };
  const PreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log(page);
      getDataProduct(sort, asc, 3, page - 1);
    }
  };

  // useEffect(() => {
  //   filterUser();
  // }, [search]);

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
        {/* <Product title="New" paragraf="You've never seen it before" /> */}
        <section className="container products mt-5">
          <div className={`${style.headerProducts} header-products`}>
            <h1 className={style.titleText}>New</h1>
            <p className={style.paragrafText}>You've never seen it before</p>
          </div>
          <div className="dropdown mb-2">
            <button className={`btn btn-outline-danger dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item" href="#" onClick={() => handleSortasc()}>
                Sortir by {asc}
              </li>
              <li className="dropdown-item" href="#" onClick={() => handleSorting()}>
                Sortir by {sort}
              </li>
            </ul>
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
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
              <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation example ">
                  <ul className="pagination d">
                    <li onClick={() => PreviousPage()} className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        {page}
                      </a>
                    </li>

                    <li disabled={products <= 0} onClick={() => NextPage()} className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <Product title="Populer" paragraf="Find clothes that are trending recently" />
      </>
    );
  }
};

export default Home;

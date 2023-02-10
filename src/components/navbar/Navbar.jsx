import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className={`${style.navbar} navbar navbar-expand-lg bg-body-tertiary fixed-top`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={require('../../assets/img/Vector.png')} alt="Logo" className={`${style.logo} me-2 logo`} />
            <strong className={style.textBlanja}>Blanja</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${style.navbarCollapse} collapse navbar-collapse text-center`} id="navbarNav">
            <form className={`${style.searchForm} d-flex ms-auto my-3 search-form`} role="search">
              <input className={`${style.search} form-control me-3`} type="search" placeholder="  Search" aria-label="Search" />
              <button className={style.searchButton} type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
            <button className={`${style.btnFilter} btn btn-filter`} type="submit">
              <i className="bi bi-funnel"></i>
            </button>
            <ul className="navbar-nav ms-auto">
              <li className={`${style.navItem} nav-item`}>
                <a className="nav-link active" aria-current="page" href="mybag.html">
                  <i className={`${style.cartLogo} bi bi-cart2 text-secondary fs-5`}></i>
                </a>
              </li>
              <li className="nav-item me-0">
                <form className="container-fluid justify-content-start px-0">
                  <Link to="/login-customer">
                    <button className={`${style.login} btn`} type="button">
                      Login
                    </button>
                  </Link>
                  <Link to="/register-customer">
                    <button className={`${style.signup} btn signup ms-3`} type="button">
                      Sign Up
                    </button>
                  </Link>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from 'react';
import style from './registerSeller.module.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const RegisterSeller = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    store: '',
  });

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      axios
        .post(`${process.env.REACT_APP_BACKEND}/seller/auth/register`, { ...data })
        .then((response) => {
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(response);
          return navigate('/login-seller');
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={`${style.container} container mt-5`}>
        <div className="login p-2">
          <div className="form-login">
            <div className={`${style.logo} d-flex justify-content-center`} href="#">
              <img src={require('../../../assets/img/Vector.png')} alt="Logo" className="me-2" />
              <p className={style.textBlanja}>Blanja</p>
            </div>
            <p className={`${style.loginText} mt-5 text-center`}>Please sign up with your account</p>
            <div className="change mt-5 d-flex justify-content-center">
              <Link to="/register-customer">
                <div className={style.changeCustomer}>Customer</div>
              </Link>
              <Link to="/register-seller">
                <div className={style.changeSeller}>Seller</div>
              </Link>
            </div>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="name" className={`${style.formControl} form-control`} id="fullname" name="fullname" value={data.fullname} onChange={(e) => changeHandler(e)} aria-describedby="nameHelp" placeholder="  Name" />
              </div>
              <div className="mb-3">
                <input type="email" className={`${style.formControl} form-control`} id="email" name="email" value={data.email} onChange={(e) => changeHandler(e)} aria-describedby="emailHelp" placeholder="  Email" />
              </div>
              <div className="mb-3">
                <input type="number" className={`${style.formControl} form-control`} id="phone" name="phone" value={data.phone} onChange={(e) => changeHandler(e)} aria-describedby="phoneHelp" placeholder="  Phone" />
              </div>
              <div className="mb-3">
                <input type="text" className={`${style.formControl} form-control`} id="store" name="store" value={data.store} onChange={(e) => changeHandler(e)} aria-describedby="storeHelp" placeholder="  Store" />
              </div>
              <div className="mb-3">
                <input type="password" className={`${style.formControl} form-control`} id="password" name="password" value={data.password} onChange={(e) => changeHandler(e)} placeholder="  Password" />
              </div>
              <p className="mt-4 text-end">
                <Link className={style.link} to="/reset-password">
                  Forgot password?
                </Link>
              </p>
              <button type="submit" className={`${style.btnSubmit} btn btn-submit mt-3`}>
                Submit
              </button>
              <p className="mt-5 text-center">
                Already have Blanja account?{' '}
                <Link className={style.link} to="/login-seller">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterSeller;

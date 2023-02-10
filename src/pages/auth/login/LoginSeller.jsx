import React from 'react';
import style from './loginSeller.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const LoginSeller = () => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/seller/auth/login`, { email, password });

      localStorage.setItem('token', response.data.data.token);
      if (localStorage.getItem('token')) {
        Navigate('/');
        window.location.reload();
      }
    } catch (error) {
      console.log(error.response);
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
            <p className={`${style.loginText} mt-5 text-center`}>Please login with your account</p>
            <div className="change mt-5 d-flex justify-content-center">
              <Link to="/login-customer">
                <div className={style.changeCustomer}>Customer</div>
              </Link>
              <Link to="/login-seller">
                <div className={style.changeSeller}>Seller</div>
              </Link>
            </div>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="email" className={`${style.formControl} form-control`} id="email" aria-describedby="emailHelp" placeholder="  Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="password" className={`${style.formControl} form-control`} id="password" placeholder="  Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                Don't have a Blanja account?{' '}
                <Link className={style.link} to="/register-seller">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSeller;

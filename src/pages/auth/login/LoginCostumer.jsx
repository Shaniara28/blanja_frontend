import React from 'react';
import style from './loginCustomer.module.css';
import { Link } from 'react-router-dom';

const LoginCostumer = () => {
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
            <form className="mt-5">
              <div className="mb-3">
                <input type="email" className={`${style.formControl} form-control`} id="email" aria-describedby="emailHelp" placeholder="  Email" />
              </div>
              <div className="mb-3">
                <input type="password" className={`${style.formControl} form-control`} id="password" placeholder="  Password" />
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
                <Link className={style.link} to="/register-customer">
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

export default LoginCostumer;

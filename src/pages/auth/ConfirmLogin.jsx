import React from 'react';
import style from './confirmLogin.module.css';

const ConfirmLogin = () => {
  return (
    <>
      <div className={`${style.container} container mt-5`}>
        <div className="login p-2">
          <div className="form-login">
            <div className={`${style.logo} d-flex justify-content-center`} href="#">
              <img src={require('../../assets/img/Vector.png')} alt="Logo" className="me-2" />
              <p className={style.textBlanja}>Blanja</p>
            </div>
            <p className={`${style.loginText} mt-5 text-center`}>Please login with your account</p>
            <p className={`${style.text} mt-2 text-center`}>We have sent an email containing a password reset instruction to your email. please check your email.</p>
            <form className="mt-5">
              <div className="mb-3">
                <input type="email" className={`${style.formControl} form-control`} id="email" aria-describedby="emailHelp" placeholder="  Email" />
              </div>
              <div className="mb-3">
                <input type="password" className={`${style.formControl} form-control`} id="password" placeholder="  Password" />
              </div>
              <button type="submit" className={`${style.btnSubmit} btn btn-submit mt-4`}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmLogin;

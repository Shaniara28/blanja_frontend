import React from 'react';
import style from './confirmPassword.module.css';

const ConfirmPassword = () => {
  return (
    <>
      <div className={`${style.container} container mt-5`}>
        <div className="login p-2">
          <div className="form-login">
            <div className={`${style.logo} d-flex justify-content-center`} href="#">
              <img src={require('../../assets/img/Vector.png')} alt="Logo" className="me-2" />
              <p className={style.textBlanja}>Blanja</p>
            </div>
            <p className={`${style.loginText} mt-5 text-center`}>Reset password</p>
            <p className={`${style.text} mt-2 text-center`}>You need to change your password to active your account</p>
            <form className="mt-5">
              <div className="mb-3">
                <input type="password" className={`${style.formControl} form-control`} id="password" placeholder="  Password" />
              </div>
              <div className="mb-3">
                <input type="password" className={`${style.formControl} form-control`} id="password" placeholder="  Confirmation New Password" />
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

export default ConfirmPassword;

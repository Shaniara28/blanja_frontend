import React from 'react';
import style from './style.module.css';

const Category = (props) => {
  return (
    <>
      <section className="container category">
        <div className="category">
          <div className="text-category">
            <h1 className={style.titleText}>Category</h1>
            <p className={style.paragrafText}>What are you looking for?</p>
          </div>
          <div className="content-category mt-4 mb-2">
            <div className={`${style.categoryContent} row justify-content-center category-content`}>
              <div className={`${style.cat1} col-3 col-sm-4`}>
                <img src={require('../../assets/img/tshirt.png')} alt="" />
                <p className={style.paragraf}>T-shirt</p>
              </div>
              <div className={`${style.cat2} col-3 col-sm-4`}>
                <img src={require('../../assets/img/short.png')} alt="" />
                <p className={style.paragraf}>Shorts</p>
              </div>
              <div className={`${style.cat3} col-3 col-sm-4`}>
                <img src={require('../../assets/img/jacket.png')} alt="" />
                <p className={style.paragraf}>Jacket</p>
              </div>
              <div className={`${style.cat4} col-3 col-sm-4`}>
                <img src={require('../../assets/img/pants.png')} alt="" />
                <p className={style.paragraf}>Pants</p>
              </div>
              <div className={`${style.cat5} col-4 col-sm-4`}>
                <img src={require('../../assets/img/shoes.png')} alt="" />
                <p className={style.paragraf}>Shoes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;

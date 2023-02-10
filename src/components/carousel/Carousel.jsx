import React from 'react';
import style from './style.module.css';

const Carousel = () => {
  return (
    <>
      <section className={`${style.carousel} container`}>
        <div id="carouselExampleCaptions" className={`${style.slide} carousel slide`} data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className={`${style.carouselInner} carousel-inner`}>
            <div className={`${style.cItem} carousel-item`}>
              <img src={require('../../assets/img/trend.png')} className={`${style.cImg} d-block w-100`} alt="Promotion" />
              <div className={`${style.carouselCaption} carousel-caption d-md-block mb-4`}>
                <p>Trend in 2023</p>
              </div>
            </div>
            <div className={`${style.cItem} carousel-item active`}>
              <img src={require('../../assets/img/black.png')} className={`${style.cImg} d-block w-100`} alt="Promotion" />
              <div className={`${style.carouselCaption} carousel-caption d-md-block mb-4`}>
                <p>Black Edition</p>
              </div>
            </div>
            <div className={`${style.cItem} carousel-item`}>
              <img src={require('../../assets/img/grey.jpg')} className={`${style.cImg} d-block w-100`} alt="Promotion" />
              <div className={`${style.carouselCaption} carousel-caption d-md-block mb-4`}>
                <p>Diskon Up To 50%</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Carousel;

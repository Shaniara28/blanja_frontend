import React from 'react';
import ImageGrid from './ImageGrid/ImageGrid';
import Color from './PickDetails/Color';
import Quantity from './PickDetails/Quantity';
import './detailProduct.css';
import Button from './PickDetails/Button';
import Product from '../../components/product/Product';

const DetailProduct = () => {
  return (
    <div>
      <section className="detail-product container mt-5">
        <div className="adds">
          <div className="row">
            <div className="image-grid col-xxl-5 col-xl-5 col-md-6 col-lg-5 col-sm-12 col-12">
              <ImageGrid />
            </div>
            <div className="details col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 py-xxl-0 py-lg-0 py-md-0 py-5">
              <h4 className="fw-bold">Baju Muslim Pria</h4>
              <p>Zalora Cloth</p>
              <div className="rating-product mb-4">
                <div className="star">
                  <img src={require('../../assets/img/star.png')} alt="star" />
                  <img src={require('../../assets/img/star.png')} alt="star" />
                  <img src={require('../../assets/img/star.png')} alt="star" />
                  <img src={require('../../assets/img/star.png')} alt="star" />
                  <img src={require('../../assets/img/star.png')} alt="star" />
                </div>
              </div>
              <p className="price">Price</p>
              <h4 className="money">$ 20.0</h4>

              <div className="row color">
                <Color />
              </div>

              <div className="quantity row mt-4">
                <Quantity />
              </div>
              <div className="row buttonBuy my-xxl-5 my-lg-5 my-md-5 my-5 ">
                <Button />
              </div>
            </div>
          </div>
        </div>

        <div className="information">
          <div className="row py-xxl-5 py-lg-5 py-md-5 py-5">
            <div className="col-12">
              <h2 style={{ fontWeight: 'bold', paddingBottom: '30px' }}>Informasi Produk</h2>
            </div>
            <div className="col-12">
              <p style={{ fontWeight: 'bold' }}>Condition</p>
              <p style={{ color: 'red', marginTop: '-15px', paddingBottom: '30px' }}>New</p>
            </div>
            <div className="col-12">
              <div className="description">
                <h4 style={{ fontWeight: 'bold' }}>Description</h4>
                <p style={{ color: 'grey', textAlign: 'justify' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  <br />
                  Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit
                  imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.
                  <br />
                  <br />
                  Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit
                  imperdiet ac ac felis.
                  <br />
                  <br />
                  In ultricies rutrum tempus. Mauris vel molestie orci.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <h2 style={{ fontWeight: 'bold', paddingTop: '50px' }}>Product Review</h2>
              </div>
              <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-6">
                  <p style={{ fontSize: '50px', fontWeight: '600', paddingTop: '20px' }}>
                    5.0<span style={{ fontSize: '20px', color: 'gray' }}> /10</span>
                  </p>
                  <div className="rating-product mb-4">
                    <div className="star">
                      <img src={require('../../assets/img/star.png')} alt="star" />
                      <img src={require('../../assets/img/star.png')} alt="star" />
                      <img src={require('../../assets/img/star.png')} alt="star" />
                      <img src={require('../../assets/img/star.png')} alt="star" />
                      <img src={require('../../assets/img/star.png')} alt="star" />
                    </div>
                  </div>
                </div>
                <div className="grafik col">
                  <div className="grafik-progres">
                    <img src={require('../../assets/img/star.png')} alt="start" />
                    <span>5</span>
                    <div className="progress">
                      <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="value">4</span>
                  </div>
                  <div className="grafik-progres">
                    <img src={require('../../assets/img/star.png')} alt="start" />
                    <span>4</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="value">0</span>
                  </div>
                  <div className="grafik-progres">
                    <img src={require('../../assets/img/star.png')} alt="start" />
                    <span>3</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="value">0</span>
                  </div>
                  <div className="grafik-progres">
                    <img src={require('../../assets/img/star.png')} alt="start" />
                    <span>2</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="value">0</span>
                  </div>
                  <div className="grafik-progres">
                    <img src={require('../../assets/img/star.png')} alt="start" />
                    <span>1</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="value">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product">
            <Product title="You can also like this" paragraf="You've never seen it before" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailProduct;

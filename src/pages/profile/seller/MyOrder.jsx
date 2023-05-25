import React from 'react';
import NavbarLogin from '../../../components/navbar/NavbarLogin';
import './myOrder.css';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormatRupiah } from '@arismun/format-rupiah';
import ModalCreate from '../../../components/modal/ModalCreate';
import ModalEdit from '../../../components/modal/ModalEdit';
import ModalDelete from '../../../components/modal/ModalDelete';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../../redux/action/ProductAction';

const MyOrder = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
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

  return (
    <>
      <NavbarLogin />
      <main className="d-flex">
        <aside>
          <div className="profile">
            <img src={require('../../../assets/img/profile-img.png')} alt="profile-image" />
            <div className="detail">
              <span className="name">Mark</span>
              <a className="edit">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12.6662V16H3.33379L13.1707 6.16308L9.8369 2.82928L0 12.6662Z" fill="#9B9B9B" />
                  <path d="M15.74 2.33586L13.6642 0.260036C13.3174 -0.0866786 12.7529 -0.0866786 12.4062 0.260036L10.7793 1.88693L14.1131 5.22072L15.74 3.59383C16.0867 3.24711 16.0867 2.68258 15.74 2.33586Z" fill="#9B9B9B" />
                </svg>{' '}
                Ubah profile
              </a>
            </div>
          </div>
          <ul className="menus">
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div>
                  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={16} cy={16} r={16} fill="#456BF3" />
                    <path
                      d="M10 14L16 9.33337L22 14V21.3334C22 21.687 21.8595 22.0261 21.6095 22.2762C21.3594 22.5262 21.0203 22.6667 20.6667 22.6667H11.3333C10.9797 22.6667 10.6406 22.5262 10.3905 22.2762C10.1405 22.0261 10 21.687 10 21.3334V14Z"
                      stroke="white"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M14 22.6667V16H18V22.6667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="">Store</span>
                </div>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="./store.html">
                    Store profle
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div>
                  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={16} cy={16} r={16} fill="#F36F45" />
                    <path d="M19 14.2666L13 10.8066" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M22 18.6667V13.3333C21.9998 13.0995 21.938 12.8699 21.821 12.6675C21.704 12.465 21.5358 12.2969 21.3333 12.18L16.6667 9.51335C16.464 9.39633 16.234 9.33472 16 9.33472C15.766 9.33472 15.536 9.39633 15.3333 9.51335L10.6667 12.18C10.4642 12.2969 10.296 12.465 10.179 12.6675C10.062 12.8699 10.0002 13.0995 10 13.3333V18.6667C10.0002 18.9005 10.062 19.1301 10.179 19.3326C10.296 19.535 10.4642 19.7031 10.6667 19.82L15.3333 22.4867C15.536 22.6037 15.766 22.6653 16 22.6653C16.234 22.6653 16.464 22.6037 16.6667 22.4867L21.3333 19.82C21.5358 19.7031 21.704 19.535 21.821 19.3326C21.938 19.1301 21.9998 18.9005 22 18.6667Z"
                      stroke="white"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M10.1802 12.64L16.0002 16.0067L21.8202 12.64" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 22.72V16" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="">Product</span>
                </div>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="./my_products.html">
                    My products
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./selling_products.html">
                    Selling products
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div>
                  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={16} cy={16} r={16} fill="#F3456F" />
                    <path
                      d="M14.0002 22.6667C14.3684 22.6667 14.6668 22.3682 14.6668 22C14.6668 21.6319 14.3684 21.3334 14.0002 21.3334C13.632 21.3334 13.3335 21.6319 13.3335 22C13.3335 22.3682 13.632 22.6667 14.0002 22.6667Z"
                      stroke="white"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.3332 22.6667C21.7014 22.6667 21.9998 22.3682 21.9998 22C21.9998 21.6319 21.7014 21.3334 21.3332 21.3334C20.965 21.3334 20.6665 21.6319 20.6665 22C20.6665 22.3682 20.965 22.6667 21.3332 22.6667Z"
                      stroke="white"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.6665 8.66663H11.3332L13.1198 17.5933C13.1808 17.9002 13.3478 18.1759 13.5915 18.3722C13.8353 18.5684 14.1403 18.6726 14.4532 18.6666H20.9332C21.246 18.6726 21.551 18.5684 21.7948 18.3722C22.0386 18.1759 22.2055 17.9002 22.2665 17.5933L23.3332 12H11.9998"
                      stroke="white"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="active">Order</span>
                </div>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item active" href="">
                    My order
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./order_cancel.html">
                    Order cancel
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
        <div className="content">
          <div className="content-body">
            <h3>My Product</h3>
            <ul className="detail-order">
              <li className="detail-order-item">
                <a className="active" href="#">
                  All items
                </a>
              </li>
              <li className="detail-order-item">
                <a href="#">Get paid</a>
              </li>
              <li className="detail-order-item">
                <a href="#">Processed</a>
              </li>
              <li className="detail-order-item">
                <a href="#">Sent</a>
              </li>
              <li className="detail-order-item">
                <a href="#">Completed</a>
              </li>
              <li className="detail-order-item">
                <a href="#">Order cancel</a>
              </li>
            </ul>
            <hr />
            <div className="data mt-3">
              <ModalCreate />
              {/* <button className="btn btn-success mt-1 mx-1 mb-2" onClick={handleShow}>
                
              </button> */}
              <Table striped>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>color</th>
                    <th>size</th>
                    <th>description</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <FormatRupiah value={item.price} />
                      </td>
                      <td>{item.stock}</td>
                      <td>{item.color}</td>
                      <td>{item.size}</td>
                      <td>{item.deskripsi}</td>
                      <td>
                        <img crossOrigin="anonymous" className="" src={item.photo} alt="" width={50} height={55} />
                      </td>
                      <td>
                        {/* <button className="btn btn-warning mt-1 mx-1">Edit</button> */}
                        <ModalEdit
                          id={item.id_produk}
                          name={item.name}
                          price={item.price}
                          deskripsi={item.deskripsi}
                          stock={item.stock}
                          rating={item.rating}
                          color={item.color}
                          size={item.size}
                          id_category={item.id_category}
                          id_seller={item.id_seller}
                        />
                        {/* <button className="btn btn-danger mt-1 mx-1">Delete</button> */}
                        <ModalDelete id={item.id_produk} name={item.name} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyOrder;

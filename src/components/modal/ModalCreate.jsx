import React from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert';
import { createProduct } from '../../redux/action/ProductAction';
import { useDispatch } from 'react-redux';

const ModalCreate = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage] = useState(null);
  const dispatch = useDispatch();

  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }

  const [data, setData] = useState({
    name: '',
    price: '',
    stock: '',
    rating: '',
    color: '',
    size: '',
    deskripsi: '',
    id_category: '1',
    id_seller: 'ff016947-df2e-49f3-9ec1-63dadcd7bdc0',
    // photo: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    dispatch(createProduct(data, saveImage));
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append('name', data.name);
    // formData.append('price', data.stock);
    // formData.append('stock', data.price);
    // formData.append('rating', data.rating);
    // formData.append('color', data.color);
    // formData.append('size', data.stock);
    // formData.append('photo', saveImage);
    // formData.append('deskripsi', data.deskripsi);
    // formData.append('id_category', data.id_category);
    // formData.append('id_seller', data.id_seller);
    // // for (var pair of formData.entries()) {
    // //   console.log(pair[0] + ', ' + pair[1]);
    // // }
    // axios
    //   .post(process.env.REACT_APP_BACKEND + '/products', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then((res) => {
    //     Swal('Created!', 'Product Create Succes!', 'success');
    //     setShow(false);
    //     window.location.reload();
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     Swal('Failed!', 'Product Create Failed!', 'error');
    //     setShow(false);
    //   });
  };

  return (
    <>
      <Button variant="success" onClick={handleShow} className="mb-2">
        Tambah <i className="bi bi-plus-circle"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input className="form-control mt-3" type="text" placeholder="name" name="name" value={data.name} onChange={handleChange} />
            <input className="form-control mt-3" type="text" placeholder="price" name="price" value={data.price} onChange={handleChange} />
            <input className="form-control mt-3" type="text" placeholder="stock" name="stock" value={data.stock} onChange={handleChange} />
            <input className="form-control mt-3" type="text" placeholder="rating" name="rating" value={data.rating} onChange={handleChange} />
            <input className="form-control mt-3" type="text" placeholder="color" name="color" value={data.color} onChange={handleChange} />
            <input className="form-control mt-3" type="text" placeholder="size" name="size" value={data.size} onChange={handleChange} />
            <input className="form-control mt-3" type="text" placeholder="deskripsi" name="deskripsi" value={data.deskripsi} onChange={handleChange} />
            <input className="form-control mt-3" type="file" placeholder="photo" name="photo" onChange={handleUpload} />
            <input className="form-control mt-3" type="text" placeholder="id_category" name="id_category" value={data.id_category} onChange={handleChange} disabled />
            <input className="form-control mt-3" type="text" placeholder="id_seller" name="id_seller" value={data.id_seller} onChange={handleChange} disabled />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" id="button-addon2" title="Register">
              Create
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalCreate;

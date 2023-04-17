import React from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert';
import { updateProduct } from '../../redux/action/ProductAction';
import { useDispatch } from 'react-redux';

const ModalEdit = ({ id, name, price, deskripsi, stock, rating, color, size, id_category, id_seller }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    id,
    name,
    price,
    deskripsi,
    stock,
    rating,
    color,
    size,
    // photo: `http://${HOST}:${PORT}/img/${photo}`,
    id_category,
    id_seller,
  });

  const [photo, setPhoto] = useState(null);

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };
  console.log(data);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleSubmit = (e) => {
    dispatch(updateProduct(data, photo));
    // e.preventDefault();

    // const formData = new FormData();
    // formData.append('name', data.name);
    // formData.append('price', data.price);
    // formData.append('deskripsi', data.deskripsi);
    // formData.append('stock', data.stock);
    // formData.append('rating', data.rating);
    // formData.append('color', data.color);
    // formData.append('size', data.size);
    // formData.append('photo', photo);
    // formData.append('id_category', '1');
    // formData.append('id_seller', 'ff016947-df2e-49f3-9ec1-63dadcd7bdc0');

    // axios
    //   .put(`${process.env.REACT_APP_BACKEND}/products/${id}`, formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     Swal('Updated!', 'Product Update Succes!', 'success');
    //     setShow(false);
    //     window.location.reload();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Swal('Failed!', 'Product Update Failed!', 'error');
    //     setShow(false);
    //   });
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow} className="me-2">
        <i className="bi bi-pencil-square"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
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
            <Button type="submit" id="button-addon2">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalEdit;
